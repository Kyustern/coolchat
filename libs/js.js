var socket = io();

var usrlist = document.getElementById("usrlist");

var anonymous

var who = "Anonymous";

document.getElementById("register").onclick = function ()
{
    who = document.getElementById("who").value;

    document.getElementById("whoo").style.visibility="hidden";

    document.getElementById("typearea").style.visibility="visible";

    document.getElementById("chat").style.visibility="visible";

    io.emit('custom con', who);

    console.log("click");

}

