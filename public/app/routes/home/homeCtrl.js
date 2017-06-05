angular.module('app').controller('homeCtrl', function($scope){

// let prev = $('#prev');
// let next= $('#next');
// let pics = $('.mobile_carousel');
// let left = parseInt(pics.css('left'), 10);

// prev.click(function(){

//     if(left < 0){
//         left += 150;
//     } 
//     pics.css({
//         left: left + '%'
//     })
// });

// next.click(function(){

//     if(left > -440){
//         left -= 150;
//     } 
//     pics.css({
//         left: left + '%'
//     })
// });

$(homeMainCarousel);

$(window).resize(homeMainCarousel)

function homeMainCarousel() {
var mq = window.matchMedia("(min-width: 550px)");
if(mq.matches){
        var ul = $('.desktop_carousel')
    } else {
        var ul = $('.mobile_carousel')
    }

var slide_count = 3;
var slide_width_pc = 100.0 / slide_count;
var slide_index = 0;

ul.find("li").each(function(indx) {
var left_percent = (slide_width_pc * indx) + "%";
$(this).css({"left":left_percent});
$(this).css({width:(100 / slide_count) + "%"});
});

// Listen for click of prev button
$(".home_main_carousel .prev").click(function() {
console.log("prev button clicked");
slide(slide_index - 1);
});

// Listen for click of next button
$(".home_main_carousel .next").click(function() {
console.log("next button clicked");
slide(slide_index + 1);
});

function slide(new_slide_index) {

if(new_slide_index < 0 || new_slide_index >= slide_count) return; 

var margin_left_pc = (new_slide_index * (-100)) + "%";

ul.animate({"margin-left": margin_left_pc}, 400, function() {

slide_index = new_slide_index

});

}

};



////////////////////////----------FOOD CAROUSEL------------//////////////////////////////////////////////////////////

$(function() {

var ul = $(".home_food_carousel ul");
var slide_count = ul.children().length;
var slide_width_pc = 100.0 / slide_count;
var slide_index = 0;

ul.find("li").each(function(indx) {
var left_percent = (slide_width_pc * indx) + "%";
$(this).css({"left":left_percent});
$(this).css({width:(100 / slide_count) + "%"});
});

// Listen for click of prev button
$(".home_food_carousel .food_prev").click(function() {
console.log("prev button clicked");
slide(slide_index - 1);
});

// Listen for click of next button
$(".home_food_carousel .food_next").click(function() {
console.log("next button clicked");
slide(slide_index + 1);
});

function slide(new_slide_index) {

if(new_slide_index < 0 || new_slide_index >= slide_count) return; 

var margin_left_pc = (new_slide_index * (-100)) + "%";

ul.animate({"margin-left": margin_left_pc}, 400, function() {

slide_index = new_slide_index

});

}

});

// ////////////PRODUCT CAROUSEL ///////////////////////////

$(function() {

var ul = $(".product_carousel ul");
var slide_count = ul.children().length;
var slide_width_pc = 100.0 / slide_count;
var slide_index = 0;

ul.find("li").each(function(indx) {
var left_percent = (slide_width_pc * indx) + "%";
$(this).css({"left":left_percent});
$(this).css({width:(100 / slide_count) + "%"});
});

// Listen for click of prev button
$(".product_carousel .product_prev").click(function() {
console.log("prev button clicked");
slide(slide_index - 1);
});

// Listen for click of next button
$(".product_carousel .product_next").click(function() {
console.log("next button clicked");
slide(slide_index + 1);
});

function slide(new_slide_index) {

if(new_slide_index < 0 || new_slide_index >= slide_count) return; 

var margin_left_pc = (new_slide_index * (-100)) + "%";

ul.animate({"margin-left": margin_left_pc}, 400, function() {

slide_index = new_slide_index

});

}

    
});



})