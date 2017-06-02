angular.module('app').service('upbeetService', function($http){

    this.getUpbeet = function(){
        return $http({
            method: 'GET',
            url: '/api/menu/smoothies/fnv/beet'
        })
    }
})