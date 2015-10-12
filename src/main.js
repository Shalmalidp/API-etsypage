
var tempString = $('#itemjstemplate').text();
var templateFunction = _.template(tempString);

_.each(etsy.results, function(item){

    console.log(item);
var itemHTML = templateFunction(item);
$('.details').append(itemHTML);
});




$('.wrap-element').mouseenter(function(event){
  var btn = $(this);
  btn.find('.hamburger-heart').addClass('.show').css("display","inline");
});



$('.wrap-element').mouseleave(function(event){
  var btn = $(this);
  btn.find('.hamburger-heart').addClass('.show').css("display","none");
});


// $('.wrap-element').on('click',function(event){
//   var btn = $(this);
//   console.log(btn +"was fired");
//   btn.find('.hamburger-heart').addClass('.show').css("display","inline");
// });


// $('.details').on('mouseleave','wrap-element' function(event){
//   var btn = $(this);
//   btn.find('.hamburger-heart').removeClass('.show').css("display","none");
// });