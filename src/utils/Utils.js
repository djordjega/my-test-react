function cLog(message, obj) {
    let separator = " > ";
    if (obj === undefined) { obj = ""; separator = "" };
    console.log("BRT-React: " + message + separator, obj);

}

function initF() {
    cLog('init');
    cLog('updating object utils');
    this.objectOne.name = 'Djordje';
    this.objectOne.age = '40';
}

let objectOne = {
    name : "",
    age : ""
}

function setObjectOne(obj) {objectOne = obj;}
function getObjectOne() {return objectOne;}


export {cLog, initF, setObjectOne, getObjectOne};