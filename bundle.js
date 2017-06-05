angular.module('app', ['ui.router'])

.config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider){
    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: './app/routes/home/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .state('map', {
            url: '/store-finder:zip',
            templateUrl: './app/routes/store-finder/finderTmpl.html',
            controller: 'finderCtrl'
        })
        .state('menu', {
            url:'/menu',
            templateUrl: './app/routes/menu/menuTmpl.html',
            controller: 'menuCtrl'
        })
        .state('smoothies', {
            url: '/smoothies',
            templateUrl: './app/routes/smoothies/smoothieTmpl.html',
            controller: 'smoothieCtrl'
        })
        .state('fruitnveg', {
            url:'/fruitnveg', 
            templateUrl: './app/routes/fruitnveg/fruitnvegTmpl.html',
            controller: 'fruitnvegCtrl'
        })
        .state('upbeet', {
            url: '/upbeet',
            templateUrl: './app/routes/upbeet/upbeetTmpl.html',
            controller: 'upbeetCtrl'
        })

         $urlRouterProvider.otherwise('/')
}])
angular.module('app').controller('headerCtrl', ["$scope", function($scope){
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

}])
angular.module('app').controller('fruitnvegCtrl', ["$scope", "fruitnvegService", function($scope, fruitnvegService){

    $scope.getFruitnVeg = function(){
        fruitnvegService.getFruitnVeg().then(function(res){
            console.log(res)
            var arr = res.data;

            for(var i = 0; i < arr.length; i++){
                if(arr[i].id === 1){
                $scope.appleGreens = arr[i];
                } else if(arr[i].id === 2){
                    $scope.greensGinger = arr[i]
                } else if (arr[i].id === 3){
                    $scope.upbeet = arr[i]
                } else if (arr[i].id === 4){
                    $scope.orangeCarrot = arr[i]
                }
            }
        })
    }

    $scope.getFruitnVeg();
}])
angular.module('app').service('fruitnvegService', ["$http", function($http){

    this.getFruitnVeg = function(){
        return $http({
            method: 'GET',
            url: '/api/menu/smoothies/fnv'
        })
    }
}])
angular.module('app').controller('homeCtrl', ["$scope", function($scope){

$(function() {

var ul = $(".home_main_carousel ul");
var slide_count = ul.children().length;
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

});



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



}])
angular.module('app').service('homeService', ["$http", function($http){

    

    
}])
angular.module('app').controller('menuCtrl', ["$scope", "menuService", function($scope, menuService){

$scope.getMenu = function(){
    menuService.getMenu().then(function(res){
        console.log(res);

        var arr = res.data;
        for(var i = 0; i < arr.length; i++){
            if(arr[i].id === 1){
                $scope.energyBowls = arr[i];
            } else if(arr[i].id === 2){
                $scope.shots = arr[i]
            } else if (arr[i].id === 3){
                $scope.smoothies = arr[i]
            } else if (arr[i].id === 4){
                $scope.juices = arr[i]
            } else if(arr[i].id === 5){
                $scope.bites = arr[i]
            } else if (arr[i].id === 6){
                $scope.kids = arr[i]
            } else if (arr[i].id === 7){
                $scope.boosts = arr[i]
            }
        } 

        $scope.menu = res.data;
    })

}

$scope.getMenu();

// $scope.energyBowl = {
//     "background": "#f58025"
// }
// $scope.shots = {
//     "background": "#c60c48"
// }
// $scope.smoothies = {
//     "background": "#4aa942"
// }
// $scope.juices = {
//     "background": "#c1d72f"
// }
// $scope.bites = {
//     "background": "#f15d22"
// }
// $scope.kids = {
//     "background": "#7c003f"
// }
// $scope.boosts = {
//     "background": "#f58025"
// }


}])

angular.module('app').service('menuService', ["$http", function($http){

    this.getMenu = function(){
        return $http({
            method: 'GET',
            url: '/api/menu'
        })
    }

}])
angular.module('app').controller("smoothieCtrl", ["$scope", "smoothieService", function($scope, smoothieService){

    $scope.getAllSmoothies = function(){
        smoothieService.getAllSmoothies().then(function(res){
            console.log(res);
            let arr = res.data;

            for(var i = 0; i < arr.length; i++){
                if(arr[i].id === 1){
                $scope.superBlend = arr[i];
            } else if(arr[i].id === 2){
                $scope.classic = arr[i]
            } else if (arr[i].id === 3){
                $scope.watermelon = arr[i]
            } else if (arr[i].id === 4){
                $scope.wholeFood = arr[i]
            } else if(arr[i].id === 5){
                $scope.allFruit = arr[i]
            } else if (arr[i].id === 6){
                $scope.protein = arr[i]
            } else if (arr[i].id === 7){
                $scope.fruitnveg = arr[i]
            } else if (arr[i].id === 8){
                $scope.boosted = arr[i]
            } else if (arr[i].id === 9){
                $scope.creamyTreats = arr[i]
                }
            }
        })
    }

    $scope.getAllSmoothies();
}])
angular.module('app').service("smoothieService", ["$http", function($http){

    this.getAllSmoothies = function(){
        return $http({
            method: 'GET',
            url: '/api/menu/smoothies'
        })
    }


}])
angular.module('app').controller('finderCtrl', ["$scope", "$stateParams", "finderService", function($scope, $stateParams, finderService){

$scope.zip = $stateParams.zip;

// $scope.getMaps = function(){
//     finderService.getMaps().then(function(response){
//         console.log(response);
//     })
// }
// $scope.getMaps();

}])

angular.module('app').service('finderService', ["$http", function($http){
// KEY: AIzaSyCztgSIq2RPtlaJrwbXrz7jQF7HSX3URTo ////
// this.getMaps = function(){
//         return $http({
//             method: 'GET',
//             url:"https://www.google.com/maps/embed/v1/place?key=AIzaSyCztgSIq2RPtlaJrwbXrz7jQF7HSX3URTo&q=Jamba+Juice," + zip
//         })
//     }

}])


angular.module('app').controller('upbeetCtrl', ["$scope", "upbeetService", function($scope, upbeetService){
$scope.smallTbl =  true;
$scope.mediumTbl = false;
$scope.largeTbl = false;

$scope.changeNutrition = function(str){
    if(str === 'small'){
        $scope.smallTbl =  true;
        $scope.mediumTbl = false;
        $scope.largeTbl = false;
    } else if (str === 'medium'){
        $scope.smallTbl = false;
        $scope.mediumTbl = true;
        $scope.largeTbl = false;
    } else if (str === 'large'){
        $scope.smallTbl =  false;
        $scope.mediumTbl = false;
        $scope.largeTbl = true;
    }
}

    $scope.getUpbeet = function(){
        upbeetService.getUpbeet().then(function(res){
            console.log(res);
            $scope.upbeet = res.data[0];
            console.log(upbeet)
        })
    }

    $scope.getUpbeet();

    let nutritionSmall = $(".upbeet_small")
    let nutritionMedium = $(".upbeet_medium")
    let nutritionLarge = $(".upbeet_large")

    nutritionSmall.click(function(){
        nutritionSmall.addClass("upbeet_active")
        nutritionMedium.removeClass("upbeet_active")
        nutritionLarge.removeClass("upbeet_active")
    })

    nutritionMedium.click(function(){
        nutritionMedium.addClass("upbeet_active")
        nutritionSmall.removeClass("upbeet_active")
        nutritionLarge.removeClass("upbeet_active")
    })

    nutritionLarge.click(function(){
        nutritionLarge.addClass("upbeet_active")
        nutritionMedium.removeClass("upbeet_active")
        nutritionSmall.removeClass("upbeet_active")
    })
}])
angular.module('app').service('upbeetService', ["$http", function($http){

    this.getUpbeet = function(){
        return $http({
            method: 'GET',
            url: '/api/menu/smoothies/fnv/beet'
        })
    }
}])