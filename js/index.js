$(document).ready(() => {
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
    "lvpes3",
    "Michael"
  ];
  let channelFreeCode = chaArray[3];
  let logo, display_name, status;
  let urlStatus = `https://api.twitch.tv/kraken/streams/${channelFreeCode}?client_id=${cid}`;

  /******************** freeCodeCamp link *****************/

  const freegenerate = data => {
    data.stream ? $("#fcc").html(" is ONLINE!") : $("#fcc").html(" is offline");
  };

  /******** Status display function *******/

  const statusDisp = chanarr => {
    let statusUrl = (urlStatus = `https://api.twitch.tv/kraken/streams/${chanarr}?client_id=${cid}`);
    fetch(statusUrl)
      .then(data => data.json())
      .then(data => {
        let { stream } = data;
        if (chanarr === "freecodecamp") {
          freegenerate(data);
        }
        stream === null
          ? $("#display").append(`<div class="channel offline">
  <ul class="displ">
  <li><img src="img/no-logo.png" alt="channel logo"></li
    <li>
      <a href="" target="_blank" class="name">${chanarr}</a>
    </li>
    <li>
      <span class="stat"></span>
    </li>
  </ul>
</div>`)
          : $("#display")
              .append(`<div class="channel online"><div><ul class="displ"><li><img src="
                        ${stream.channel
                          .logo}" alt="channel logo"></li><li><a href="
                        ${stream.channel
                          .url}" target="_blank" class="name">${chanarr}
                        </a></li></ul></div>                      
                        <div><p> <span class="stat">${stream.channel.status}
                        </span><p></div></div>`);
      })
      .catch(err => console.log("error, no se pudo hacer el GET", err));
  };
  chaArray.map(statusDisp);

  $(".ol").click(function() {
    $(".offline").hide();
    $(".online").show();
  });
  $(".ofl").click(function() {
    $(".offline").show();
    $(".online").hide();
  });
});
