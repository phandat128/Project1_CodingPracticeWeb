
export default class WrongAnswer extends Error{
    constructor(message){
        super(message)
        this.name = 'Wrong Answer'
    }
} 