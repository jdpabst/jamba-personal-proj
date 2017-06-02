angular.module('app').controller('fruitnvegCtrl', function($scope, fruitnvegService){

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
})