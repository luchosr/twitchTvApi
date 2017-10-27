console.log('funciona');

$(document).ready(function(){
const cid = "k1jg9vui6ypr4k1licjikiaijqj187";
const chaArray = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas", "NorthKorea", "Michael"];
let channelFreeCode = chaArray[3];

let urlChannel = 'https://api.twitch.tv/kraken/users/44322889?client_id=XXXXX';
let logo, display_name, status;
const url1 = "https://api.twitch.tv/kraken/streams/" + channelFreeCode + "?client_id=" + cid;



  /*this code is for displaying freeCodeCamp link in center*/

fetch(url1)
.then((data)=>{
  //console.log(data.logo);
  (data.stream === null)?
  $("#fcc").html(" is offline"):$("#fcc").html(" is ONLINE!")
});

 for (let i = 0; i < chaArray.length; i++){
  let  datos, channel2 = chaArray[i], url2 = "https://api.twitch.tv/kraken/channels/" + channel2 + "?client_id=" + cid;
  fetch(url2)
  .then(data5 => data5.json())
  .then((json) => {console.log(json)
    //$("#display").append()
    //console.log(data5)

    // fetch(url)
    // .then(data => data.json())
    // .then(json => console.log(json))
 
  // .then(
  //   (datos)=>{
      
       $("#display").append('<div class="channel"><ul class="displ"><li><img src="'+ json.logo+'" alt="cahnnel logo"></li><li><a href="'+ json.url+'" target="_blank">'+ json.display_name+'</a></li><li> <span>'+ json.status+'</span></li></ul></div>')})
  //   }
  // )

 
// --aca cierra el for ----------
 }


// ------- aca cierra el .ready-------
});


// for (let i = 0; i < chaArray.length; i++) {
//  urlChannel = urlChannel + chaArray[i];
//   console.log("la url queda: " + urlChannel);


//   $.ajax({
 
//   type: 'GET',
//   url: "https://api.twitch.tv/kraken/channels/" + chaArray[i],
//   headers: {"Client-ID": cid },

//   success: function(data1){
//     if(data.stream !== null){
//       console.log(data);
//      logo = data.stream.channel.logo;
//      console.log('el logo es: ' + data.stream.channel.logo);
//      display_name = data.stream.channel.display_name;
//      status = data.stream.channel.status;
//     $('.channels').append("<div><div class='col-md-4'><img src="+ logo +"></div><div class='col-md-4'>" + display_name+ "</div><div class='col-md-4'>" + status+ "</div></div>");
//   } else {
//     logo = "Image not found";

//     display_name = channel[i];
//     console.log(channel[i]);
//     console.log(display_name);
//     status = 'OFFLINE';
//    $('.channels').append("<div class='chan col-md-12'><div class='col-md-4'><img src="+ logo +" ></div><div class='col-md-4'>" + display_name+ "</div><div class='col-md-4'>" + status+ "</div></div>");
//   }

  // $('.channels').append("<div><div class='col-md-4'><img src="+ logo +"></div><div class='col-md-4'>" + display_name+ "</div><div class='col-md-4'>" + status+ "</div></div>");
  // if (data.stream !== null) {
  //
  //   // $('.channels').append('appendea viteh!');
  // }
  // console.log(data);
//   }

//   });




// }
// });








