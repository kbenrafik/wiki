var app = angular.module("wikiApp");
app.controller("NewController",function ($scope,dataService){
    
    $scope.article = {
   
        title : '',
        category : '',
        contenu : '',
        
    }
    
    $scope.create = function(){
        
        $scope.article.id = Math.random();
        dataService.createArticle($scope.article);
        
    }
    
});
