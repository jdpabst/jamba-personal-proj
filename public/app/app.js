angular.module('app', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider){
    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: './app/routes/home/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .state('blended', {
            url: '/blended',
            templateUrl: './app/routes/blended/blendedTmpl.html',
            // controller: 'blendedCtrl'
        })
        .state('map', {
            url: '/store-finder:zip',
            templateUrl: './app/routes/store-finder/finderTmpl.html',
            controller: 'finderCtrl'
        })
        .state('menu', {
            url:'/menu',
            templateUrl: './app/routes/menu/menuTmpl.html',
            controller: 'menuCtrl'
        })
        .state('smoothies', {
            url: '/smoothies',
            templateUrl: './app/routes/smoothies/smoothieTmpl.html',
            controller: 'smoothieCtrl'
        })
        .state('fruitnveg', {
            url:'/fruitnveg', 
            templateUrl: './app/routes/fruitnveg/fruitnvegTmpl.html',
            controller: 'fruitnvegCtrl'
        })
        .state('upbeet', {
            url: '/upbeet',
            templateUrl: './app/routes/upbeet/upbeetTmpl.html',
            controller: 'upbeetCtrl'
        })

         $urlRouterProvider.otherwise('/')
})