angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope ,$stateParams, Chats, $http, $state ) {
  $scope.comment = Chats.get($stateParams.chatId);
  $scope.followers_only=[{}];
  $scope.postusername = "";
  $scope.searches = function(stat){
    console.log(stat);
    $scope.search = { searched : stat} ;
    console.log("ddsd");
      $http({
      url: 'https://tranquil-coast-83560.herokuapp.com/searchedtag', // IP address replaced with ##'s
      method: 'POST',
      data: $scope.search,
      headers: {'Content-Type': 'application/json'}
  
      });
      $state.go('tab.chat-deta');

      

  };

   $scope.fetch =function(){
  
  
  $http.get("https://tranquil-coast-83560.herokuapp.com/weather")
  .then(function(response){ 

          
    $scope.posts = response.data.data;
    console.log($scope.posts);


    
    
  });
  $scope.test = function(tests){
       for (var i = followers_only.length - 1; i >= 0; i--) {
         if ($scope.followers_only == tests) {
          return 1 ;
         }else return 0;
       }
  };
  $http.get("https://tranquil-coast-83560.herokuapp.com/user")
  .then(function(response){ 

          
    $scope.user = response.data.data;
    $scope.followers_only = $scope.user[0].following;
    console.log($scope.followers_only);
    
    
   
    
    
  });


 
}
  


})

.controller('PostCtrl', function($scope ,$stateParams, $http, $rootScope, $state , $cordovaFileTransfer) {
    

    $scope.lastCaption="this is a post #caption ";
    $scope.lastTag="";
    $scope.lastCaption="nothing here ";
     $scope.lastTag = "";
     $scope.url="sddsd";
     $scope.uploadResults="sqssd";
     
      
          $scope.Photo ="https://jpeg.org/images/jpeg-home.jpg";
           $scope.uploadPhoto = function()
    {
       
       var options = new FileUploadOptions();
        options.fileKey = "image";
        $cordovaFileTransfer.upload('https://mighty-beach-20789.herokuapp.com/upload', $scope.Photo, options).then(function(result) {
            

            $scope.uploadResults = "Upload completed successfully" ;
                       
        }, function(err) {
            
            $scope.uploadResults = err;                       
        }, function (progress) {
            // constant progress updates
            console.log(progress);
        })
        
       
    } 
     $scope.user= {
              username:"oulu",
              caption : "nice pic #yoo",
              url: $scope.url,
              likes:5,
              tag: "#yassine"};
     
    

    
})

.controller('CameraCtrl' ,['$scope', '$stateParams', '$cordovaCamera', '$rootScope', '$state','$cordovaFileTransfer',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaCamera, $rootScope, $state, $http, Chats , $cordovaFileTransfer) {
     $scope.lastPhoto ="https://jpeg.org/images/jpeg-home.jpg";
     $scope.uploadResults="sdsdds"
      $scope.send =function(){
      $http({
      url: 'https://tranquil-coast-83560.herokuapp.com/weather?data=', // IP address replaced with ##'s
      method: 'POST',
      data: $scope.user,
      headers: {'Content-Type': 'application/json'}
  
      });
    }
    
    
      $scope.uploadPhoto = function()
    {
      var options = new FileUploadOptions();
        options.fileKey = "image";

        $cordovaFileTransfer.upload('https://mighty-beach-20789.herokuapp.com/upload', $scope.lastPhoto, options).then(function(result) {
            console.log("File upload complete");
            console.log(result);
            $scope.uploadResults = "Upload completed successfully"            
        }, function(err) {
            console.log("File upload error");
            console.log(err);
            $scope.uploadResults = "Upload failed"                           
        }, function (progress) {
            // constant progress updates
            console.log(progress);
        });
       
    } 
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
            $rootScope.imgURI =  photo;
            $scope.lastPhoto = photo;
            
            uploadPhoto(lastPhoto);
            
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
        })
        
    }

    

}])
.controller('SearchedCtrl', function($scope, $http, $rootScope , $state  ) {
    $scope.user= [{}];
    $http.get("https://tranquil-coast-83560.herokuapp.com/searchedpost")
  .then(function(response){ 

          
    $scope.search = response.data.data;
   console.log($scope.search[search.length - 1].username);
    
    
  });
  console.log($scope.search);

  $scope.refresh = function(){
    $http.get("https://tranquil-coast-83560.herokuapp.com/searchedpost")
  .then(function(response){ 

          
    $scope.search = response.data.data;
   console.log($scope.search[search.length - 1].username);
    
    
  });
  }
  $scope.refresh1 = function(){
     $http.get("https://tranquil-coast-83560.herokuapp.com/searchedpost")
  .then(function(response){ 

          console.log("done");
    $scope.user = response.data.data;
   console.log($scope.user[user.length - 1].username);
    
    
  });
  }
     
})
.controller('SearchCtrl', function($scope, $http, $rootScope , $state  ) {
$http.get("https://tranquil-coast-83560.herokuapp.com/weather")
  .then(function(response){ 

          
    $scope.user = response.data.data;
   
    
    
  });
  $http.get("https://tranquil-coast-83560.herokuapp.com/searchedtag")
  .then(function(response){ 

          
    $scope.variable = response.data.data;

    $scope.leg = $scope.variable[$scope.variable.length-1].searched;
    console.log($scope.leg);


    
    
  });
  $scope.name = { searched : "#oulu"
  };
  $scope.searchedposts = [{

  }];
  $scope.searchedusers=[{

  }];
 $scope.clickimg = [{

      }];
  $scope.gotoview = function(index){
     
       $scope.clickimg.push($scope.searchedposts[index]);
       console.log($scope.searchedposts);
      
       $http({
      url: 'https://tranquil-coast-83560.herokuapp.com/searchedpost', // IP address replaced with ##'s
      method: 'POST',
      data: $scope.searchedposts[index],
      headers: {'Content-Type': 'application/json'}
  
      });
       console.log($scope.clickimg);
       console.log($scope.clickimg[1].url);
       $state.go('tab.searchedpost')
  };
  $scope.gotoview1 = function(index){
     
       $scope.clickimg.push($scope.searchedusers[index]);
       console.log($scope.searchedusers);
      
       $http({
      url: 'https://tranquil-coast-83560.herokuapp.com/searchedpost', // IP address replaced with ##'s
      method: 'POST',
      data: $scope.searchedusers[index],
      headers: {'Content-Type': 'application/json'}
  
      });
       console.log($scope.clickimg);
       console.log($scope.clickimg[1].url);
       $state.go('tab.searcheduser')
  };
  $scope.look = function(){
    $http.get("https://tranquil-coast-83560.herokuapp.com/user")
  .then(function(response){ 

          
    $scope.allusers = response.data.data;
   for (var i = 0 ; i < $scope.allusers.length; i++) {
        
        if($scope.name.searched === $scope.allusers[i].username ){ 
          console.log($scope.allusers[i].username);
          
          $scope.searchedusers.push($scope.allusers[i]);
          console.log();
          
        }
            
     };
    
    
  });
  
    $http.get("https://tranquil-coast-83560.herokuapp.com/weather")
  .then(function(response){ 

          
    $scope.user = response.data.data;
   for (var i = 0 ; i < $scope.user.length; i++) {
        console.log($scope.user[i].tag);
        if($scope.name.searched === $scope.user[i].tag ){ 
          $scope.searchedposts.push($scope.user[i]);
          console.log($scope.searchedposts);
        }
            
     };
  
    
    
  });
    
  };   


})
.controller('signupCtrl', function($scope, $state, $http) {
    $scope.user = {};
    $scope.send =function(){
      
        
            
        console.log($scope.user);
      $http({
      url: 'https://tranquil-coast-83560.herokuapp.com/user?data', // IP address replaced with ##'s
      method: 'POST',
      data: $scope.user,
      headers: {'Content-Type': 'application/json'}
  
      });
    };
})

.controller('signinCtrl', function($scope, $state , $http) {
  
   $scope.user=[{
             username:$scope.username,
             password:$scope.password 
          }];
    
$http.get("https://tranquil-coast-83560.herokuapp.com/user")
              .then(function(response){ 
                  $scope.posts = response.data.data;

    
    
            });
 console.log($scope.user);
 console.log($scope.username);
    $scope.signin = function(){
     
        
       for (var i = $scope.posts.length - 1; i >= 0; i--) {
            if ($scope.posts[i].username== $scope.user.username)
            if ($scope.posts[i].password== $scope.user.password) {
                localStorage.setItem("username", $scope.posts[i].username);
                
                $state.go('tab.dash');

            }
         }  
       
        
    };
})

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

.controller('AccountCtrl', function($scope , $http) {
   $http.get("https://tranquil-coast-83560.herokuapp.com/user")
  .then(function(response){ 
    
    for (var i = 0; i <10; i++) {
        console.log(response.data.data[i].username);  
            if (response.data.data[i].username == "yassinelaadraoui") { console.log("bingo");
             $scope.user = response.data.data[i];
             console.log($scope.user);
             }
          }      
   
   
   
    
    
  });
  $scope.settings = {
    enableFriends: true
  };
  /*$scope.offensiveMasteries = [{
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
  }]*/
});
