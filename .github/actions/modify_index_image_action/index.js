const core = require("@actions/core");
const fs = require("fs");
var filePath = "./index.html";

const randomPosition = Math.floor(Math.random() * 4) + 1;
const gifs_alternative = core.getInput("gifs_alternative_" + randomPosition);

try {
  fs.readFile(filePath, "utf8", function (err, data) {
    var gifUrl = gifs_alternative;
    var result = data.replace(/src=.* alt/, 'src="' + gifUrl + '" alt');
    fs.writeFile(filePath, result, "utf8", function (err) {
      if (err) return console.log(err);
    });
  });
} catch (error) {
  core.setFailed(error.message);
}

core.setOutput("response", "Loader modificado");
