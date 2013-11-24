'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all: ['js/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        qunit: {
            all: ['js/tests/*.html']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');

    grunt.registerTask('default', ['jshint', 'qunit']);
};
