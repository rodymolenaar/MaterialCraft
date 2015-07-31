module.exports = function(grunt) {
         grunt.initConfig({
             watch: {
                files: ['less/**/*.less'],
                tasks: ["less"]
             },
             less: {
                 development: {
                     options: {
                         paths: ["less"],
                         strictMath: true,
                         sourceMap: true,
                         outputSourceFiles: true,
                         sourceMapURL: 'materialcraft.css.map',
                         sourceMapFilename: 'materialcraft.css.map'
                     },
                     files: {"materialcraft.css": "less/materialcraft.less"}
                 }
             }
         });
         grunt.loadNpmTasks('grunt-contrib-less');
         grunt.loadNpmTasks('grunt-contrib-watch');
         grunt.registerTask('default', ['watch']);
     };
