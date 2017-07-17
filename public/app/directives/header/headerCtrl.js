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
            $(".main_fnv_section").css("padding-top", "0")
            $(".main_upbeet_section").css("padding-top", "0")
            $(".main_blended_section").css("padding-top", "0")
            $(".main_finder_container").css("padding-top", "0")
            $(".main_about_section").css("padding-top", "50px")
            open = false;
        } else {
            $(".mobile_menu_dropdown").css("top", "59px")
            $(".home_main_container").css("padding-top", "518px")
            $(".main_menu_section").css("padding-top", "518px")
            $(".main_smoothie_section").css("padding-top", "518px")
            $(".main_fnv_section").css("padding-top", "518px")
            $(".main_upbeet_section").css("padding-top", "518px")
            $(".main_blended_section").css("padding-top", "518px")
            $(".main_finder_container").css("padding-top", "518px")
            $(".main_about_section").css("padding-top", "518px")
            open = true;
        }

        
    })

let menuOpen = false;
$scope.closeDesktopMenu = function(){
        $(".desktop_dropdown").css("top", "-5125px")
        console.log('hi')
    }
    
     $(".menu").click(function(){
        if(menuOpen){
            $(".desktop_dropdown").css("top", "-125px")
            $(".home_main_container").css("padding-top", "0")
            $(".main_menu_section").css("padding-top", "0")
            $(".main_smoothie_section").css("padding-top", "0")
            $(".main_fnv_section").css("padding-top", "0")
            $(".main_upbeet_section").css("padding-top", "0")
            $(".main_blended_section").css("padding-top", "0")
            $(".main_finder_container").css("padding-top", "0")
            $(".main_about_section").css("padding-top", "50px")
            menuOpen = false;
        } else {
            $(".desktop_dropdown").css("top", "95px")
            $(".home_main_container").css("padding-top", "126px")
            $(".main_menu_section").css("padding-top", "126px")
            $(".main_smoothie_section").css("padding-top", "126px")
            $(".main_fnv_section").css("padding-top", "126px")
            $(".main_upbeet_section").css("padding-top", "126px")
            $(".main_blended_section").css("padding-top", "126px")
            $(".main_finder_container").css("padding-top", "126px")
            $(".main_about_section").css("padding-top", "126px")
            menuOpen = true;
        }

        
    })

})