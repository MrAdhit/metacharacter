class MetaChar {
    constructor(){

    }

    stringify(value){
        value = {value};
        return JSON.stringify(value).replace("{\"value\":\"", "").replace("\"}", "");
    }

    parse(value){
        value = {
            value: value.replace(/\\\\/g, "\\").replace(/\\\\/g, "\\").replace("{\"value\":\"", "").replace("\"}", "")
        }
        return JSON.parse(JSON.stringify(value).replace(/\\\\/g, "\\").replace(/\\\\/g, "\\")).value
    }
}

module.exports = MetaChar;