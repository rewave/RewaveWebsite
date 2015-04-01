$(function() {
  
  $slide = $('.slide');
  $laptop = $('.laptop');
  $hand = $('.hand');
  
  ////////////////////
  $('#demand-form').submit(function (ev) {
    var $demandForm = $('#demand-form');
    ev.preventDefault();

    $demandForm.find('input[type="submit"]').attr('value', '• • •');
    var data = {
      MERGE0 : $demandForm.find('input#email').val(),
      MERGE1 : $demandForm.find('input#full-name').val(),
    };

    $.ajax({
        url : 'http://rewaveapp.us3.list-manage.com/subscribe/post-json?u=5129d99ac0d9847744bc03d5c&id=e60d3753e2&c=?',
        data : data, 
        dataType : 'jsonp'
      })
      .done(function(resp) {
        if (resp.result == 'success') {  
          $demandForm.slideUp('fast', function () {
            $(this)
              .parent()
              .hide()
              .html(
                '<div class="text-success">'+resp.msg+'</div>'
              )
              .slideDown()
            ;
          });  
        }
        else if (resp.result == 'error') {
          $('#demand-feedback > .text-danger').text(resp.msg.split(' - ')[1]).removeClass('hidden');  
        }
      })
      .fail(function(resp) {
        $('#demand-feedback > .text-danger').text('No Connection. Please refresh the page.').removeClass('hidden');  
      })
      .always(function(resp) {
        $demandForm.find('input[type="submit"]').attr('value','Submit');
      })
    ;
  });

  ////////////////////
  
  Slide =   {
    set : function () { 
      $slide.css('margin-top', '-'+$slide.height()+'px');

      $laptop.css({
        'margin-bottom':'-'+0.03*$slide.height()+'px'
      });
    },

    change : function (slide) {
      // todo : add a touch of glitter here
      $slide.transition({
        opacity:0
      }, 100, function() {
        $slide.attr('src', slide.src).transition({
          opacity:1
        }, 200);
      });
    },
  };

  ////////////////////

  HandTransforms = {
    set : {
      y : 40,
      rotateX : '-=30deg'
    },

    reset : {
      y : '-=40',
      rotateX : '+=30deg'
    },


    move : {
      left : {
        x : -0.5*$(window).width(),
        y : 150,
        rotate : "-=30deg",
        rotateY : "+=15deg"
      },

      back : {
        x : 0,
        y : 40,
        rotate : "+=30deg",
        rotateY : "0deg"
      },

      right : {
        x : 0,
        y : 40,
        rotate : "+=30deg",
        rotateY : "0deg"
      }
    },
  };
  ////////////////////
  Presentation = {
    slides : [
      {'src':'assets/img/slides/logo.png', 'tip':'Info Text'},
      {'src':'assets/img/slides/what.png', 'tip':'Info Text'},
      {'src':'assets/img/slides/how.png', 'tip':'Info Text'},
      {'src':'assets/img/slides/end.png', 'tip':'Info Text'},
      // {'src':'assets/img/slides/4.png', 'tip':'Info Text'},
    ], 
    current : 0,
    next : function () {
      ++this.current < this.slides.length ? Slide.change(this.slides[this.current]) : --this.current ;

    }, 
    previous : function () {
      --this.current > 0 ? Slide.change(this.slides[this.current]) : ++this.current ;
    },
    reset : function () {
      this.current = 0;
      Slide.change(this.slides[this.current]);
    },
    switchOn : function () {
      if ($slide.css("margin-top")[0] === '-') {
        //if negative margin is set i.e. Slide is set
        //one time animation
        $slide.transition({
          opacity: 1
        }, 1000);
      } else {
        Slide.set();
        setTimeout(Presentation.switchOn, 500); // retry after 1/2 seconds
      }
    }
  };
  ////////////////////
  var present = function present ($el) {

    $("html, body").animate({ scrollTop: 0 }, "slow").delay(500);
  
    var $cardinal = $('.cardinal');
    $cardinal.css({
      'background-color':'#333'
    }, 800);

    var ht = HandTransforms;
    $('.demand').removeClass('animated tada');
    $hand
      .fadeIn(1000, function() {
        $hand
          .transition(ht.set, 1000)
          .transition(ht.move.left, 400, function () {
            Presentation.next();
          })
          .delay(2000)
          .transition(ht.move.back, 1000, 'ease')
          .delay(2000)
          .transition(ht.move.left, 400, function () {
            Presentation.next();
          })
          .delay(2000)
          .transition(ht.move.right, 200, function () {
            Presentation.previous();
          })
          .delay(2000)
          .transition(ht.move.left, 200, function () {
            Presentation.next();
          })
          .delay(2000)
          .transition(ht.move.back, 1000, 'ease')
          .delay(2000)
          .transition(ht.move.left, 400, function () {
            Presentation.next();
          })
          .delay(2000)
          .transition(ht.move.back, 1000, 'ease')
          .transition(ht.reset, 1000, function() {
            Presentation.reset();
            $el.text('View Online Demo');
            $el.removeClass('active disabled');
            $hand.fadeOut();
            $cardinal.css({
              'background-color':'#fc888a'
            }, 800);
            $('.demand').addClass('animated tada');
          })
        ;
    });
  };

  $('.cta .try').click(function (ev) {
    if (!$(this).hasClass('active')){
      $(this).addClass('active disabled'); 
      $(this).text('• • •');
      ev.preventDefault();
      present($(this));
    }
  });

  $('.stellar-quote').addClass('animated fadeInUp');
  
  Slide.set();
  Presentation.switchOn();

  $(window).resize(function () {
    Slide.set();
    
    // preload images
    Presentation.slides.forEach(function(slide) {
      (new Image()).src = slide.src;
    });

  });

});