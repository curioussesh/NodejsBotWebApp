

var port = process.env.port || 1337;

var sys = require('util'),
    url = require('url'),
    http = require('http'),
    qs = require('querystring');

//var witAi = require('./WitAi.js');
//var witAi = require('./node_modules/node-wit/examples/quickstart.js');
var request = require('request');


var headers = {
    'Authorization': 'Bearer KMQ36DTAU7N6EP4JDFIBX7IZLLKYKZ5T'
};

var options = {
    url: "https://api.wit.ai/message?v=20160526&q=hello",
    headers: headers
};

function callback(error, resp, body) {
    if (!error && resp.statusCode == 200) {
        //response.write(body);
        console.log(body)
        //response.end();
    }
}

function requestwitai(querymsg) {
    console.log("hi");
    console.log(querymsg);
    request(options, callback);
}

http.createServer(function (request, response) {
   
        if (request.method == 'POST') {
            var body = '';
            request.on('data', function (data) {
                body += data;
            });
            request.on('end', function () {
                var POST = qs.parse(body);
                console.log(POST);
                response.writeHead(200);
                response.write(JSON.stringify(POST));
                response.end();
            });
        }
        else if (request.method == 'GET') {

            var url_parts = url.parse(request.url, true);
            //console.log(url_parts.query);
            response.writeHead(200);
            //response.write(JSON.stringify(url_parts.query));
            try {
                if (url_parts.search.split('querystring=')[1].length>0){
                    requestwitai(JSON.stringify(url_parts.search.split('querystring=')[1]));
                }
            }
            catch (e) {
                response.end();
            }
            
            //response.end();
        }
    }

    //res.writeHead(200, { 'Content-Type': 'text/plain' });
    //res.end('Hello World\n');
).listen(port);

