module.exports = function(grunt) {

  // project configuration
  grunt.initConfig({

    clean: ["assets/"],

    concat: {
      css: {
        src: ["assets/css/*"],
        dest: "assets/css/main.css",
      },
      js: {
        src: ["source/assets/js/**/*", "source/assets/js/*"],
        dest: "assets/js/main.js"
      }
    },

    cssmin: {
      dist: {
        "assets/css/main.min.css": ["assets/css/main.css"]
      }
    },

    uglify: {
      dist: {
        files: {
          "assets/js/main.min.js": ["assets/js/main.js"]
        }
      }
    },
    
    sass: {
      assets: {
        files: [{
          expand: true,
          cwd: "source/assets/sass",
          src: ["*.scss", "*.sass"],
          dest: "assets/css",
          ext: ".css"
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true,
        },
        files: {
          "index.html": "source/assets/index.html"
        }
      }
    },

    watch: {
      scripts: {
        files: ["source/assets/**"],
        tasks: ["dist"],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  
  grunt.registerTask("dist", ["clean", "sass", "concat", "uglify", "htmlmin"]);
  grunt.registerTask("default", ["dist", "watch"]);
};