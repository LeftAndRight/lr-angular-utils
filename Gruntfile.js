module.exports = function(grunt) {

	grunt.initConfig({
		concat: {
			main: {
				src: [
					"src/abstract-model.js"
				],
				dest: "dist/lr-angular-utils.js"
			}
		},

		uglify: {
			main: {
				options: {
					mangle: false
				},
				files: [{
					src: "dist/lr-angular-utils.js",
					dest: "dist/lr-angular-utils.min.js"
				}]
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
						"dist/lr-angular-utils.min.js",
						"test/*-test.js"
					],
					basePath	: "",
					frameworks	: ["jasmine"],
					reporters	: ["spec"],
					logLevel	: "INFO",
					autoWatch	: true,
					browsers	: ["PhantomJS"],
					singleRun	: true
				}
			}
		}
	});

	require("load-grunt-tasks")(grunt);

	grunt.registerTask("default", ["concat", "uglify", "karma"]);
};