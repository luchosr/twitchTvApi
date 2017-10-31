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
    console.log("La url es: ", urlStatus);
    fetch(statusUrl)
      .then(data => data.json())
      .then(data => console.log(data) || data)
      .then(data => {
        let { stream } = data;
        // console.log("el stream es: ", stream);
        stream === null
          ? $("#display").append(`<div class="channel">
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
              .append(`<div class="channel"><ul class="displ"><li><img src="
                        ${stream.channel
                          .logo}" alt="channel logo"></li><li><a href="
                        ${stream.channel
                          .url}" target="_blank" class="name">${chanarr}
                        </a></li><li> <span class="stat">${stream.channel
                          .status}
                        </span></li></ul></div>`);

        // console.log("el status contiene algo", stream.channel.name);
        // statusDisp(chanarr);

        // let comparador = JSON.stringify(stream);
        // console.log("El comparador es:", comparador);
        // comparador === "null"
        //   ? $(".displ").addClass("red")
        //   : $(".displ").addClass("green");
      })
      .catch(err => console.log("error, no se pudo hacer el GET", err));
  };
  /******************** Channels display function *******************/

  // const channelGenerat = chanarr => {
  //   channel2 = chanarr;
  //   urlchan = `https://api.twitch.tv/kraken/channels/${channel2}?client_id=${cid}`;
  //   fetch(urlchan)
  //     .then(data5 => data5.json())
  //     .then(data => console.log(data) || data)
  //     .then(data => {
  //       let { name } = data; /** aca vendria  a ser data.name  */
  //       if (name === "freecodecamp") {
  //         console.log("aca freecode camp tendria que estar", data.strean);
  //         freegenerate(data);
  //       }
  //       $("#display")
  //         .append(`<div class="channel"><ul class="displ"><li><img src="
  //           ${data.logo}" alt="cahnnel logo"></li><li><a href="
  //           ${data.url}" target="_blank" class="name ${name}">${data.display_name}
  //           </a></li><li> <span class="stat">${data.status}
  //           </span></li></ul></div>`);
  //       statusDisp(chanarr);
  //       // console.log(json.name);
  //     })
  //     .catch(err => console.log("error, no se pudo hacer el GET", err));
  // };

  // chaArray.map(channelGenerat);
  chaArray.map(statusDisp);

  // --aca cierra el for --------
  // ------- aca cierra el .ready-------
});
// data.stream ? $(".stat").addClass("red") : $(".stat").addClass("green");
/** https://wind-bow.glitch.me/twitch-api/streams/lvpes3 **/

//  async fetchFromApi (method, channel) {
//     const res = await fetch(`${API_URL}/${method}/${channel}`)
//     return await res.json()
//   }

//   async componentWillMount () {
//     try {
//       const [channel, stream] = await Promise.all([
//         this.fetchFromApi('channels', 'freecodecamp'),
//         this.fetchFromApi('streams', 'freecodecamp')
//       ])

//       this.setState({ channel, stream })
//     } catch (err) {
//       console.log("Something failed!: ", err)
//     }
//   }
