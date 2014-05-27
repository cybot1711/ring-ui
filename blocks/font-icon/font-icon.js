define(['jquery', 'support/support'], function($, support) {
  // Windows non-webkit png sprite fallback
  var computedStyles = window.getComputedStyle && window.getComputedStyle(document.documentElement, '');
  var webkitFontSmoothing = computedStyles && 'webkitFontSmoothing' in computedStyles;
  var windows = !!window.navigator.platform.match(/win/i);

  if (windows && !webkitFontSmoothing) {
    $('html').addClass('no-font-antialiasing');
  }

  // IE7- generated content polyfill
  var IEVersion = support.getIEVersion();

  if (!IEVersion || IEVersion > 7) {
    return;
  }

  // Icons w/ png fallback are commented out
  var icons = {
    'ring-font-icon_like': '&#xe61e',
    'ring-font-icon_fork': '&#xe61f',
    'ring-font-icon_folder': '&#xe620',
    'ring-font-icon_file': '&#xe621',
    'ring-font-icon_comment': '&#xe622',
    'ring-font-icon_frown': '&#xe60c',
    'ring-font-icon_authmodule': '&#xe602',
    'ring-font-icon_user': '&#xe61b',
    'ring-font-icon_service': '&#xe61c',
    'ring-font-icon_space': '&#xe61d',
    'ring-font-icon_usability': '&#xe611',
    'ring-font-icon_task': '&#xe612',
    'ring-font-icon_security': '&#xe613',
    'ring-font-icon_perfomance': '&#xe614',
    'ring-font-icon_meta': '&#xe615',
    'ring-font-icon_bug': '&#xe616',
    'ring-font-icon_auto-report': '&#xe617',
    'ring-font-icon_feature': '&#xe618',
    'ring-font-icon_exception': '&#xe619',
    'ring-font-icon_cosmetics': '&#xe61a',
    'ring-font-icon_expand': '&#xe610',
    'ring-font-icon_collapse': '&#xe60f',
    'ring-font-icon_permission': '&#xe015',
    'ring-font-icon_group': '&#xe014',
    'ring-font-icon_jabber': '&#xe00b',
    'ring-font-icon_resource': '&#xe011',
    'ring-font-icon_email': '&#xe012',
    'ring-font-icon_global': '&#xe013',
    'ring-font-icon_trash': '&#xe010',
    'ring-font-icon_drag': '&#xe00f',
    'ring-font-icon_close': '&#xe00e',
    'ring-font-icon_merge_icon': '&#xe00d',
    'ring-font-icon_role': '&#xe00a',
    'ring-font-icon_add': '&#xe008',
    'ring-font-icon_check': '&#xe005',
    'ring-font-icon_renamed': '&#xe004',
    'ring-font-icon_removed': '&#xe003',
    'ring-font-icon_modified': '&#xe002',
    'ring-font-icon_added': '&#xe006',
    'ring-font-icon_warning': '&#xe60e',
//    'ring-font-icon_help': '&#xe60d',
//    'ring-font-icon_search': '&#xe600',
    'ring-font-icon_ok': '&#xe601',
    'ring-font-icon_cog': '&#xe603',
    'ring-font-icon_download': '&#xe623',
    'ring-font-icon_refresh': '&#xe604',
    'ring-font-icon_print': '&#xe624',
    'ring-font-icon_pencil': '&#xe605',
    'ring-font-icon_chevron-left': '&#xe606',
    'ring-font-icon_chevron-right': '&#xe607',
//    'ring-font-icon_ban-circle': '&#xe608',
    'ring-font-icon_pushpin': '&#xe609',
    'ring-font-icon_caret-down': '&#xe60a',
    'ring-font-icon_caret-up': '&#xe60b',
    'ring-font-icon_caret-left': '&#xe625',
    'ring-font-icon_caret-right': '&#xe626'
  };

  var Module = require('global/global__modules');
  var events = [
    'header:init:done',
    'menu:init:done',
    'footer:init:done',
    'header:update:done',
    'menu:update:done',
    'footer:update:done'
  ].join(' ');

  Module.get(Module.GLOBAL).on(events, function() {
    $('.ring-font-icon:not(:has(.ring-font-icon__before))').each(function(index, el) {
      var $el = $(el);
      var cls = $el.attr('class').match(/ring-font-icon_[^\s'"]+/);
      var icon = cls && icons[cls[0]];

      if (cls && icons[cls[0]]) {
        $el.prepend('<span class="ring-font-icon__before" style="font-family: \'font-icon\'">' + icon + '</span>');
      }
    });
  });
});