// STATIC DATA
// ************
// var tempString = $('#itemjstemplate').text();
// var templateFunction = _.template(tempString);

// _.each(etsy.results, function(item){

//     console.log(item);
// var itemHTML = templateFunction(item);
// $('.details').append(itemHTML);
// });


// DYNAMIC DATA
// **************
var tempString = $('#itemjstemplate').text();
var templateFunction = _.template(tempString);

//ADDED.JS AT THE END OF ACTIVEBEFORE ?
let etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';
$.ajax({
  url: etsyURL,
  dataType: 'jsonp',
  method: 'get'
}).then (function (response) {
  // console.log(response);

_.each(response.results, function(data){
  var itemHTML = templateFunction(data)
 $('.details').append(itemHTML);

});

});


// hamburger heart

// $('.wrap-element').mouseenter(function(event){
  $('.details').on('mouseenter', '.wrap-element', function(event){
  var btn = $(this);
  btn.find('.hamburger-heart').addClass('.show').css("display","inline");
});

 $('.details').on('mouseleave', '.wrap-element', function(event){
  var btn = $(this);
  btn.find('.hamburger-heart').addClass('.show').css("display","none");
});

// $('.wrap-element').mouseleave(function(event){
//   var btn = $(this);
//   btn.find('.hamburger-heart').addClass('.show').css("display","none");
//   console.log('leave');
// });


