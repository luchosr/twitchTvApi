console.log('funciona');

(function(){
    $(document).ready(function(){

      var url = 'https://crossorig.in/https://wind-bow.gomix.me/twitch-api/streams/dreamhackhs';

      $.getJSON(url,function(data1){

          console.log(data1);
          if (data.stream === null) {
            $('#fccStatus').html('Freee code camp is now OFFLINE');
          }
          else {
            $('#fccStatus').html('Freee code camp is now ONLINE');
          }
      });
      var followerUrl = 'https://crossorig.in/https://wind-bow.gomix.me/twitch-api/streams/dreamhackhs/follows/channels';
      $get.JSON(followerUrl, function(data2){
            for (var i = 0; i < data2.follows.length; i++) {
              data2.follows[i].
            }
      });
    });
})();
