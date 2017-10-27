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
  (data.stream === null)?
  $("#fcc").html(" is offline"):$("#fcc").html(" is ONLINE!")
});

 for (let i = 0; i < chaArray.length; i++){
  let  datos, channel2 = chaArray[i], url2 = "https://api.twitch.tv/kraken/channels/" + channel2 + "?client_id=" + cid;
  fetch(url2)
  .then(data5 => data5.json())
  .then((json) => {  
       $("#display").append('<div class="channel"><ul class="displ"><li><img src="'+ json.logo+'" alt="cahnnel logo"></li><li><a href="'+ json.url+'" target="_blank">'+ json.display_name+'</a></li><li> <span>'+ json.status+'</span></li></ul></div>')
      })

// --aca cierra el for ----------
 }
$(".green").click(
  
);

// ------- aca cierra el .ready-------
});