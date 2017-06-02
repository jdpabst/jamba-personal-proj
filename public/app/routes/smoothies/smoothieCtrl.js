angular.module('app').controller("smoothieCtrl", function($scope, smoothieService){

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
})