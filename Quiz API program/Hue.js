//const request = require("request");

const username = "qUr5gJcnyrewiluVUZIJRuvD6PZWHjX1CFLfnn-Z";
const bridgeIP = "192.168.0.102";
let urlLights = "";
let whichLight = 19;

urlLights = "http://" + bridgeIP + '/api/' + username + '/lights/' + whichLight + '/state/';

function setLight(data){
    const content = JSON.stringify(data);
    httpDo(path, 'PUT', content, 'text');  // Lav til request

}

function setHue(value){
    
    const hue = {
        hue: value, 
        on: true,
        transitiontime: .25,
    }

    setLight(hue);
}

function setBri(value){
    
    const bri = {
        bri: value, 
        on: true,
        transitiontime: 0,
    }

    setLight(bri);
}

function setCt(value){
    
    const ct = {
        ct: value, 
        on: true,
        transitiontime: 0,
    }

    setLight(ct);
}