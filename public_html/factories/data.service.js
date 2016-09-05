var app = angular.module("wikiApp")
        .factory('dataService',function(){
            
            return {
                createArticle : function(data){
                     articles[data.id] = angular.copy(data);
                    
                     localStorage.setItem("articles",JSON.stringify(articles));
                },
                getArticles: function(){
                    
                    return JSON.parse(localStorage.getItem("articles")) || {}; 
                }
                
            } 
            
        });
