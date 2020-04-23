// vue.js
new Vue ({
    el: '#app', 
    data: {
      active: false,
      navi: false,
    },
    methods: {
      naviOpen: function() {
        this.active = !this.active;
        this.navi = !this.navi;                                                                                                                                                                 
      } 
    }
  })
// vue.jsおわり

//jquery
$(function(){
  $(window).scroll(function (){
      $('.fadfad').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 150){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
          }
      });
  });
});

$(function(){
  $(window).scroll(function (){
      $('#tolink1').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 150){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
          }
      });
  });
});

  //jqueryおわり
