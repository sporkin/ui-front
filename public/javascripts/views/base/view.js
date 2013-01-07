(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['dust', 'chaplin', 'lib/view_helper'], function(Handlebars, Chaplin) {
    'use strict';

    var View;
    return View = (function(_super) {

      __extends(View, _super);

      function View() {
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.render = function() {
        var templateFunc,
          _this = this;
        if (this.disposed) {
          return false;
        }
        templateFunc = this.getTemplateFunction();
        dust.render(this.template, this.getTemplateData(), function(err, out) {
          return _this.$el.empty().append(out);
        });
        if (!this.renderIsWrapped) {
          this.afterRender();
        }
        return this;
      };

      View.prototype.getTemplateFunction = function() {
        return this.template;
      };

      return View;

    })(Chaplin.View);
  });

}).call(this);
