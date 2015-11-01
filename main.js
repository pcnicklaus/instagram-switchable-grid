var app = angular.module("switchableGrid", ['ngResource']);

// Create instagram service
app.factory('instagram', function($resource){

  return {
    fetchPopular: function(callback){

      var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK',{
        client_id: ''
      },{
        fetch:{method:'JSONP'}
      });

      api.fetch(function(response){

        callback(response.data);

      });
    }
  }

});

function SwitchableGridController($scope, instagram){

  $scope.layout = 'grid';

  $scope.pics = [];

  instagram.fetchPopular(function(data){
    $scope.pics = data;
  });

}
