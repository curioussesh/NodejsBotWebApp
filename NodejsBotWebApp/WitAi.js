var request = require('request');


var headers = {
    'Authorization': 'Bearer KMQ36DTAU7N6EP4JDFIBX7IZLLKYKZ5T'
};

var options = {
    url: "https://api.wit.ai/message?v=20160526&q=hello",
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(response);
    }
}

function requestwitai(querymsg) {
    console.log("hi");
    console.log(querymsg);
    request(options, callback);
}
