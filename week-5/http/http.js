const https = require("https");

let request = https.get('https://jsonplaceholder.typicode.com/users?_limit=2', (res)=> {
    if(res.statusCode !== 201) {
        console.log("ki lo sele");
        res.resume();
        return;
    }

    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    })

    res.on('close', () => {
        console.log("data retrieved");
        console.log(JSON.parse(data))
    })

    res.on('error', (error) => {
        console.log(`Encountered an error`, error);
    })
})

// https.createServer();