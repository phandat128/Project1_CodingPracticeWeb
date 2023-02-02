import fs from 'fs'
import path from 'path'

class FileAPI {
    constructor() { }

    copyFile(sourceFilePath, destFilePath) {
        fs.copyFile(sourceFilePath, destFilePath, (err) => {
            if (err) {
                console.log(err)
            }
        })
    }

    copyTestcase(testcaseDirectory, runDirectory) {
        this.copyFile(path.join(testcaseDirectory,"input.txt"), path.join(runDirectory,"input.txt"))
        console.log("Copied input")
        this.copyFile(path.join(testcaseDirectory, "output.txt"), path.join(runDirectory, "output.txt"))
        console.log("Copied output");
    }

    //write solution to file from base64 encoded contents
    writeSolution(destFilePath, contents) {
        const buffer = Buffer.from(contents.split(',')[1], 'base64')
        fs.writeFileSync(destFilePath, buffer)
        console.log("Solution has been saved successfully")
    }
}

export default FileAPI