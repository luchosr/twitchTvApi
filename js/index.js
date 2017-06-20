console.log('funciona');

(function(){
    $(document).ready(function(){

      var url = 'https://crossorig.in/https://wind-bow.gomix.me/twitch-api/streams/dreamhackhs';

      $.getJSON(url,function(data){

          console.log(data);
          if (data.stream === null) {
            $('#fccStatus').html('Freee code camp is now OFFLINE');
          }
          else {
            $('#fccStatus').html('Freee code camp is now ONLINE');
          }
      });
      var followersUrl = 'https://crossorig.in/https://wind-bow.gomix.me/twitch-api/streams/dreamhackhs/follows/channels';
    });
})();
