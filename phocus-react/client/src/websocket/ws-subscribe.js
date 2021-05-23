var W3CWebSocket = require('websocket').w3cwebsocket;

var client = new W3CWebSocket('wss://156hxo0ega.execute-api.us-east-1.amazonaws.com/example', 'echo-protocol');

client.onerror = function() {
    console.log('Connection Error');
};

client.onopen = function() {
    console.log('WebSocket Client Connected');

    function sendRequest() {
        if (client.readyState === client.OPEN) {
            
        }
    }
    sendRequest();
};

client.onclose = function() {
    console.log('echo-protocol Client Closed');
};

client.onmessage = function(e) {
    if (typeof e.data === 'string') {
        console.log("Received: '" + e.data + "'");
    }
};