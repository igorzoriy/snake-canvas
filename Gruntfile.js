'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all: ['js/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']);
};
