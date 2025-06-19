const fs = require('fs').promises;

async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath, { encoding: 'utf8' });
        console.log(data)
    } catch(error) {
        console.error(`error occurred: ${error}`)
    }
}

readFile('./greet.txt')

async function writeFil() {
    try {
        const csvfile = 'name,quantity,prices';
        await fs.writeFile('write.csv', csvfile);
        console.log("written");
    } catch(error) {
        console.log(error)
    }
}
// writeFil();

async function addItems(name, quantity, prices) {
    try{
        const csvContent = `\n${name}, ${quantity}, ${prices}`;
        await fs.writeFile('write.csv', csvContent, {flag: 'a'})
    } catch (error){
        console.log(error)
    }
}

// addItems("bread", "30", 30000)

//delete files
async function deleteFile(filePath) {
    try {
        await fs.unlink(filePath);
        console.log(`Deleted ${filePath}`)
    } catch(error) {
        console.error(error)
    }
}

deleteFile("./file/greet.txt");

fs.rename()