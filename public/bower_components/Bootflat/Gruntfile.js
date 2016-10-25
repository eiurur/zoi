module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      options: {
          banner: '/*\n * <%= pkg.name %> <%= pkg.version %>\n' + 
			  	  ' *\n' +
				  ' * Description: <%= pkg.description %>\n' +
			  	  ' *\n' +
		          ' * Homepage: <%= pkg.homepage %>\n' +
			  	  ' *\n' +
				  ' * By @<%= pkg.author %>\n' +
				  ' *\n' +
			  	  ' * Last modify time: <%= grunt.template.today("yyyy-mm-dd") %>\n' +
				  ' *\n' +
			  	  ' * Licensed under the MIT license. Please see LICENSE for more information.\n' +
				  ' *\n' +
			  	  ' * Copyright 2013 FLATHEMES.\n' +
				  ' *\n' +
		          ' */\n',
          sourceMap: true,
          sourceMapIncludeSources: true
      },
      dist: {
        files: {
          'js/site.min.js': [
            'js/jquery-1.10.1.min.js',
            'js/bootstrap.min.js',
            'bootflat/js/icheck.min.js',
            'js/application.js'
          ]
        }
      }
    },
    cssmin: {
      options: {
          keepSpecialComments: 0,
          banner: '/*\n * <%= pkg.name %> <%= pkg.version %>\n' + 
			  	  ' *\n' +
				  ' * Description: <%= pkg.description %>\n' +
			  	  ' *\n' +
		          ' * Homepage: <%= pkg.homepage %>\n' +
			  	  ' *\n' +
				  ' * By @<%= pkg.author %>\n' +
				  ' *\n' +
			  	  ' * Last modify time: <%= grunt.template.today("yyyy-mm-dd") %>\n' +
				  ' *\n' +
			  	  ' * Licensed under the MIT license. Please see LICENSE for more information.\n' +
				  ' *\n' +
			  	  ' * Copyright 2013 FLATHEMES.\n' +
				  ' *\n' +
		          ' */\n',
      },
      dist: {
        files: {
          'css/site.min.css': [
            'css/bootstrap.min.css',
            'bootflat/css/bootflat.css',
            'css/site.css'
          ],
          'bootflat/css/bootflat.min.css': 'bootflat/css/bootflat.css'
        }
      }
    },
    sass: {
      dist: {
        files: {
          'bootflat/css/bootflat.css': 'bootflat/scss/bootflat.scss'
        },
        options: {
          banner: '/*\n * <%= pkg.name %> <%= pkg.version %>\n' + 
			  	  ' *\n' +
				  ' * Description: <%= pkg.description %>\n' +
			  	  ' *\n' +
		          ' * Homepage: <%= pkg.homepage %>\n' +
			  	  ' *\n' +
				  ' * By @<%= pkg.author %>\n' +
				  ' *\n' +
			  	  ' * Last modify time: <%= grunt.template.today("yyyy-mm-dd") %>\n' +
				  ' *\n' +
			  	  ' * Licensed under the MIT license. Please see LICENSE for more information.\n' +
				  ' *\n' +
			  	  ' * Copyright 2013 FLATHEMES.\n' +
				  ' *\n' +
		          ' */\n',
          style: 'expanded',
          sourcemap: 'true'
        }
      }
    },
    pkg: grunt.file.readJSON('package.json')
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', [
    'sass',
    'cssmin',
    'uglify'
  ]);
};
