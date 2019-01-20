// ------------ Init ------------

var socket = io();
var chat = document.getElementById("chat");
var sendbtn = document.getElementById("send");
var regbtn = document.getElementById("register");
var anonymous;
var data;
var who = "Anonymous";

// ------------ Local Events ------------

regbtn.onclick = function ()
{
    who = document.getElementById("who").value;
    document.getElementById("whoo").style.visibility="hidden";
    document.getElementById("typearea").style.visibility="visible";
    document.getElementById("chat").style.visibility="visible";
    socket.emit("custom con", who);
    console.log(who);
}

sendbtn.onclick = function()
{
    message = document.getElementById("type").value
    socket.emit("message", message)
    document.getElementById("type").value = ""
}

//Write a onClose event that tells who disconnected

// ------------ Socket Events ------------

socket.on("custom con", function(who){
    data = who;
    appendList(data);
});

socket.on("message", function(message){
    data = who + " a dit : " + message
    appendList(data);
});

// ------------ Functions ------------

function appendList(data)
{
    //create a li element that have the data parameter as text
    node = document.createElement("LI");
    nodetext = document.createTextNode(data);
    node.appendChild(nodetext);
    //Writes the data parameter on the chat
    chat.appendChild(node)
}

/*
function writeWho(who)
{
    //create a li element that have the data parameter as text
    node = document.createElement("LI");
    nodetext = document.createTextNode(who);
    node.appendChild(nodetext);
    //Writes the data parameter on the chat
    usrlist.appendChild(node)
}
*/