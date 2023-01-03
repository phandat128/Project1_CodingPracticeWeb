import fs from 'fs';

function evaluate(resultFilePath, outputFilePath){
    const resultBuffer = fs.readFileSync(resultFilePath);
    const outputBuffer = fs.readFileSync(outputFilePath);

    return (resultBuffer.equals(outputBuffer))
}

export default evaluate