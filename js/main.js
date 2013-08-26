!function ($) {
  var $win = $(window)
    , $nav = $('.subnav')
    , navTop = $('.subnav').length && $('.subnav').offset().top - 40
    , isFixed = 0
    , workflowButtons = $('#workflow-toggles button')
    , workflowDetails = $('.workflow-steps');

  processScroll()

  // hack sad times - holdover until rewrite for 2.1
  /*
  $nav.on('click', function () {
    if (!isFixed) {
      console.log("not fixed")
      //setTimeout(function () { $win.scrollTop($win.scrollTop() - 147) }, 10)
    } else {
      console.log("fixed")

      //setTimeout(function () { $win.scrollTop($win.scrollTop() - 87) }, 10)
    }
  })
  */

  $win.on('scroll', processScroll)

  function processScroll() {
    var i, scrollTop = $win.scrollTop()
    if (scrollTop >= navTop && !isFixed) {
      isFixed = 1
      $nav.addClass('subnav-fixed')
    } else if (scrollTop <= navTop && isFixed) {
      isFixed = 0
      $nav.removeClass('subnav-fixed')
    }
  }

  function doCodeHighlight(el) {
    names = $(el).attr('class').split(" ");
    names.shift()
    $('span.' + names.join(', span.')).toggleClass('hilight')
  }

  $('.config .hi').mouseover(function(){
    doCodeHighlight(this)
  }).mouseout(function(){
    doCodeHighlight(this)
  })

  $(workflowButtons).click(function() {
    $(workflowButtons).removeClass('active');
    $(this).addClass('active');
    var type = $(this).attr('data-type');
    $(workflowDetails).hide();
    $('div[data-type=' + type + ']').show()
  });

}(window.jQuery)