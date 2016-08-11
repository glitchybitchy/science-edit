var app = {};


app.getData = function () {
  $.ajax({
    url: 'https://www.reddit.com/r/science/top.json',
    dataType: 'json',
    success: function( response ) {
      console.log( response );

      for(i = 0; i<response.data.children.length; i++ ){
      	$('.card-columns').append('<div class="card card-block"><p class="lead">'+response.data.children[i].data.title+'</p> </div>');
      	console.log(response.data.children[i].data.score);

      	// var cardWidth = $('.card').width();

      	// $('.card').css({'height':cardWidth+'px'})


      }
    }
  });

};


app.init = function() {
    $(document).ready(app.getData);
    
};

$(document).ready(app.init);