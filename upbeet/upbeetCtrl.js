angular.module('app').controller('upbeetCtrl', function($scope, upbeetService){
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
})