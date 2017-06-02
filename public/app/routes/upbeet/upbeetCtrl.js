angular.module('app').controller('upbeetCtrl', function($scope, upbeetService){

    $scope.getUpbeet = function(){
        upbeetService.getUpbeet().then(function(res){
            console.log(res);
            $scope.upbeet = res.data[0];
            console.log(upbeet)
        })
    }

    $scope.getUpbeet();
})