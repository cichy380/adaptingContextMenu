/**
 * Adapting Context Menu
 *
 * jQuery plugin based on https://addyosmani.com/resources/essentialjsdesignpatterns/book/#jquerypluginpatterns
 */
;(function ($, window, document, undefined) {
  'use strict';

  let pluginName = 'adaptingContextMenu',

    defaults = {
      id: 'adapting-context-menu',
      class: '',
      items: [],
    };

  function Plugin(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);
    this.init();
  }

  Plugin.prototype.init = function () {
    let $element = $(this.element);

    try {
      // mouse, right click event
      $element.on('contextmenu', (event) => {
        event.preventDefault(); // stop open default context menu
      });
    }
    catch (error) {
      window.console && console.warn(`ERROR of .${pluginName}() plugin. ${error}`);
    }
  };

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, `plugin_${pluginName}`)) {
        $.data(this, `plugin_${pluginName}`,
          new Plugin(this, options));
      }
    });
  };

})(window.jQuery, window, document);
