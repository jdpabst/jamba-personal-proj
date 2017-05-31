angular.module('app').controller('menuCtrl', function($scope, menuService){

$scope.getMenu = function(){
    menuService.getMenu().then(function(res){
        console.log(res);
        $scope.menu = res.data;
    })

}

$scope.getMenu();



})
