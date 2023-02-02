
export default class CompileError extends Error{
    constructor(message){
        super(message)
        this.name = 'COMPILE_ERROR'
    }
} 
