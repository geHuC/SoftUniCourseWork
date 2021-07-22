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
const fakeBooks = {
    101:{author: 'Doyle', title:'Holmes'},
    102:{author: 'Vazov', title:'PodIgoto'}
}
let fakeCreatedMessage = { author: 'Brown', title: 'Davici Code', _id:'104'};

describe('E2E tests', function() {
    before(async () => { browser = await chromium.launch(); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    describe('Loads all books', () =>{
        it('Calling the server correctly', async () =>{
            await page.goto('http://127.0.0.1:5500/02.Book-Library/')
            await page.route('**/jsonstore/collections/books', route => route.fulfill(fakeResponse(fakeBooks)));
             const [response] = await Promise.all([
                 page.waitForResponse('**/jsonstore/collections/books'),
                 page.click('#loadBooks')
             ]);
            let result = await response.json();
            expect(result).to.be.eql(fakeBooks);
        });
        it('Displays books in page', async () =>{
            await page.goto('http://127.0.0.1:5500/02.Book-Library/')
            await page.route('**/jsonstore/collections/books', route => route.fulfill(fakeResponse(fakeBooks)));
             const [response] = await Promise.all([
                 page.waitForResponse('**/jsonstore/collections/books'),
                 page.click('#loadBooks')
             ]);

            //ugly ugly couldn't get screenshots to work
            let nodes = await page.$$eval('tbody tr', (x) => { 
                console.log(x);
                return x.map((c) => {
                    console.log(c);
                    const title = c.querySelector('td:nth-child(1)').textContent;
                    const author = c.querySelector('td:nth-child(2)').textContent;
                    const id = c.dataset.id;
                    return {id,title,author};
                })
            });
            nodes.forEach( x => {
                expect(x.title).to.be.eql(fakeBooks[x.id].title);
                expect(x.author).to.be.eql(fakeBooks[x.id].author);
            })
        });
    });    
    describe('Add books to server books', () =>{
        it('Posting to the server correctly when input provided', async () =>{
            await page.goto('http://127.0.0.1:5500/02.Book-Library/');

            let expected = {
                author: 'Brown',
                title: 'Davici Code'
            }

            let postData = undefined;
            await page.route('**/jsonstore/collections/books', (route, request) => {
                if(request.method().toUpperCase() ==='POST'){
                    requestData = request.postData();
                    route.fulfill(fakeResponse(fakeCreatedMessage));
                }
            });
            
            await page.fill('#createForm input[name="title"]', expected.title);
            await page.fill('#createForm input[name="author"]', expected.author);

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books'),
                page.click('#createForm button')
            ]);
            
            let result = JSON.parse(requestData);
            expect(result).to.be.eql(expected);
        });
        it('Submitnig with no input is blocked', async () =>{
        let alerted = false
        page.on('dialog', async dialog => {
            alerted = true;
            await dialog.dismiss();
        });
        await Promise.all([
            await page.goto('http://127.0.0.1:5500/02.Book-Library/'),
            await page.click("#createForm button")
        ]);
        expect(alerted).to.be.true;
        });
        it('Clears input after posting', async () =>{
            await page.goto('http://127.0.0.1:5500/02.Book-Library/');

            let expected = {
                author: 'Brown',
                title: 'Davici Code'
            }

            let postData = undefined;
            await page.route('**/jsonstore/collections/books', (route, request) => {
                if(request.method().toUpperCase() ==='POST'){
                    requestData = request.postData();
                    route.fulfill(fakeResponse(fakeCreatedMessage));
                }
            });
            
            await page.fill('#createForm input[name="title"]', expected.title);
            await page.fill('#createForm input[name="author"]', expected.author);

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books'),
                page.click('#createForm button')
            ]);

            let authorField = await page.$eval('#createForm input[name="title"]', x => x.value);
            let titleField = await page.$eval('#createForm input[name="author"]', x => x.value);

            expect(authorField).to.equal('');
            expect(titleField).to.equal('');
        });
    });
    describe('Edit books', () => {
        it('Edit loads correct book', async () => {
            const fakeGetResponse = {author: 'Doyle', title:'Holmes'};
            await page.goto('http://127.0.0.1:5500/02.Book-Library/');
            await page.route('**/jsonstore/collections/books', route => route.fulfill(fakeResponse(fakeBooks)));
            
            await page.route('**/jsonstore/collections/books/101', route => route.fulfill(fakeResponse(fakeGetResponse)));

            await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books'),
                page.click('#loadBooks')
            ]);

            await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books/101'),
                page.click('tbody tr td .editBtn')
            ]);

            let authorField = await page.$eval('#editForm input[name="author"]', x => x.value);
            let titleField = await page.$eval('#editForm input[name="title"]', x => x.value);

            expect(authorField).to.be.eql(fakeGetResponse.author);
            expect(titleField).to.be.eql(fakeGetResponse.title);
        });
        it('Edit post sends correct data', async () =>{
            const fakeGetResponse = {author: 'Doyle', title:'Holmes'};
            const fakeEditResponse = {author: 'Doyle2', title:'Holmes2'};
            await page.goto('http://127.0.0.1:5500/02.Book-Library/');

            let requestData = undefined;

            await page.route('**/jsonstore/collections/books/101', (route, request) => {
                if(request.method().toUpperCase() ==='PUT'){
                    requestData = request.postData();
                    route.fulfill(fakeResponse(fakeEditResponse));
                }
                if(request.method().toUpperCase() ==='GET'){
                    route.fulfill(fakeResponse(fakeGetResponse));
                }
            });

            await page.route('**/jsonstore/collections/books', route => route.fulfill(fakeResponse(fakeBooks)));

            await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books'),
                page.click('#loadBooks')
            ]);
            await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books/101'),
                page.click('tbody tr td .editBtn')
            ]);
             
            await page.fill('#editForm input[name="title"]', fakeEditResponse.title);
            await page.fill('#editForm input[name="author"]', fakeEditResponse.author);

            await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books/101'),
                page.click('#editForm button')
            ]);
            

            let result = JSON.parse(requestData);
            expect(result).to.be.eql(fakeEditResponse);
        });
    });
    describe('Delete books', () => {
        it('Deletes with confirmation', async () => {
            const fakeGetResponse = {author: 'Doyle', title:'Holmes'};

            await page.goto('http://127.0.0.1:5500/02.Book-Library/');

            let calledDelete = false;
            await page.route('**/jsonstore/collections/books/101', (route, request) => {
                if(request.method().toUpperCase() ==='DELETE'){
                    calledDelete = true;
                    route.fulfill(fakeResponse(fakeGetResponse));
                }
            });

            await page.route('**/jsonstore/collections/books', route => route.fulfill(fakeResponse(fakeBooks)));

            await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books'),
                page.click('#loadBooks')
            ]);
            await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books/101'),
                page.on('dialog', dialog => dialog.accept()),
                page.click('tbody tr td .deleteBtn')
            ]);
            expect(calledDelete).to.be.true;
        });
    });
});