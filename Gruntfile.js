module.exports = function(grunt) {

    // Project configuration. each grunt plugin's config is set here.
    grunt.initConfig({
        'uglify': {
            'dist/skeleton.min.js': []
        },
        'eslint':{
            'target': []
        }

    });

    // grunt.loadNpmTasks will load in the plugin module to run
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-eslint');

    // Default task. This task will run when calling "grunt" from the CLI.
    grunt.registerTask('default', ['eslint','uglify']);

    // Custom tasks. These tasks will run when calling "grunt <task name>" from the CLI.
    //grunt.registerTask('test', []);

};