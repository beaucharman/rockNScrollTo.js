/**
 * rockNScrollTo.js
 * ========================================================================
 * jquery.rockNScrollTo.js
 * @version   2.0 | 30 June 2013
 * @author    Beau Charman | @beaucharman | http://www.beaucharman.me
 * @link      https://github.com/beaucharman/rockNScrollTo.js
 * @license   MIT license
 * @param     {object} options
 *              {integer}  offset
 *              {integer}  speed
 *              {string}   easing
 *              {function} callback
 *
 * Scroll from the currrent window state to a given element's top offest
 * ======================================================================== */
;(function ($) {
  'use strict';

  $.fn.rockNScrollTo = function (options) {

    var settings = $.extend({
      'offset': 0,
      'speed': 400,
      'easing': 'swing',
      'callback': null
    }, options);

    return this.each(function () {
      $('html, body').animate({
        scrollTop: $(this).offset().top - settings.offset
      }, settings.speed, settings.easing, settings.callback);
    });
  };
})(jQuery);
