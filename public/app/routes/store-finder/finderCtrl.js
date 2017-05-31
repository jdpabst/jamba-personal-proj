angular.module('app').controller('finderCtrl', function($scope, $stateParams, finderService){

$scope.zip = $stateParams.zip;

// $scope.getMaps = function(){
//     finderService.getMaps().then(function(response){
//         console.log(response);
//     })
// }
// $scope.getMaps();

})
