// console.log(global)
const http = require("http");
 const httpServer = http.createServer()
// setTimeout(() => console.log("favour"), 10000)

//error handling
// const error = new Error("Straigh favor error");

// console.log(error);

httpServer.listen(8080, () => {
    console.log("app running")
})
