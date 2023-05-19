function cLog(message, obj) {
    let separator = " > ";
    if (obj === undefined) { obj = ""; separator = "" };
    console.log("BRT-React: " + message + separator, obj);

}

function initF() {
    cLog('init');
    anotherF();
}

function anotherF() {
    cLog('another');
}

export {cLog, initF};