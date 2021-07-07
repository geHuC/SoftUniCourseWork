function attachEvents() {
    const refreshBtn = document.querySelector('#refresh');
    const messagesTextArea = document.querySelector('#messages');
    const sendBtn = document.querySelector('#submit');
    const authorInput = document.querySelector('#controls input[name=author]');
    const contentInputArea = document.querySelector('#controls input[name=content]');

    refreshBtn.addEventListener('click',loadMessagesFromServer);
    sendBtn.addEventListener('click', sendMessageToServer);


    function sendMessageToServer(){
        let author = authorInput.value;
        let content = contentInputArea.value;
        fetch(`http://localhost:3030/jsonstore/messenger`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({author,content}) // Shorthand Object notation
        })
        .then(() => {
            contentInputArea.value = ''; //Clear the content input area but keep the name area filled on purpose (don't need to retype your name to send new message)
            appendTextMessageToTextArea(author,content);
        })
        .catch(err => console.log(err));
    }
    
    function loadMessagesFromServer(){
        fetch(`http://localhost:3030/jsonstore/messenger`)
        .then(res => res.json())
        .then(data => displayMessagesFromServer(data))
        .catch(err => console.log(err));
    }
    function displayMessagesFromServer(data){
        messagesTextArea.value = ''; //Clear the textarea before appending the archived messages
        for (const key of Object.keys(data)) {
            let {author,content} = data[key];
            appendTextMessageToTextArea(author,content);
        }
    }

    //A little refactoring function as we use it more than once
    function appendTextMessageToTextArea(author, content){
        messagesTextArea.value += `${author}: ${content}\n`;
    }
}

attachEvents();