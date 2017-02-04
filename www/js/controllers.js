angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.posts=[{
    post_id:1,
    user_name:"Homie",
    date:76,
    caption:"yooooo niggga i ain't about that life anymore",
    photo_url:""
},
{
    post_id:"",
    user_name:"dddddddddddddd",
    date:76,
    caption:"",
    photo_url:""
},
{
    post_id:"",
    user_name:-5,
    date:76,
    caption:"",
    photo_url:""
}
];


})
.controller('CameraCtrl', function($scope, $state) {

   $scope.gotosearch = function() {
    console.log("damn");
    $state.go('tab.search');
};
})
.controller('SearchCtrl', function($scope) {})
.controller('ChatsCtrl', function($scope, Chats ,$state) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
   $scope.offensiveMasteries = [{
    image: "http://img4.wikia.nocookie.net/__cb20131121235548/leagueoflegends/images/d/d5/Executioner_mastery_s3.png",
    currentPoint: "0",
    endPoint: "1",
    description : "bla bla bla bla bla bla bla "
  }, {
    image: "http://img4.wikia.nocookie.net/__cb20131121235640/leagueoflegends/images/e/e9/Fury_mastery_s4.png",
    currentPoint: "0",
    endPoint: "4",
    description : "bla bla bla bla bla bla bla "
  }, {
    image: "http://img2.wikia.nocookie.net/__cb20131121235650/leagueoflegends/images/f/f5/Sorcery_mastery_s4.png",
    currentPoint: "0",
    endPoint: "4",
    description : "bla bla bla bla bla bla bla "
  }, {
    image: "http://img4.wikia.nocookie.net/__cb20131121235724/leagueoflegends/images/5/58/Butcher_mastery_s4.png",
    currentPoint: "0",
    endPoint: "1",
    description : "bla bla bla bla bla bla bla "
  },{
    image: "http://img4.wikia.nocookie.net/__cb20131121235548/leagueoflegends/images/d/d5/Executioner_mastery_s3.png",
    currentPoint: "0",
    endPoint: "1",
    description : "bla bla bla bla bla bla bla "
  }, {
    image: "http://img4.wikia.nocookie.net/__cb20131121235640/leagueoflegends/images/e/e9/Fury_mastery_s4.png",
    currentPoint: "0",
    endPoint: "4",
    description : "bla bla bla bla bla bla bla "
  }, {
    image: "http://img2.wikia.nocookie.net/__cb20131121235650/leagueoflegends/images/f/f5/Sorcery_mastery_s4.png",
    currentPoint: "0",
    endPoint: "4",
    description : "bla bla bla bla bla bla bla "
  }, {
    image: "http://img4.wikia.nocookie.net/__cb20131121235724/leagueoflegends/images/5/58/Butcher_mastery_s4.png",
    currentPoint: "0",
    endPoint: "1",
    description : "bla bla bla bla bla bla bla "
  }, {
    image: "http://img4.wikia.nocookie.net/__cb20131121235724/leagueoflegends/images/5/58/Butcher_mastery_s4.png",
    currentPoint: "0",
    endPoint: "1",
    description : "bla bla bla bla bla bla bla "
  }, {
    image: "http://img4.wikia.nocookie.net/__cb20131121235724/leagueoflegends/images/5/58/Butcher_mastery_s4.png",
    currentPoint: "0",
    endPoint: "1",
    description : "bla bla bla bla bla bla bla "
  }, {
    image: "http://img4.wikia.nocookie.net/__cb20131121235724/leagueoflegends/images/5/58/Butcher_mastery_s4.png",
    currentPoint: "0",
    endPoint: "1",
    description : "bla bla bla bla bla bla bla "
  }, {
    image: "http://img4.wikia.nocookie.net/__cb20131121235724/leagueoflegends/images/5/58/Butcher_mastery_s4.png",
    currentPoint: "0",
    endPoint: "1",
    description : "bla bla bla bla bla bla bla "
  }]
  
  $scope.gotosearch = function() {
    console.log("damn");
    $state.go('tab.search');
};
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.offensiveMasteries = [{
    image: "http://img4.wikia.nocookie.net/__cb20131121235548/leagueoflegends/images/d/d5/Executioner_mastery_s3.png",
    currentPoint: "0",
    endPoint: "1"
  }, {
    image: "http://img4.wikia.nocookie.net/__cb20131121235640/leagueoflegends/images/e/e9/Fury_mastery_s4.png",
    currentPoint: "0",
    endPoint: "4"
  }, {
    image: "http://img2.wikia.nocookie.net/__cb20131121235650/leagueoflegends/images/f/f5/Sorcery_mastery_s4.png",
    currentPoint: "0",
    endPoint: "4"
  }, {
    image: "http://img4.wikia.nocookie.net/__cb20131121235724/leagueoflegends/images/5/58/Butcher_mastery_s4.png",
    currentPoint: "0",
    endPoint: "1"
  },{
    image: "http://img4.wikia.nocookie.net/__cb20131121235548/leagueoflegends/images/d/d5/Executioner_mastery_s3.png",
    currentPoint: "0",
    endPoint: "1"
  }, {
    image: "http://img4.wikia.nocookie.net/__cb20131121235640/leagueoflegends/images/e/e9/Fury_mastery_s4.png",
    currentPoint: "0",
    endPoint: "4"
  }, {
    image: "http://img2.wikia.nocookie.net/__cb20131121235650/leagueoflegends/images/f/f5/Sorcery_mastery_s4.png",
    currentPoint: "0",
    endPoint: "4"
  }, {
    image: "http://img4.wikia.nocookie.net/__cb20131121235724/leagueoflegends/images/5/58/Butcher_mastery_s4.png",
    currentPoint: "0",
    endPoint: "1"
  }, {
    image: "http://img4.wikia.nocookie.net/__cb20131121235724/leagueoflegends/images/5/58/Butcher_mastery_s4.png",
    currentPoint: "0",
    endPoint: "1"
  }, {
    image: "http://img4.wikia.nocookie.net/__cb20131121235724/leagueoflegends/images/5/58/Butcher_mastery_s4.png",
    currentPoint: "0",
    endPoint: "1"
  }, {
    image: "http://img4.wikia.nocookie.net/__cb20131121235724/leagueoflegends/images/5/58/Butcher_mastery_s4.png",
    currentPoint: "0",
    endPoint: "1"
  }, {
    image: "http://img4.wikia.nocookie.net/__cb20131121235724/leagueoflegends/images/5/58/Butcher_mastery_s4.png",
    currentPoint: "0",
    endPoint: "1"
  }]
});
