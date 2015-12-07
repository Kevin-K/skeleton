module.exports = function(grunt) {

    // Project configuration. each grunt plugin's config is set here.
    grunt.initConfig({
        'uglify': {
            'dist/skeleton.min.js': []
        }

    });

    // grunt.loadNpmTasks will load in the plugin module to run
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task. This task will run when calling "grunt" from the CLI.
    grunt.registerTask('default', ['uglify']);

    // Custom tasks. These tasks will run when calling "grunt <task name>" from the CLI.
    //grunt.registerTask('test', []);

};