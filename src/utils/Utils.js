import {setUser,getUser} from '../models/User';

export function cLog(message, obj) {
    let separator = " > ";
    if (obj === undefined) { obj = ""; separator = "" };
    console.log("BRT-React: " + message + separator, obj);

}

export function initF() {
    cLog('init');

    let user1 = {
        name : "Djordje",
        age : 40
    }
    cLog('reading object from utils 1', getUser());
    cLog('setting user from utils', setUser(user1));
    cLog('reading object from utils 2', getUser());
}

