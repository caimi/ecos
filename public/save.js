angular.module('saveApp', ['ngRoute'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'homeCtrl',
            controllerAs: 'home'
        })
        .when('/result', {
            templateUrl: 'result.html',
            controller: 'resultCtrl',
            controllerAs: 'result'
        }).when('/shop', {
            templateUrl: 'shop.html',
            controller: 'shopCtrl',
            controllerAs: 'shop'
        });

    $locationProvider.html5Mode(true);
}])

.controller('homeCtrl', ['$location', '$http', function($location, $http) {

    var home = this;
    home.sector = 'geral';
  
    $http.get('/shops').
    success(function(data) {
        var tags = [];
        home.sites = data;
        for(var i=0; i<data.length; i++){
          tags = tags.concat(data[i].tag);
        }
        home.sectors = _.uniq(tags);
    });  
    
    home.search = function(param) {
        $location.search('query', home.txtSearch);
        $location.search('sector', home.sector);
        $location.path('result');
    };
  
    home.setSector = function(s){
      home.sector = s;
    };
  
    home.gotoShop = function(){
      $location.path('shop');
    }
}])

.controller('resultCtrl', ['$location', '$http', '$filter', function($location, $http, $filter) {

    var result = this;
    var shops = [];
    var orderBy = $filter('orderBy');

    result.registers = [];
    result.query = $location.search().query;
    result.sector = $location.search().sector;
  
    $http.get('/busca/' + result.sector + '/' + result.query)
      .then(
        function(cb) {
          result.registers = cb.data;
        },
        function(response){
          console.log('ocorreu um erro ao retornar da busca');
          result.err = response.data;
        }
      );
    
    result.sortResults = function(predicate){
      result.predicate = predicate;
      result.reverse = (result.predicate === predicate) ? !result.reverse : false;
      result.registers = orderBy(result.registers, predicate, result.reverse);
    }
    
}])

.controller('shopCtrl', ['$location', '$http', function($location, $http) {

    var shop = this;

    $http.get('/shops').
    success(function(data) {
        shop.sites = data;
    });
  
    shop.printTags = function(arrTags){
      var str = '';
      for(var i=0; i<arrTags.length; i++){
        str = str + arrTags[i] + ', ';
      }
      return str;
    }
}]);