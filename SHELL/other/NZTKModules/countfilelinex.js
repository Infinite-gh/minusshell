// this code is OBVIOUSLY stolen (:

module.exports = function countFileLines(file){

    const fs = require('fs')

        return new Promise((resolve, reject) => {

        let lineCount = 0;
        
        fs.createReadStream(file)
        .on("data", (buffer) => {

            let idx = -1;

                lineCount--; // Because the loop will run once for idx=-1
            do {

                idx = buffer.indexOf(10, idx+1);
                lineCount++;
            } while (idx !== -1);
        }).on("end", () => {

            resolve(lineCount);
        }).on("error", reject);
    });
};