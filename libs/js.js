var socket = io.connect('http://localhost');

var usrlist = document.getElementById("usrlist");

var register = document.getElementById("register")

var anonymous

var who = "Anonymous";

register.onclick(function(){

    who = document.getElementById("who").value;

    document.getElementById("whoo").style.visibility="hidden";

    document.getElementById("container").style.visibility="visible";

    //document.getElementById("chat").style.visibility="visible";

    io.emit('custom con', who);
});