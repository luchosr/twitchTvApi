console.log('funciona');

$(document).ready(function(){
var channel = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var urlChannel = 'https://crossorig.in/https://wind-bow.glitch.me/twitch-api/streams/';
var logo, display_name, status;
for (var i = 0; i < channel.length; i++) {
 urlChannel = urlChannel + channel[i];
  console.log("la url queda: " + urlChannel);


  $.ajax({
  url: urlChannel,
  method: 'GET',

  success: function(data){
    if(data.stream !== null){
      console.log(data);
     logo = data.stream.channel.logo;
     console.log('el logo es: ' + data.stream.channel.logo);
     display_name = data.stream.channel.display_name;
     status = data.stream.channel.status;
    $('.channels').append("<div><div class='col-md-4'><img src="+ logo +"></div><div class='col-md-4'>" + display_name+ "</div><div class='col-md-4'>" + status+ "</div></div>");
  } else {
    logo = "Image not found";

    display_name = channel[i];
    console.log(channel[i]);
    console.log(display_name);
    status = 'OFFLINE';
   $('.channels').append("<div class='chan col-md-12'><div class='col-md-4'><img src="+ logo +" ></div><div class='col-md-4'>" + display_name+ "</div><div class='col-md-4'>" + status+ "</div></div>");
  }

  // $('.channels').append("<div><div class='col-md-4'><img src="+ logo +"></div><div class='col-md-4'>" + display_name+ "</div><div class='col-md-4'>" + status+ "</div></div>");
  // if (data.stream !== null) {
  //
  //   // $('.channels').append('appendea viteh!');
  // }
  // console.log(data);
  }

  });




  urlChannel = 'https://crossorig.in/https://wind-bow.glitch.me/twitch-api/streams/';
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
