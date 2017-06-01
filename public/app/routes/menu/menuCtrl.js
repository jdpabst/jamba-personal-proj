angular.module('app').controller('menuCtrl', function($scope, menuService){

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


})
