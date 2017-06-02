angular.module('app').service('fruitnvegService', function($http){

    this.getFruitnVeg = function(){
        return $http({
            method: 'GET',
            url: '/api/menu/smoothies/fnv'
        })
    }
})