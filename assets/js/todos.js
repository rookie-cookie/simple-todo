//checks off a todo by clicking on the li
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//remove the li when trash/span is clicked
$("ul").on("click", "span", function(e){
  e.stopPropagation();
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
})

$("input[type='text']").keypress(function(e){
  if(e.which === 13){ //charcode for enter key
    var todoText = $(this).val();
    var a = new Date;
    var m = a.getUTCMonth();
    var d = a.getDate();
    $("ul").prepend("<li><span><i class='fa fa-trash'></i></span> " + todoText + "<div class='dispDay'>" + m + "/" + d +"</div></li>");
    $(this).val(""); //resets the input field
  }
});

/*
note when using .on("click"), make sure to add it on element
that exists when the code is run the first time
in this example, ul is used as target because li and span does not
exist initially on the list, they exist after a user added
another item on the to do list

$("ul").on("click","li" ....
this means that when an li is clicked inside a ul, run
the code

*/

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});


function getDate(){
  var day = new Date;
  var newd = day.getDay(); //returns a number, create an array that will correspond to the actual day
  var newm = day.getUTCMonth(); //returns a number, create an array that will correspond to the actual month
  var d = day.getUTCDate();
  var y = day.getUTCFullYear();

  var week, month;

  week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  dispDate.innerHTML = week[newd] + ', ' + month[newm] + ' ' + d + ', ' + y;
}
getDate();

function getTime(){
  var time = new Date();
  var t = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
  var m = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
  var ampm = time.getHours() >= 12 ? 'PM' : 'AM';

  dispTime.innerHTML = t + ':' + m + ' ' + ampm;

}
getTime();
