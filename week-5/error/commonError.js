// const { resolve } = require("path");
//promise
// const favePromise = new Promise((resolve, reject) => {
//     resolve(999)
// })

// favePromise.then((value) => console.log("logging out value: ", value));

// Promise.all()
// Promise.allSettled()
// Promise.any()
// Promise.race()

// async await
async function freeApi() {
    try {
        const result = await fetch("https://jsonplaceholder.typicode.com/todos")
        const result1 = await fetch("https://jsonplaceholder.typicode.com/todos")
        console.log(result);
        return result;
    } catch (error) {
        console.log("from here", error)
    }
}

freeApi();
