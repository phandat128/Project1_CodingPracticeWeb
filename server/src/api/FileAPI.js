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
        console.log("done copying")
    }

    copyTestcase(testcaseDirectory, runDirectory) {
        this.copyFile(path.join(testcaseDirectory,"input.txt"), path.join(runDirectory,"input.txt"))
        this.copyFile(path.join(testcaseDirectory, "output.txt"), path.join(runDirectory, "output.txt"))
    }

    //write solution to file from base64 encoded contents
    writeSolution(destFilePath, contents) {
        const buffer = Buffer.from(contents.split(',')[1], 'base64')
        fs.writeFileSync(destFilePath, buffer)
    }
}

//const file = "F:/Documents/Project1_CodingPracticeWeb/server/src/solution/abcxyz.cpp"
//const fileAPI = new FileAPI()
//const contents = "data:application/octet-stream;base64,I2luY2x1ZGU8c3RkaW8uaD4NCiNpbmNsdWRlPHN0cmluZy5oPg0KaW50IG47DQppbnQgbWluQyxUWzEwMV07DQpjaGFyIHN0clsxMDFdLGtxWzEwMV07DQpib29sIFNhbWUgKGludCBrLCBpbnQgbCl7DQoJZm9yIChpbnQgaT1rLWwrMTtpPD1rO2krKyl7DQoJCWlmIChzdHJbaV0hPXN0cltpLWxdKSByZXR1cm4gMDsNCgl9DQoJcmV0dXJuIDE7DQp9DQpib29sIGNoZWNrKGludCBrKXsNCglmb3IgKGludCBsPTE7bDw9KGsrMSkvMjtsKyspew0KCQlpZiAoU2FtZShrLGwpPT0wKSByZXR1cm4gMDsgDQoJfQ0KCXJldHVybiAxOw0KfQ0Kdm9pZCBTYXZlKCl7DQoJZm9yIChpbnQgaT0xO2k8PW47aSsrKSBrcVtpXT1zdHJbaV07DQoJbWluQz1UW25dOw0KfQ0Kdm9pZCBUcnkoaW50IGspew0KCWZvciAoY2hhciB2PSdBJzt2PD0nQyc7disrKXsNCgkJaWYgKGNoZWNrKGspKSB7DQoJCQlzdHJba109djsNCgkJCWlmICh2PT0nQycpIFRba109VFtrLTFdKzE7DQoJCQllbHNlIFRba109VFtrLTFdOw0KCQkJaWYgKFRba10rKG4taykvNDxtaW5DKSB7DQoJCQkJaWYgKGs9PW4pIFNhdmUoKTsNCgkJCQllbHNlIFRyeShrKzEpOw0KCQkJfQ0KCQl9DQoJfQ0KfQ0KaW50IG1haW4gKCl7DQoJc2NhbmYgKCIlZCIsJm4pOw0KCVRbMF09MDsNCgltaW5DPW47DQoJVHJ5KDEpOw0KCWZvciAoaW50IGk9MTtpPD1uO2krKykgcHJpbnRmKCIlYyIsa3FbaV0pOw0KCXByaW50ZigiXG4lZCIsbWluQyk7DQoJcmV0dXJuIDA7DQp9DQo="

//fileAPI.writeSolution(file, contents)

export default FileAPI