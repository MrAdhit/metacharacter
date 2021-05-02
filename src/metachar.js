class MetaChar {
    constructor(){

    }

    /**
     * Stringify metacharacter
     * @param {string} value String with metacharacter
     * @returns {string}
     */
    stringify(value){
        value = {value};
        return JSON.stringify(value).replace("{\"value\":\"", "").replace("\"}", "");
    }

    /**
     * Parse stringified metacharacter
     * @param {string} value Stringified string with metacharacter
     * @returns {string}
     */
    parse(value){
        value = {value}
        return JSON.parse(JSON.stringify(value).replace(/\\\\/g, "\\").replace(/\\\\/g, "\\")).value
    }
}

module.exports = MetaChar;