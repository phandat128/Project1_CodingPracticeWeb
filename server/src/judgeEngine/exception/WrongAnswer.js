
export default class WrongAnswer extends Error{
    constructor(message){
        super(message)
        this.name = 'WRONG_ANSWER'
    }
} 