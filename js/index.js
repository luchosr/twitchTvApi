console.log("funciona");

$(document).ready(function() {
  const cid = "k1jg9vui6ypr4k1licjikiaijqj187";
  const chaArray = [
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas",
    "NorthKorea",
    "Michael"
  ];
  let channelFreeCode = chaArray[3];

  let urlChannel =
    "https://api.twitch.tv/kraken/users/44322889?client_id=XXXXX";
  let logo, display_name, status;
  const url1 =
    "https://api.twitch.tv/kraken/streams/" +
    channelFreeCode +
    "?client_id=" +
    cid;

  /******************** freeCodeCamp link *****************/

  fetch(url1)
    .then(data => data.json())
    .then(json => {
      !json.stream
        ? $("#fcc").html(" is offline")
        : $("#fcc").html(" is ONLINE!");
    })
    .catch($("#fcc").html("is OFFLINE!"));

  /******************** Channels display *******************/

  for (let i = 0; i < chaArray.length; i++) {
    let datos,
      channel2 = chaArray[i],
      url2 =
        "https://api.twitch.tv/kraken/channels/" +
        channel2 +
        "?client_id=" +
        cid;
    fetch(url2)
      .then(data5 => data5.json())
      .then(json => {
        $("#display").append(
          '<div class="channel"><ul class="displ"><li><img src="' +
            json.logo +
            '" alt="cahnnel logo"></li><li><a href="' +
            json.url +
            '" target="_blank" class="name">' +
            json.display_name +
            '</a></li><li> <span class="stat">' +
            json.status +
            "</span></li></ul></div>"
        );
        console.log(json.name);
        console.log(json.status);
        json.status === null
          ? $(".stat").addClass("red")
          : $(".stat").addClass("green");
      })
      .catch(console.log("error, no se pudo hacer el GET"));

    // --aca cierra el for ----------
  }

  // ------- aca cierra el .ready-------
});
