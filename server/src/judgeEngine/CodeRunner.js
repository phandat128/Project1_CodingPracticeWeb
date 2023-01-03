import path from 'path'
import { spawn, spawnSync } from 'child_process'
import { fileURLToPath } from 'url'
import fs from 'fs'

class CodeRunner {
    constructor() {
        this.dirname = path.dirname(fileURLToPath(import.meta.url))
    }

    compile(file, directory, fileName, extension) {
        if (extension != '.cpp') {
            console.log('this is not a cpp file');
            return;
        }
        const argsCompile = []
        argsCompile[0] = file
        argsCompile[1] = '-o'
        argsCompile[2] = path.join(directory, `${fileName}`)

        const compiler = spawnSync("g++", argsCompile)
        
    }

    execute(directory, fileName) {
        const exeFilePath = path.join(directory, fileName)
        const inputFilePath = path.join(directory, "input.txt")
        const outputFilePath = path.join(directory, "results.txt")

        const inputFile = fs.readFileSync(inputFilePath)

        const executer = spawnSync(exeFilePath, [] , {
            input: inputFile,
            encoding: 'utf-8',
            timeout: 5000
        })

        fs.writeFileSync(outputFilePath, executer.stdout)
        console.log(executer.stdout)
    }
}

async function main(){
    const runner = new CodeRunner()
    const directory = runner.dirname //absolute path to directory containing this file
    const solutionFilePath = path.resolve(directory, "./temp.cpp") //absolute path to helloWorld.cpp file
    const resultFilePath = path.resolve(directory, "./results.txt")
    const outputFilePath = path.resolve(directory, "./output.txt")
    const fileName = path.parse(solutionFilePath).name
    const extension = path.extname(solutionFilePath)
    //console.log(directory);
    //console.log(solutionFilePath);
    //console.log(fileName);
    //console.log(extension);
    const startTime = Date.now()
    runner.compile(solutionFilePath, directory, fileName, extension)
    const compileDone = Date.now()
    console.log(`compile time: ${compileDone - startTime} ms`)
    runner.execute(directory, fileName)
    const executeDone = Date.now()
    console.log(`execute time: ${executeDone - compileDone} ms`)
}

//main()

export default CodeRunner