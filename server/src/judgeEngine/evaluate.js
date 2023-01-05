import fs from 'fs';
import WrongAnswer from './exception/WrongAnswer.js';

function evaluate(resultFilePath, outputFilePath){
    const resultBuffer = fs.readFileSync(resultFilePath);
    const outputBuffer = fs.readFileSync(outputFilePath);
    const compare = (resultBuffer.equals(outputBuffer))

    if (!compare) throw new WrongAnswer(`Expected result: ${outputBuffer.toString()}\nReceived result: ${resultBuffer.toString()}`)
    return 'Accepted'
}

export default evaluate