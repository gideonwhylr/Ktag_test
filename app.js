var app = angular.module('app', []);

app.controller('Controller', ['$scope', '$window', '$location', '$anchorScroll',
  function($scope, $window, $location, $anchorScroll) {
    $scope.demos = [{
      name: "Header Map",
      url: "header-map.html"
    },{
      name: "Big Map",
      url: "big-map.html"
    }, 
    {
      name: "List View",
      url: "list-view.html"
    }, 

    {
      name: "List View Images ",
      url: "list-view-images2.html"
    }, 
    {
      name: "List View Images 2",
      url: "list-view-images.html"
    }, 
    {
      name: "List View Background", 
      url: "list-view-bg.html"
    }
    ]
  }
])
