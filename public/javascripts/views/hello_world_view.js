(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['views/base/view', 'templates/hello_world'], function(View, template) {
    'use strict';

    var HelloWorldView;
    return HelloWorldView = (function(_super) {

      __extends(HelloWorldView, _super);

      function HelloWorldView() {
        return HelloWorldView.__super__.constructor.apply(this, arguments);
      }

      HelloWorldView.prototype.template = "templates/hello_world";

      HelloWorldView.prototype.className = 'hello-world';

      HelloWorldView.prototype.container = '#page-container';

      HelloWorldView.prototype.autoRender = true;

      return HelloWorldView;

    })(View);
  });

}).call(this);
