function cLog(message, obj) {
    let separator = " > ";
    if (obj === undefined) { obj = ""; separator = "" };
    console.log("BRT-React: " + message + separator, obj);

}

function initF() {
    cLog('init');
}

export {cLog, initF};