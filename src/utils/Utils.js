function cLog(message, obj) {
    let separator = " > ";
    if (obj === undefined) { obj = ""; separator = "" };
    console.log("BRT-React: " + message + separator, obj);

}

function initF() {
    cLog('init');
    cLog('updating object utils');
    objectOne.name = 'Djordje';
    objectOne.age = '40';
}

let objectOne = {
    name : "",
    age : ""
}

function setObjectOne(obj) {objectOne = obj;}
function getObjectOne() {return objectOne;}


export {cLog, initF, setObjectOne, getObjectOne};