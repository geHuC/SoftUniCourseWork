const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page; // Declare reusable variables

function fakeResponse(data){
    return{
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    }
}

let fakeData = {
    101:{
        author: 'Ivan',
        content: 'Ivan is the best'
    },
    102:{
        author: 'Ivan',
        content: 'there is'
    },
    103:{
        author: 'Pesho',
        content: 'No, Pesho is the best'
    }
};
let fakeCreatedMessage = { 
    104:{ author: 'Dragan', content: 'Ke umrem za neq', _id:4}
}
describe('E2E tests', function() {
    before(async () => { browser = await chromium.launch(); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    describe('Message loading', () =>{
        it('Calling the server correctly', async () =>{
            await page.route('**/jsonstore/messenger', route => route.fulfill(fakeResponse(fakeData)));
            await page.goto('http://127.0.0.1:5500/01.Messenger/')
            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#refresh')
            ]);
            let result = await response.json();
            expect(result).to.be.eql(fakeData);
        });
        it('Displaying the data in the textArea', async () =>{
            await page.route('**/jsonstore/messenger', route => route.fulfill(fakeResponse(fakeData)));
            await page.goto('http://127.0.0.1:5500/01.Messenger/')
            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#refresh')
            ]);
            let result = await page.$eval('#messages', x => x.value); 
            let expected = Object.values(fakeData).map(v => `${v.author}: ${v.content}`).join('\n');
            expect(result).to.be.eql(expected);
        });
    });
    describe('Message creating', () =>{
        it('Posting to the server correctly', async () =>{
            let expected = {
                author: 'Dragan',
                content: 'Ke umrem za neq'
            }
            let requestData = undefined;

            await page.route('**/jsonstore/messenger', (route, request) => {
                if(request.method().toUpperCase() ==='POST'){
                    requestData = request.postData();
                    route.fulfill(fakeResponse(fakeCreatedMessage));
                }
            });

            await page.goto('http://127.0.0.1:5500/01.Messenger/');
            await page.fill('#author', 'Dragan');
            await page.fill('#content', 'Ke umrem za neq');

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#submit')
            ]);

            let result = JSON.parse(requestData);
            expect(result).to.be.eql(expected);
        });
        it('Clears input after posting', async () =>{
            //Don't think it's needed but we did it in the excerciese as well
            let expected = {
                author: 'Dragan',
                content: 'Ke umrem za neq'
            }
            let requestData = undefined;

            await page.route('**/jsonstore/messenger', (route, request) => {
                if(request.method().toUpperCase() ==='POST'){
                    requestData = request.postData();
                    route.fulfill(fakeResponse(fakeCreatedMessage));
                }
            });

            await page.goto('http://127.0.0.1:5500/01.Messenger/');
            await page.fill('#author', 'Dragan');
            await page.fill('#content', 'Ke umrem za neq');

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#submit')
            ]);

            let authorField = await page.$eval('#author', x => x.value);
            let contentField = await page.$eval('#content', x => x.value);

            expect(authorField).to.equal('');
            expect(contentField).to.equal('');
        });
    });
});