var input_path = __dirname + "/../app/assets/templates/";
var output_path = __dirname + "/../public/templates/";

var fs = require('fs');
var dust = require('dustjs-linkedin');
var watch = require('watch');

function compile_dust(path, curr, prev) {
  fs.readFile(path, function(err, data) {
    if (err) throw err;

    var filename = path.split("/").reverse()[0].replace(".dust", "");
    var paths = path.split("/").reverse();
    var _path_prefix = "/Users/juhyeong/projects/sporkin.it/ui-front/public/";
    var _path = "templates";

    while(1) {
      var e = paths.pop();
      if(e == 'templates'){
        break;
      }
    }

    function buildPath(l){
      if(l.length !== 1){
        e = l.pop();
        _path = _path + "/" + e;
        fs.mkdir(_path_prefix + _path);
        buildPath(l);
      }
    }

    buildPath(paths);
    var dustRefName = _path + "/" + filename;
    var compiled = amdfier(dust.compile(new String(data), dustRefName), dustRefName);

    fs.writeFile(_path_prefix + dustRefName + ".js", compiled, function(err) {
      if (err) throw err;
      console.log('Saved ' + dustRefName);
    });
  });
}

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
