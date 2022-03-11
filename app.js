

var p1 = window.localStorage.getItem('first')
 var last = 'deff';

function send(h) {
    fetch(`https://dis.amukh1.dev/new?name=${p1}&msg=${document.getElementById('msg').value}`)
}

setInterval(update, 500);

function update() {
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let x = xhttp.responseText.split(',');
        let data = {
            name: x[0],
            msg: x[1]
        }
       console.log(data);
       console.log(xhttp.responseText);
       if(data.msg != last){
        let msg = document.createElement('div');
        msg.setAttribute('class', 'message');
        document.getElementById('msgs').appendChild(msg);
        let us = document.createElement('div');
        us.setAttribute('class', 'user');
        msg.appendChild(us);
        us.innerHTML = data.name;
        let ms = document.createElement('div');
        ms.setAttribute('class', 'mess');
        ms.innerHTML = data.msg;
        msg.appendChild(ms);
        last = data.msg;
       }
    }
};
xhttp.open("GET", "https://dis.amukh1.dev/get", true);
xhttp.send();

           
        
}