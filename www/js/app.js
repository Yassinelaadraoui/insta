// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services',  'ngCordova', ])

.filter('tweetLinky',['$filter', '$sce',
  function($filter, $sce) {
    return function(text, target) {
      if (!text) return text;

      var replacedText = $filter('linky')(text, target);
      var targetAttr = "";
      if (angular.isDefined(target)) {
          targetAttr = ' target="' + target + '"';
      }

      // replace #hashtags
      var replacePattern1 = /(^|\s)#(\w*[a-zA-Z_]+\w*)/gim;
      replacedText = replacedText.replace(replacePattern1, '$1<a ' + targetAttr + '>#$2</a>');

      // replace @mentions
      var replacePattern2 = /(^|\s)\@(\w*[a-zA-Z_]+\w*)/gim;
      replacedText = replacedText.replace(replacePattern2, '$1<a href="https://twitter.com/$2"' + targetAttr + '>@$2</a>');

      $sce.trustAsHtml(replacedText);
      return replacedText;
    };
  }
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
      cache: false,
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  
  .state('tab.dash', {
    cache: false,
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.signin', {
    cache: false,
    url: '/signin',
    views: {
      'tab-signin': {
        templateUrl: 'templates/sign-in.html',
        controller: 'signinCtrl'
      }
    }
  })
  .state('tab.searcheduser', {
    cache: false,
    url: '/searcheduser',
    views: {
      'tab-searcheduser': {
        templateUrl: 'templates/searcheduser.html',
        controller: 'SearchedCtrl'
      }
    }
  })
  .state('tab.searchedpost', {
    cache: false,
    url: '/searchedpost',
    views: {
      'tab-searchedpost': {
        templateUrl: 'templates/searchedpost.html',
        controller: 'SearchedCtrl'
      }
    }
  })
  .state('tab.signup', {
    cache: false,
    url: '/signup',
    views: {
      'tab-signup': {
        templateUrl: 'templates/sign-up.html',
        controller: 'signupCtrl'
      }
    }
  })
   .state('tab.camera', {
    
    url: '/camera',
    views: {
      'tab-camera': {
        templateUrl: 'templates/tab-camera.html',
        controller: 'CameraCtrl'
      }
    }
  })
   .state('tab.post', {
    
    url: '/camera',
    views: {
      'tab-camera': {
        templateUrl: 'templates/tab-camerapost.html',
        controller: 'PostCtrl'
      }
    }
  })
   /*.state('tab.menuview', {
    
    cache: false,
      url: '/menuview',
      views: {
        'Yassine laadraoui': {
          templateUrl: 'templates/menuview.html',
          controller: 'AccountCtrl'
        }
      }

    })*/
   .state('tab.chat-detail', {
      url: '/dash/:commentId',
      views: {
        'tab-dash': {
          templateUrl: 'templates/comment.html',
          controller: 'commentCtrl'
        }
      }
    })

  .state('tab.chats', {
    cache: false,
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-deta', {
      cache: false,
      url: '/chat/:name',
      params:{
        param1:null
      },
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-search.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
    
 .state('tab.tabx', {
      cache: false,
      url: '/menuview',
      views: {
        'tabx': {
          templateUrl: 'templates/menuview.html',
          controller: 'AccountCtrl'
        }
      }
    })
  .state('tab.account', {
    cache: false,
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
.state('tab.accountedit', {
    cache: false,
    url: '/accountedit',
    views: {
      'tab-accountx': {
        templateUrl: 'templates/editprofil.html',
        controller: 'AccountCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/signin');

});
