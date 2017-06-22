console.log('funciona');

$(document).ready(function(){
var channel = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var urlChannel = 'https://crossorig.in/https://wind-bow.glitch.me/twitch-api/streams/';
for (var i = 0; i < channel.length; i++) {
 var channelUrli = urlChannel + channel[i];
  console.log("la url queda: " + urlChannel + channel[i]);
}
});







// (function(){
//     $(document).ready(function(){
//          var following=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
//       var url = 'https://crossorig.in/https://wind-bow.gomix.me/twitch-api/streams/dreamhackhs';
//
//       $.getJSON(url,function(data1){
//
//           console.log(data1);
//           if (data.stream === null) {
//             $('#fccStatus').html('Freee code camp is now OFFLINE');
//           }
//           else {
//             $('#fccStatus').html('Freee code camp is now ONLINE');
//           }
//       });
//       var followerUrl = 'https://crossorig.in/https://wind-bow.gomix.me/twitch-api/streams/dreamhackhs/follows/channels';
//       $get.JSON(followerUrl, function(data2){
//             for (var i = 0; i < data2.follows.length; i++) {
//               var displayName = data2.follows[i].channel.display_name;
//               following.push(displayName);
//             }
//
//         for (var j = 0; j < following.length; i++) {
//           var url2 = ' https://crossorig.in/https://wind-bow.gomix.me/twitch-api/streams/' + following[j];
//         }
//         var logo, status, name;
//       });
//     });
// })();
