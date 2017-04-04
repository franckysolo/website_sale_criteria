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
      $('#accordion').find('ul').each(function (){
        if ($(this).find('li').length === 1) {
           $(this).find('input:radio').trigger('change');
        }
      });
    },
    start: function () {
      // selector
      this.select_change();
      // color and texture
      this.variant_click();
      // input radio
      this.radio_click();
    },
    variant_click: function () {
      var self = this;
      $('.variant-value').on('click', function (e) {
        var input = $(this).find('input:radio');
        if (input) {
          input.trigger('change');
          if (!input.is(":checked")) {
            input.prop("checked", true);
            var image = $(this).find('img:first');
            var panel = input.closest('.panel-collapse');
            var name = panel.prev().find('strong').html();
            if (image.length > 0) {
              var src = image.attr('src');
              self.display_texture(name, src);
            } else { // color
              var value = input.parent().find('span:eq(1)').html();
              $('.color-preview').each(function(index, item) {
                var current = $(item);
                self.display_text_preview(current, name, value);
              });
            }
            self.hide_panel(panel);
          }
        }
      }).on('mouseover', function (e) {
        var input = $(this).find('input:radio');
        var panel = input.closest('.panel-collapse');
        var name = panel.prev().find('strong').html();
        var image = $(this).find('img:first');
        if (image.length > 0) {
          var src = image.attr('src');
          self.display_texture(name, src);
        }
      });
    },
    hide_panel: function (panel) {
      if (panel.hasClass('in')) {
        panel.removeClass('in');
      }
    },
    display_texture: function (name, src) {
      $('.img-preview').each(function(index, item) {
        var current = $(item);
        if (current.attr('data-id') === name) {
          current.html('<h4>' + name + '</h4><img src="' + src + '"/>');
        }
      });
    },
    display_text_preview: function (current, name, value) {
      if (current.attr('data-id') === name) {
        current.html('<h4>' + name + '</h4><p>' + value + '</p>');
      }
    },
    radio_click: function () {
      var self = this;
      $('.control-radio').on('click', function (e) {
        var input = $(this).find('input:radio');
        if (input) {
          if (!input.is(":checked")) {
           var panel = input.closest('.panel-collapse');
           var value = input.parent().find('span:first').html();
           var name = panel.prev().find('strong').html();
           $('.text-preview').each(function(index, item) {
             var current = $(item);
             self.display_text_preview(current, name, value);
           });
           self.hide_panel(panel);
          }
        }
      });
    },
    select_change: function () {
      var self = this;
      $('.control-select').on('change', function (e) {
        var selected = $(this).val();
        var value = $(this).find('option:selected').html();
        var panel = $(this).closest('.panel-collapse');
        var name = panel.prev().find('strong').html();
        $('.text-preview').each(function(index, item) {
          var current = $(item);
          self.display_text_preview(current, name, value);
        });
        self.hide_panel(panel);
      });
    }
  });

  return WebsiteSaleCriteria;
});

odoo.define('website_sale_criteria', function (require) {
  'use strict';
  var WebsiteSaleCriteria = require('website_sale_criteria.widget');
  var widget = new WebsiteSaleCriteria();
  widget.start();
});
