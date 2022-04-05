const squareElement = document.getElementById('square');
let angle = 0;
function rotate() {
    angle = (angle + 2)%360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}
const id = requestAnimationFrame(rotate);

requestAnimationFrame(rotate);

const btn = document.getElementById('rainbow');
const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet', 'white'];
function change() {      
    document.body.style.background = rainbow[Math.floor(7*
    Math.random())];
}
btn.addEventListener('click', change);

const factorizeform = document.forms[0];
factorizeform.addEventListener('submit', factorize, false);
function factorize(event) {
    // prevent the form from being submitted
    event.preventDefault();     
    const number = Number(factorizeform.number.value);
    document.getElementById('output').innerText = factorsOf(number);  
}
function factorsOf(n) {
    if(Number.isNaN(Number(n))) {
        throw new RangeError('Argument Error: Value must be an integer');
    }
    if(n < 0) {
        throw new RangeError('Argument Error: Number must be positive');
    }
    if(!Number.isInteger(n)) {
        throw new RangeError('Argument Error: Number must be an integer');
    }
    const factors = [];
    for (let i=1 , max = Math.sqrt(n); i <= max ; i++) {
        if (n%i === 0){
        factors.push(i, n/i);
        }
    }
    return factors.sort((a,b) =>  a - b);
}

const URL = 'wss://echo.websocket.org/';
const outputDiv = document.getElementById('websocketoutput');
const form = document.forms[0];
const connection = new WebSocket(URL);
connection.addEventListener('open', () => {
    output('CONNECTED');
}, false);
function output(message) {
    const para = document.createElement('p');
    para.innerHTML = message;
    outputDiv.appendChild(para);
}
form.addEventListener('submit', message, false);
function message(event) {
    event.preventDefault();
    const text = form.message.value;
    output(`SENT: ${text}`);
    connection.send(text);
}
connection.addEventListener('message', (event) => {
    output(`RESPONSE: ${event.data}`);
}, false);

const canvasElement = document.getElementById('canvas');
const context = canvasElement.getContext('2d');
context.fillStyle = "#0000cc"; // a blue fill color 
context.strokeStyle = "#ccc"; // a gray stroke color
context.lineWidth = 4;
context.fillRect(10,10,100,50); // all the code up until here gives us a blue rectangle
context.strokeRect(10,100,100,50); // this gives us a white rectangle with a grey stroke, 
context.beginPath();
context.moveTo(130, 50);
context.lineTo(180, 50);
context.moveTo(155, 50);
context.lineTo(155, 90);
context.strokeStyle = '#c00';
context.lineWidth = 15;
context.stroke(); // lines 59 - 66 are finally executed here when we call stroke(). This has made a T in red
context.beginPath();
context.arc(159, 159, 30, 0, Math.PI * 2, false);
context.strokeStyle = '#0c0';
context.lineWidth = 4;
context.stroke(); // this makes a circle
context.fillStyle = '#0z0'; // a blue fill color
context.font = 'bold 26px sans-serif';
context.fillText('Hello', 20, 200); // this writes Hello in a sans-serif font, puts it in a specific spot, and gives it a green color.