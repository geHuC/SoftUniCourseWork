function validator(inputObject){
    const validMethods = {'GET':true, 'POST':true, 'DELETE':true, 'CONNECT':true};
    const validVersions = {'HTTP/0.9':true, 'HTTP/1.0':true, 'HTTP/1.1':true, 'HTTP/2.0':true};
    const uriRegEx = /^[a-zA-Z0-9.*]+$/;
    const messageRegEx = /^[^<>\\&'"]*$/;
    if(inputObject.method === undefined || validMethods[inputObject.method] === undefined){
        throw new Error('Invalid request header: Invalid Method');
    }
    if(inputObject.uri === undefined || !uriRegEx.test(inputObject.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if(inputObject.version === undefined || validVersions[inputObject.version] === undefined){
        throw new Error('Invalid request header: Invalid Version');
    }
    if(inputObject.message === undefined || !messageRegEx.test(inputObject.message)){
        throw new Error('Invalid request header: Invalid Message');
    }
    return inputObject;
}

//Test Cases
console.log(validator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'denis'
  }
  ));
console.log(validator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  ));
console.log(validator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  }
  ));