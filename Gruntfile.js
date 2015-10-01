module.exports = function(grunt) {

	grunt.initConfig({
		"file-creator": {
			global: {
				"dist/rootclass.js": function(fs, fd, done){
					var wrapper = grunt.file.read("src/Wrapper.js");
					var main	= grunt.file.read("src/RootClass.js");
					wrapper		= wrapper.replace("$RootClass$", main);
					fs.writeSync(fd, wrapper);
					done();
				}
			}
		},


		karma : {
			unit : {
				options :{
					// Build the list of files from the fileRegister and add some test files
					files: [
						"bower_components/angular/angular.js",
						"bower_components/angular-mocks/angular-mocks.js",
						"bower_components/rootclass/dist/rootclass-angular.js",
						"src/abstract-model.js",
						"test/abstract-model-test.js"
					],
					basePath	: "",
					frameworks	: ["jasmine"],
					reporters	: ["spec"],
					logLevel	: "INFO",
					autoWatch	: true,
					browsers	: ["PhantomJS"],
					singleRun	: false
				}
			}
		}
	});

	require("load-grunt-tasks")(grunt);

	grunt.registerTask("default", ["karma"]);
};