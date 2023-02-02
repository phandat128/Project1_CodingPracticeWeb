
export default class TimeLimitExceeded extends Error{
    constructor(message){
        super(message)
        this.name = 'TIME_LIMIT_EXCEEDED'
    }
} 