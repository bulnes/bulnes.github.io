module.exports = function(grunt) {

  grunt.initConfig({

    clean: ['assets/', 'index.html'],

    concat: {
      js: {
        src: ['source/assets/js/**/*'],
        dest: 'assets/js/main.min.js'
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
        },
        files: {
          'index.html': 'source/index.html'
        }
      },
      dev: {
        files: {
          'index.html': 'source/index.html'
        }
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'source/assets/images',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/images'
        }]
      }
    },

    sass: {
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
          'assets/css/main.min.css': 'source/assets/sass/main.scss'
        },
      },
      dist: {
        options: {
          style: 'compressed',
        },
        files: {
          'assets/css/main.min.css': 'source/assets/sass/main.scss'
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'assets/js/main.min.js': ['assets/js/main.min.js']
        }
      }
    },

    watch: {
      dev: {
        files: ['source/**/*'],
        tasks: ['dev']
      },
      dist: {
        files: ['source/**/*'],
        tasks: ['dist']
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('dev', ['clean', 'sass:dev', 'concat:js', 'htmlmin:dev', 'imagemin', 'watch:dev']);
  grunt.registerTask('dist', ['clean', 'sass:dist', 'concat:js', 'htmlmin:dist', 'imagemin', 'uglify:dist', 'watch:dist']);
  grunt.registerTask('default', ['dist']);
};