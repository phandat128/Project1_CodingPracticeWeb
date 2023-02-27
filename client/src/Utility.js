

class Utility {
    constructor(){}
    
    /**
    * 
    * @param  {...string} strings - list of strings
    * @returns true if containing a blank string, false otherwise
    */
    static isBlank(...strings) {
        for (const string of strings) {
            if (!string.trim()) return true
        }
        return false
    }
}


export default Utility