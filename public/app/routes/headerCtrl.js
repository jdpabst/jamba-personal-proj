angular.module('app').controller('headerCtrl', function($scope){
    var open = false;
    $scope.closeMobileMenu = function(){
        $(".mobile_menu_dropdown").css("top", "-517px")
        console.log('hi')
    }

    $(".hamburger").click(function(){
        if(open){
            $(".mobile_menu_dropdown").css("top", "-517px")
            $(".home_main_container").css("padding-top", "0")
            $(".main_menu_section").css("padding-top", "0")
            $(".main_smoothie_section").css("padding-top", "0")
            open = false;
        } else {
            $(".mobile_menu_dropdown").css("top", "59px")
            $(".home_main_container").css("padding-top", "518px")
            $(".main_menu_section").css("padding-top", "518px")
            $(".main_smoothie_section").css("padding-top", "518px")
            open = true;
        }

        
    })

})