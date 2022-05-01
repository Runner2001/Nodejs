const { read } = require("./Response");
const { send } = require("./Request");

function makeRequest(url, data) {
    send(url, data)
    return read();
}

const responseData = makeRequest('https://google.com')
console.log(responseData);