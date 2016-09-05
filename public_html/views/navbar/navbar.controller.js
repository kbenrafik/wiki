var app = angular.module("wikiApp");
app.controller("NavBarController",function ($scope,$state, userService, $translate){
        $scope.nav='nav Bar ';

        $scope.user = {
              login : '',
              password : '',
              preference : {
                lang : '',
                theme : ''
              }
      }

      $scope.authentificate = function() {
          //console.log('dsq');
          var user = userService.getUser($scope.user.login);
          if(Object.keys(user).length){
                isConnected = true;

                console.log(user.preference.lang)

                $translate.use(user.preference.lang);

              $state.go($state.current, {}, {reload: true});
              return;
          }

          isConnected = false;
      }

      //$scope.preference = userWebsocket;
  });


