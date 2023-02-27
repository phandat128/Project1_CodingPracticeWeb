import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import WrongAnswer from './exception/WrongAnswer.js';
import { diffWords } from 'diff'

function evaluate(resultFilePath, outputFilePath) {
    const result = fs.readFileSync(resultFilePath).toString();
    const output = fs.readFileSync(outputFilePath).toString();
    const compare = diffWords(output, result);

    if (compare[0].added || compare[0].removed) {
        const input = fs.readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), 'input.txt'));
        throw new WrongAnswer(`Input: ${input}.\nExpected result: ${output}.\nReceived result: ${result}`)
    }
    return 'ACCEPTED'
}
export default evaluate