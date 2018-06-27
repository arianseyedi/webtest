'use strict';

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/style.css': 'css/style.scss'
        }
      }
    },
    watch: {
      files: 'css/*.scss',
      tasks: ['sass']
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'css/*.css',
            '*.html',
            'js/*.js'
          ]
        },
        options: {
          watchTasks: true,
          server: {
            baseDir: './'
          }
        }
      }
    }
  });

  grunt.registerTask('css', ['sass']); //not working
  grunt.registerTask('default', ['browserSync', 'watch']);
};
