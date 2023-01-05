
export default class RuntimeError extends Error{
    constructor(message){
        super(message)
        this.name = 'Runtime Error'
    }
}