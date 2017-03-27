odoo.debug = true;

odoo.define('website_sale_criteria.widget', function (require) {
  'use strict';
  var ajax = require('web.ajax');
  var Widget = require('web.Widget');
  var core = require('web.core');
  var qweb = core.qweb;
  require('website.website');

  var WebsiteSaleCriteria = Widget.extend({
    init: function () {
    },
    start: function () {
      this.action_select();
    },
    action_select: function () {
      var show_texture =  function (image) {
          var valueImg = image.attr('src');
          var preview = $('#variant-preview');
          preview.find('img:first').attr('src', valueImg);
      };
      $('.variant-value').on('click', function (e) {
        // e.stopImmediatePropagation();
        var input = $(this).find('input:radio');
        if (input.is(":checked")) {
          input.removeProp("checked");
        } else {
          input.prop("checked", true);
        }
        var image = $(this).find('img:first');
        if (image.length > 0) {
          show_texture(image);
          var preview = $('#variant-preview');
          preview.show();
        }
        // $(this).toggleClass('active').siblings().removeClass('active');
      }).on('mouseover', function (e) {
        var image = $(this).find('img:first');
        if (image.length > 0) {
          var preview = $('#variant-preview');
          preview.hide().delay(200).show();
          show_texture(image);
        }
      }).on('mouseleave', function (e) {
        var image = $(this).find('img:first');
        if (image.length > 0) {
          var preview = $('#variant-preview');
          preview.show().delay(3000).hide();
        }
      });
    },
  });

  return WebsiteSaleCriteria;
});

odoo.define('website_sale_criteria', function (require) {
  'use strict';
  var WebsiteSaleCriteria = require('website_sale_criteria.widget');
  var widget = new WebsiteSaleCriteria();
  widget.start();
});
