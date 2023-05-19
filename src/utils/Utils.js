function cLog(message, obj) {
        let separator = " > ";
        if (obj === undefined) { obj = ""; separator = "" };
        console.log("BRT-React: " + message + separator, obj);
    
}

export default cLog;
