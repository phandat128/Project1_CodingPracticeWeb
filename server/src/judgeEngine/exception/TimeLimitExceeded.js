
export default class TimeLimitExceeded extends Error{
    constructor(message){
        super(message)
        this.name = 'Time Limit Exceeded'
    }
} 