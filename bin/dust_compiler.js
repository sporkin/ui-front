var input_path = __dirname + "/../app/assets/templates/";
var output_path = __dirname + "/../public/templates/";

var fs = require('fs');
var dust = require('dustjs-linkedin');
var watch = require('watch');

function compile_dust(path, curr, prev) {
  fs.readFile(path, function(err, data) {
    if (err) throw err;

    var filename = path.split("/").reverse()[0].replace(".dust", "");
    var filepath = output_path + filename + ".js";
    var compiled = amdfier(dust.compile(new String(data), "templates/" + filename), "templates/" + filename);

    fs.writeFile(filepath, compiled, function(err) {
      if (err) throw err;
      console.log('Saved ' + filepath);
    });
  });
}
// 
// 
// define('templates/bar', ['dust'], function(dust) {
//   (function() {
//     dust.register("templates/bar", body_0);
// 
//     function body_0(chk, ctx) {
//       return chk.write("<h1>").reference(ctx.get("name"), ctx, "h").write("</h1>");
//     }
//     return body_0;
//   })();
// })
// 
// define(['dust'], function(dust) {
//   (function() {
//     dust.register("baz", body_0);
// 
//     function body_0(chk, ctx) {
//       return chk.write("<b>").reference(ctx.get("name"), ctx, "h").write("</b>");
//     }
//     return body_0;
//   })();
//   return {
//     render: function(context, callback) {
//       return dust.render('baz', context, callback)
//     }
//   }
// })
// 


function amdfier(source, amdName) {
  return "define('" + amdName + "', ['dust'],function(dust){" + source + " })";
}

function remove_compiled_dust(path, stat) {
  var filename = path.split("/").reverse()[0].replace(".dust", "");
  var filepath = output_path + filename + ".js";
  fs.unlink(filepath, function (err) {
    console.log('successfully deleted', filepath);
  });
}

watch.createMonitor(input_path, function (monitor) {
  console.log("Watching " + input_path);
  monitor.files['*.dust', '*/*'];
  monitor.on("created", compile_dust);
  monitor.on("changed", compile_dust);
  monitor.on("removed", remove_compiled_dust);
});