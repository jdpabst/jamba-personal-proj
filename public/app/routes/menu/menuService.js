angular.module('app').service('menuService', function($http){

    this.getMenu = function(){
        return $http({
            method: 'GET',
            url: '/api/menu'
        })
    }

})