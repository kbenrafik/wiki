var app = angular.module("wikiApp", ['ui.router','ngWebsocket','pascalprecht.translate','ngMaterial','mdDataTable','uuid4']);

var articles = {},
    isConnected = false;
app.config(function ($stateProvider, $urlRouterProvider, $translateProvider,$mdThemingProvider) {

    $mdThemingProvider.theme('default');

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        views: {
            "navBar@": {
                templateUrl: function() {
                console.log("navbar View")
                if(isConnected)
                    return 'views/navbar/navbar.html';
                return 'views/login/login.html';
                },
                controller: 'NavBarController'
            },
            "footer@": {
                templateUrl: 'views/footer/footer.html',
                controller: 'FooterController'
            },
            "formulaire@": {
                templateUrl: 'views/content/formulaire/formulaire.html',
                controller: 'FormulaireController'
            },
            "list@": {
                templateUrl: 'views/content/list/list.html',
                controller: 'ListController'
            }
        },
        onEnter: function(dataService){
            console.log('controller home');
            if(Object.keys(articles).length == 0 ){
                articles = dataService.getArticles();
            }
        },
        onExit : function(){
           alert('kan hna');
        }
    }).state('new', {
        parent:'home',
        url: 'new',
        views: {
            "formulaire@": {
                templateUrl: 'views/new/new.html',
                controller:'NewController'
            }
        }
    }).state('exit', {
        url: '/exit',
        views: {
            "content": {
                template: '<h1>Salina</h1>'
            }
        }
    });

    // translate
    $translateProvider.translations('en', {
        NEW_TTILE: 'new'
      });
      $translateProvider.translations('fr', {
        NEW_TTILE: 'nouveau'
      });

      $translateProvider.preferredLanguage('fr');
});
