const sass = require('node-sass');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourcemap: false,
        outputStyle: "expanded",
      },
      test: {
        files: [
          {
            src: "src/scss/style.scss",
            dest: "dest/css/style.css",
          }
        ]
      },
    },
    postcss: {
      options: {
        processors: [
          postcssPresetEnv({
            stage: 0,
            autoprefixer: {
              grid: true,
            },
            importFrom: "src/css/test.css",
          }),
        ],
      },
      dist: {
        src: "dest/css/style.css",
      },
    },
    clean: {
      css: {
        src: "dest/css/style.css",
      },
    },
  });

  // Load the plugins to run your tasks
  require("load-grunt-tasks")(grunt, {
    scope: "devDependencies"
  });

  // Default task(s).
  grunt.registerTask("default", [
    "clean",
    "sass",
    "postcss",
  ]);
}