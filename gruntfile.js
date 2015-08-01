module.exports = function(grunt) {
         grunt.initConfig({
             watch: {
                files: ['less/**/*.less'],
                tasks: ["less:standard", "less:dark", "less:blue"]
             },
             less: {
                 standard: {
                     options: {
                         paths: ["less"],
                         strictMath: true,
                         sourceMap: true,
                         outputSourceFiles: true,
                         sourceMapURL: 'materialcraft.css.map',
                         sourceMapFilename: 'materialcraft.css.map'
                     },
                     files: {"materialcraft.css": "less/materialcraft.less"}
                 },
                 dark: {
                     options: {
                         paths: ["less"],
                         strictMath: true,
                         sourceMap: true,
                         outputSourceFiles: true,
                         sourceMapURL: 'dark/materialcraft_dark.css.map',
                         sourceMapFilename: 'dark/materialcraft_dark.css.map'
                     },
                     files: {"dark/materialcraft_dark.css": "less/materialcraft_dark.less"}
                 },
                 blue: {
                     options: {
                         paths: ["less"],
                         strictMath: true,
                         sourceMap: true,
                         outputSourceFiles: true,
                         sourceMapURL: 'blue/materialcraft_blue.css.map',
                         sourceMapFilename: 'blue/materialcraft_blue.css.map'
                     },
                     files: {"blue/materialcraft_blue.css": "less/materialcraft_blue.less"}
                 }
             }
         });
         grunt.loadNpmTasks('grunt-contrib-less');
         grunt.loadNpmTasks('grunt-contrib-watch');
         grunt.registerTask('default', ['watch']);
     };
