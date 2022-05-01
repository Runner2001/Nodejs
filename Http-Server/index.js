const http = require('http');

const PORT = 3000

const friends = [
    {
        id: 1,
        name: "Runner"
    },
    {
        id: 2,
        name: "Zed"
    },
    {
        id: 2,
        name: "Gragas"
    }
]

const server = http.createServer((request, response) => {

    const item = request.url.split('/')
    //  in the url /firends/2 item array will be like [' ' , 'friends', '2']

    if (item[1] === 'friends') {
        // response.statusCode = 200
        // response.setHeader('Content-Type', 'application/json')
        // Above two is equal to down one
        response.writeHead(200, {
            'Content-Type': 'application/json'
        })
        if (item.length === 3) {
            response.end(JSON.stringify(friends[Number(item[2])]))
        } else {
            response.end(JSON.stringify(friends))
        }
    } else if (item[1] === 'message') {
        response.write('<html>')
        response.write('<body>')
        response.write('<p>Hello From The Server Message Url</p>')
        response.write('</body>')
        response.write('</html>')
        response.end()
    }
    else {
        response.statusCode = 404;
        response.end();
    }

});

server.listen(PORT, () => {
    console.log(`Listening at Port ${PORT}`);
})