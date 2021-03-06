(function(index){
  var online_users = jQuery('#users'),
      users_frame  = jQuery('.frame'),
      search_input = jQuery('#search'),
      game_element = jQuery('.game'),
      aprilis_logo = jQuery('.logo'),
      content      = jQuery('.content'),
      game_content = jQuery('.game_content'),
      add_button   = jQuery('.add_button'),
      add_game     = jQuery('.add_game'),
      blur         = jQuery('.blur'),
      loading      = jQuery('#loading'),
      comments     = jQuery('.comments');
      info         = jQuery('#info_container');

  index.init = function(){
    index.updates();
    index.events();
  };

  index.updates = function(){
  };

  index.events = function(){
    search_input.keyup(function(){
      game_content.removeClass('active');
      index.search_query();
    });

    content.on('scroll',function(){
      game_content.css('top',content.scrollTop()+'px');
    });

    aprilis_logo.on('click',function(){
      index.enable_scroll();
    });

    add_button.on('click',function(){
      index.show_elements(blur,add_game);
    });

    blur.on('click',function(){
      index.hide_elements(add_game,blur);
    });

    jQuery(document).on('click','.comment',function(){
      comment = jQuery(this);
      comment.hasClass('wrap') ? comment.removeClass('wrap') : comment.addClass('wrap');
      setTimeout(function(){
        comments.animate({
          scrollTop: ((comment.position().top + comments.scrollTop()) - comments.position().top) - 5
        })
      },100);
    });
  };

  index.show_elements = function(first,second){
    first.removeClass('hide');
    setTimeout(function(){
      first.removeClass('fade_out');
      second.removeClass('hide');
      setTimeout(function(){
        second.removeClass('fade_out');
      },500);
    },100);
  }

  index.hide_elements = function(first,second){
    first.addClass('fade_out');
    setTimeout(function(){
      first.addClass('hide');
      setTimeout(function(){
        second.addClass('fade_out');
        setTimeout(function(){
          second.addClass('hide');
        },500);
      },100);
    },500);
  }

  index.enable_scroll = function(){
    game_content.removeClass('active');
    setTimeout(function(){
      content.removeClass('scroll_disable');
    },1000);
  }

  index.search_query = function(){
    jQuery('.game').each(function(index){
      var game = jQuery(this);
      game.attr('search-value').indexOf(search_input.val().toLowerCase()) > -1 ? game.removeClass('fade_out_game') : game.addClass('fade_out_game');
    });
  };

  index.init();
})({});
