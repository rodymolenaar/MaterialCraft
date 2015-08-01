module.exports = function(grunt) {
         grunt.initConfig({
             watch: {
                files: ['less/**/*.less'],
                tasks: ["less:standard", "less:dark", "less:blue", "less:red"]
             },
             compress: {
              main: {
                options: {
                  archive: 'materialcraft.zip'
                },
                src: ['**/*'],
                cwd: 'dist/',
                expand: true
              }
             },
             less: {
                 standard: {
                     options: {
                         paths: ["less"],
                         strictMath: true,
                         sourceMap: true,
                         outputSourceFiles: true,
                         sourceMapURL: 'dist/materialcraft.css.map',
                         sourceMapFilename: 'dist/materialcraft.css.map'
                     },
                     files: {"dist/materialcraft.css": "less/materialcraft.less"}
                 },
                 dark: {
                     options: {
                         paths: ["less"],
                         strictMath: true,
                         sourceMap: true,
                         outputSourceFiles: true,
                         sourceMapURL: 'dist/dark/materialcraft_dark.css.map',
                         sourceMapFilename: 'dist/dark/materialcraft_dark.css.map'
                     },
                     files: {"dist/dark/materialcraft_dark.css": "less/materialcraft_dark.less"}
                 },
                 blue: {
                     options: {
                         paths: ["less"],
                         strictMath: true,
                         sourceMap: true,
                         outputSourceFiles: true,
                         sourceMapURL: 'dist/blue/materialcraft_blue.css.map',
                         sourceMapFilename: 'dist/blue/materialcraft_blue.css.map'
                     },
                     files: {"dist/blue/materialcraft_blue.css": "less/materialcraft_blue.less"}
                 },
                 red: {
                     options: {
                         paths: ["less"],
                         strictMath: true,
                         sourceMap: true,
                         outputSourceFiles: true,
                         sourceMapURL: 'dist/red/materialcraft_red.css.map',
                         sourceMapFilename: 'dist/red/materialcraft_red.css.map'
                     },
                     files: {"dist/red/materialcraft_red.css": "less/materialcraft_red.less"}
                 }
             }
         });
         grunt.loadNpmTasks('grunt-contrib-less');
         grunt.loadNpmTasks('grunt-contrib-watch');
         grunt.loadNpmTasks('grunt-contrib-compress');
         grunt.registerTask('default', ['watch']);
     };
