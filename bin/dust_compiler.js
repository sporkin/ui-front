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
    var compiled = dust.compile(new String(data), filename);

    fs.writeFile(filepath, compiled, function(err) {
      if (err) throw err;
      console.log('Saved ' + filepath);
    });
  });
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
})