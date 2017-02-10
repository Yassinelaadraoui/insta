angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope ,$stateParams, Chats, $http ) {
  $scope.comment = Chats.get($stateParams.chatId);
  $scope.user= {
    username:"yassine",
    caption : "",
    url: "http://www.javabeat.net/wp-content/uploads/2015/09/Express-2.jpg",
    likes:5};
    $scope.send =function(){
      $http({
      url: 'https://tranquil-coast-83560.herokuapp.com/weather?data=', // IP address replaced with ##'s
      method: 'POST',
      data: $scope.user,
      headers: {'Content-Type': 'application/json'}
  
});
    };
   $scope.fetch =function(){
  
  $http.get("https://tranquil-coast-83560.herokuapp.com/weather")
  .then(function(response){ 

          
    $scope.posts = response.data.data;

    
    
  });


 
}
  


})

.controller('PostCtrl', function($scope ,$stateParams, $http, $rootScope, $state) {
    $scope.lastPhoto = $rootScope.imgURI;
    $scope.lastCaption="";
    $scope.lastTag="";
    $scope.user= {
              username: "Yassine Laadraoui",
              caption : $scope.lastCaption,
              url: $scope.lastPhoto,
              likes:5};
    $scope.send =function(){

        $http({
        url: 'https://tranquil-coast-83560.herokuapp.com/weather?data=', // IP address replaced with ##'s
        method: 'POST',
        data: $scope.user,
        headers: {'Content-Type': 'application/json'}
    
        });
        $go.state('tab.dash')
        
    }

    
})

.controller('CameraCtrl', ['$scope', '$stateParams', '$cordovaCamera', '$rootScope', '$state',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaCamera, $rootScope, $state, $http, Chats) {
     $scope.lastPhoto ="http://host.sonspring.com/domgallery/img/placeholder.gif";
     
     $scope.lastCaption="nothing here ";
     $scope.lastTag = "";
     $scope.user= {
              username:"yassine",
              caption : "nice pic",
              url: $rootScope.imgURI,
              likes:5};
     $scope.send =function(){
      $http({
      url: 'https://tranquil-coast-83560.herokuapp.com/weather?data=', // IP address replaced with ##'s
      method: 'POST',
      data: $scope.user,
      headers: {'Content-Type': 'application/json'}
  
      });
    };
     
     
    $scope.choosePhoto = function() {
        

        //Gallery
        var options = {
            quality: 80,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 500,
            targetHeight: 700,
            correctOrientation: true,
            saveToPhotoAlbum: true
        };

        $cordovaCamera.getPicture(options).then(function(photo){
            $rootScope.imgURI = "data:image/jpeg;base64," + photo;
            $scope.lastPhoto = "data:image/jpeg;base64," + photo;
           $go.state(tab.post);

            
        })
    }
    $scope.takePhoto = function() {
        
        //Camera Plugin
        var options = {
            quality: 80,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 500,
            targetHeight: 700,
            correctOrientation: true,
            saveToPhotoAlbum: true
        };

        $cordovaCamera.getPicture(options).then(function(photo){
            $rootScope.imgURI = "data:image/jpeg;base64," + photo;
            $scope.lastPhoto = "data:image/jpeg;base64," + photo;
            $go.state(tab.post);
        })
    }

    

}])
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
    description : 'bla bla bla bla bla bla bla '
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
   
    $state.go('tab.search');
};
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
.directive('hideTabs', function($rootScope) {
  return {
      restrict: 'A',
      link: function($scope, $el) {
          $rootScope.hideTabs = 'tabs-item-hide';
          $scope.$on('$destroy', function() {
              $rootScope.hideTabs = '';
          });
      }
  };
})

.controller('mainCtrl', function($scope, $ionicPlatform, $cordovaFileTransfer, $cordovaCamera, $http){    
    $scope.takePhoto = function()
    {
        var options =  {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,            
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE             
        };

        $ionicPlatform.ready(function() {
            $cordovaCamera.getPicture(options).then(function(imageData) {
                $scope.picture = imageData;
            }, function(err) {
                  // error
            });
        });
    }
  })

.controller('commentCtrl', function($scope, $stateParams, Chats) {
  $scope.comment = Chats.all();
  $scope.addcomment="";
  $scope.send = function(){
     
      $scope.comment.push({
                id:5,
                name: "yassine",
                lastText: $scope.addcomment,
                face: "img/max.png"
            });  // add a new object
      
  }

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
