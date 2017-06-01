angular.module('app').service("smoothieService", function($http){

    this.getAllSmoothies = function(){
        return $http({
            method: 'GET',
            url: '/api/menu/smoothies'
        })
    }


})