angular.module('app').controller('headerCtrl', function($scope){
    var open = false;

    $(".hamburger").click(function(){
        if(open){
            $(".mobile_menu_dropdown").css("top", "-517px")
            $(".home_main_container").css("padding-top", "0")
            open = false;
        } else {
            $(".mobile_menu_dropdown").css("top", "59px")
            $(".home_main_container").css("padding-top", "518px")
            open = true;
        }
        
    })
})