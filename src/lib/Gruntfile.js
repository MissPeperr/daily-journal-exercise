module.exports = function (grunt) {
   grunt.initConfig({
      browserify: {
         js: {
            src: ["../scripts/main.js"],
            dest: "../../dist/app.js"
         },
         options: {
            browserifyOptions: {
               paths: [
                  "./node_modules"
               ]
            }
         }
      },
      watch: {
         js: {
            files: ["../scripts/**/*.js"],
            tasks: ["browserify"]
         },
         browserify: {
            files: ["../scripts/*.js"],
            tasks: ["browserify"]
         }
      }
   });

   require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
   grunt.registerTask("default", ["browserify", "watch"]);
};
