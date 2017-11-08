(function($) {

var userNameInput = $(".userNameInput");
var messageInput = $(".messageInput");
var MessagesWindow = $(".ulMessages");
var ObjliOpen = $('<li>');
var ObjliClose = $('</li>');
var messageprint= $('');

var apiBaseUrl = 'https://hidden-headland-7200.herokuapp.com';
var addMessageUrl = apiBaseUrl + '/new';

$('#button').click(function(){
   
fetch(addMessageUrl, {
    method: "POST",
    body: JSON.stringify({'name': userNameInput.val(), 'message': messageInput.val()}),
    headers: { 'Content-Type': 'application/json' }
}).then(res=>res.json()).then(console.log);

fetch(`https://hidden-headland-7200.herokuapp.com`)
.then(res=>res.json())
.then((allMessages) => {

for (var i = 0; i < allMessages.length; i++) {
    var messages = allMessages[i];
    messageprint = messages.name +": " +messages.message;

    console.log(messageprint);
    MessagesWindow.append((ObjliOpen+ messageprint +ObjliClose));

        }

});


}  )

}(jQuery))