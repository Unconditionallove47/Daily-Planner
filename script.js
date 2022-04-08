var currentTime = moment().format("H");
console.log(currentTime);
//create variable for time linked with table
var tableTimer = ''
var textArea = $("textarea")


for (let i = 0; i < textArea.length; i++) {
    const element = textArea [i];
    console.log(element.getAttribute("id"));
    tableTimer = element.getAttribute("id");
    
    if (currentTime > tableTimer) {

        $('.time-block').addClass("past")
    } else if (currentTime == tableTimer) {
        $('.time-block').addClass("present")
    } else if (currentTime < tableTimer) {

        $('.time-block').addClass("future")
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
//09 is 9am 17 is 5pm ie beginning and end of chart timing
$(document).ready(function() {
    // for(let i = 09; i < 17; i++) {
        // var value=$('textarea').val();
    $(".saveBtn").on('click',function(){
        var value=$(this).siblings('.description').val();
        var time=$(this).parent().attr("id");
        console.log(value);
        console.log(time);
    })
    // }
})

