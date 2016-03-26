###
  Gruntfile.coffee

###

module.exports = (grunt) ->

  require('time-grunt') grunt
  require('load-grunt-tasks') grunt

  grunt.initConfig
    clean:
      build: [
        'public/js/**'
        'public/css/**'
      ]

    jade:
      main:
        options:
          pretty: true
        files:
          'public/index.html': [
            'src/jade/index.jade'
          ]
          'public/shop.html': [
            'src/jade/shop.jade'
          ]

    wiredep:
      main:
        src: [
          'public/**/*.html'
        ]

    sass:
      main:
        files: [
          expand: true
          cwd: 'src/sass'
          src: [
            '*.scss'
          ]
          dest: 'public/css'
          ext: '.css'
        ]

    typescript:
      main:
        src: [
          'src/typescript/**/*.ts'
        ]
        dest: 'public/js/shop.js'
        options:
          module: 'amd'
          target: 'es5'
      test:
        src: [
          'test/spec/**/*.ts'
        ]
        dest: 'test/spec/specs.js'
        options:
          target: 'es5'

    coffee:
      compile:
        expand: true
        flatten: true
        src: [
          'src/coffeescript/**/*.coffee'
        ]
        dest: 'public/js/'
        ext: '.js'

    uglify:
      options:
        beautify: false
        mangle: true
      prod:
        files:
          'public/js/index.min.js': [
            'public/js/boot.js'
          ]
          'public/js/shop.min.js': [
            'public/js/boot.js'
            'public/js/shop.js'
          ]

    processhtml:
      prod:
        files:
          'public/index.html': [
            'public/index.html'
          ]
          'public/shop.html': [
            'public/shop.html'
          ]

    concat:
      prod:
        files:
          'public/css/index.min.css': [
            'public/css/imports.css'
            'public/lib/bootstrap/dist/css/bootstrap.min.css'
            'public/lib/bootstrap/dist/css/bootstrap-theme.min.css'
            'public/lib/font-awesome/css/font-awesome.min.css'
            'public/css/index.min.css'
          ]
          'public/js/index.min.js': [
            'public/lib/jquery/dist/jquery.min.js'
            'public/lib/bootstrap/dist/js/bootstrap.min.js'
            'public/js/index.min.js'
          ]
          'public/css/shop.min.css': [
            'public/css/imports.css'
            'public/lib/bootstrap/dist/css/bootstrap.min.css'
            'public/lib/bootstrap/dist/css/bootstrap-theme.min.css'
            'public/lib/font-awesome/css/font-awesome.min.css'
            'public/lib/AngularJS-Toaster/toaster.min.css'
            'public/css/shop.min.css'
          ]
          'public/js/shop.min.js': [
            'public/lib/jquery/dist/jquery.min.js'
            'public/lib/angular/angular.min.js'
            'public/lib/bootstrap/dist/js/bootstrap.min.js'
            'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js'
            'public/lib/angular-route/angular-route.min.js'
            'public/lib/angular-animate/angular-animate.min.js'
            'public/lib/angular-resource/angular-resource.min.js'
            'public/lib/AngularJS-Toaster/toaster.min.js'
            'public/js/shop.min.js'
          ]

    cssmin:
      prod:
        files:
          'public/css/index.min.css': [
            'public/css/index.css'
          ]
          'public/css/shop.min.css': [
            'public/css/shop.css'
          ]

    copy:
      prod:
        files: [
          expand: true
          cwd: 'public/lib'
          flatten: true
          src: [
            'bootstrap/fonts/*'
            'font-awesome/fonts/*'
          ]
          dest: 'public/fonts/'
        ]

    jasmine:
      main:
        src: 'public/js/shop.js'
        options:
          specs: 'test/spec/specs.js'
          vendor: [
            'public/lib/angular/angular.js'
            'public/lib/angular-route/angular-route.js'
            'public/lib/angular-animate/angular-animate.js'
            'public/lib/angular-resource/angular-resource.js'
            'public/lib/angular-bootstrap/ui-bootstrap.js'
            'public/lib/AngularJS-Toaster/toaster.js'
            'public/lib/angular-mocks/angular-mocks.js'
          ]
          keepRunner: true
          outfile: 'test/spec/result.html'

    protractor:
      options:
        output: 'test/e2e/result'
      e2e:
        configFile: 'test/e2e/conf.coffee'

    connect:
      server:
        options:
          port: 9001
          base: 'public'

    rsync:
      options:
        ssh: true
        port: 18765
        exclude: [
          '.git*'
          'node_modules'
          'Gruntfile'
          'README'
          '.bowerrc'
          '_SpecRunner.html'
          'bower.json'
          'package.json'
          'tsd.json'
          'test'
          'src'
          '.grunt'
          '.sass-cache'
        ]
        recursive: true
      uat:
        options:
          src: 'public/'
          dest: '~/public_html/koluki_uat'
          host: 'imcv1@imcv.org.au'
          delete: true
      prod:
        options:
          src: 'public/'
          dest: '~/public_html/koluki'
          host: 'imcv1@imcv.org.au'
          delete: true

    watch:
      jades:
        files: [
          'src/jade/**/*.jade'
        ]
        tasks: [
          'jade'
          'wiredep'
        ]
      sasses:
        files: [
          'src/sass/**/*.scss'
        ]
        tasks: [
          'sass'
        ]
      typescripts:
        files: [
          'src/typescript/**/*.ts'
        ]
        tasks: [
          'typescript:main'
        ]
      unitTests:
        files: [
          'test/spec/**/*.ts'
        ]
        tasks: [
          'typescript:test'
          'jasmine'
        ]
      e2eTests:
        files: [
          'test/e2e/scenarios.js'
        ]
        tasks: [
          'protractor'
        ]

    tsd:
      refresh:
        options:
          command: 'reinstall'
          latest: true
          config: 'tsd.json'

  grunt.registerTask 'build', [
    'clean'
    'jade'
    'wiredep'
    'sass'
    'typescript:main'
    'coffee'
  ]

  grunt.registerTask 'test:unit', [
    'build'
    'typescript:test'
    'jasmine'
  ]

  grunt.registerTask 'test:e2e', [
    'build'
    'typescript:test'
    'connect'
    'protractor'
  ]

  grunt.registerTask 'test', [
    'build'
    'typescript:test'
    'jasmine'
    'connect'
    'protractor'
  ]

  grunt.registerTask 'deploy:uat', [
    'build'
    'rsync:uat'
  ]

  grunt.registerTask 'deploy:prod', [
    'build'
    'cssmin'
    'uglify'
    'concat'
    'copy:prod'
    'processhtml:prod'
    'rsync:prod'
  ]

  grunt.registerTask 'default', [
    'build'
    'connect'
  ]