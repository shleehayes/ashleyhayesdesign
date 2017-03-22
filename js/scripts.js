$(document).ready(function(){

var Menu = {

el: {
  ham: $('.menu'),
  menuTop: $('.menu-top'),
  menuMiddle: $('.menu-middle'),
  menuBottom: $('.menu-bottom')
},

init: function() {
  Menu.bindUIactions();
},

bindUIactions: function() {
  Menu.el.ham
      .on(
        'click',
      function(event) {
      Menu.activateMenu(event);
      event.preventDefault();
    }
  );
},

activateMenu: function() {
  Menu.el.menuTop.toggleClass('menu-top-click');
  Menu.el.menuMiddle.toggleClass('menu-middle-click');
  Menu.el.menuBottom.toggleClass('menu-bottom-click');
}
};

Menu.init();

  $(".menu").click(function(){
      $("nav.nav_closed").toggleClass("nav_open");
  });
  $("nav ul li a").click(function(){
      $("nav.nav_open").removeClass("nav_open");
  });

  $('.menu-collapse>ul>li>a').click(function() {
	  $('.menu-collapse').collapse('hide');
  });
});