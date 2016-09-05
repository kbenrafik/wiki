var app = angular.module("wikiApp")
    .factory('userService',function($websocket){

        var users = [];
           users['khalid'] = {
            login : 'khalid',
            password:'123',
            preference: {
                lang : 'fr',
                theme: 'default'}
            };
           users['benrafik'] = {login : 'benrafik', password:'123',preference:{lang : 'en', theme: 'custom'}};

        return {
            getUser: function(login){
                var perf='';

                var ws = $websocket.$new('ws://10.42.2.184:9090');

                ws.$on('$open', function () {
                    console.log('webSocket nowres is open')
                    ws.$emit('wiki posts', {title:'raja',body:'lodo'});
              }).$on('wiki login', function (_pereference) {
                 // console.log('bla bla');
                 perf=_pereference;
                 angular.extend(users[login].preference, perf);
                                     console.log(_pereference); // it prints 'a parrot response'
                  }).$on('$close', function () {
                console.log('Noooooooooou, I want to have more fun with ngWebsocket, damn it!');
            }).$on('$error', function () {
                  console.log('error');
              });


                    console.log(users[login])

              console.log(users[login]);

                return users[login] || {};
            }
        }

    });
