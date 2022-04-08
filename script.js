var currentTime = moment().format("H");
console.log(currentTime);
//create variable for time linked with table
var tableTimer = ''
var textArea = $("textarea")
for (let i = 0; i < textArea.length; i++) {
    const element = textArea [i];
    console.log(elemnet.getAttribute("id"));
    tableTimer = element.getAttribute("id");
    
    if (currentTime > tableTimer) {

        $('#$(tableTime)').addClass("past")
    } else if (currentTime == tableTimer) {
        $('#$(tableTime)').addClass("present")
    } else if (currentTime < tableTimer) {

        $('#$(tableTime)').addClass("future")
    } else {

    }

}

//save to local storage?

$("saveBtn").on("click", function (event){
var text = $('#$event.target.previousElementSibling.id}').val();
localStorage.setItem('${event.target.id}text', text);
console.log("success")

});
//should show in local storage!
$(document).ready(function() {
    for(let i =09; i < 17; i++) {
        var innerText = $('#${i}')
        console.log(innertext)
    }
})

