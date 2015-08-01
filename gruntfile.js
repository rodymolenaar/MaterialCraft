module.exports = function(grunt) {
         grunt.initConfig({
             watch: {
                files: ['less/**/*.less'],
                tasks: ["less:standard", "less:dark"]
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
                 }
             }
         });
         grunt.loadNpmTasks('grunt-contrib-less');
         grunt.loadNpmTasks('grunt-contrib-watch');
         grunt.registerTask('default', ['watch']);
     };
