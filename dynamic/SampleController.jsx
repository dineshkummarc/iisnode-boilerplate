var
fs = require("fs"),
path = require("path"),
cp = require("child_process"),
express = require("express"),
app = express.createServer();

exports.SampleController = function (app, express) {
	app.all("/", function (req, res) {
		res.send("Hello. <br/> <h1>World!</h1>");
	});
}
