module.exports = function(grunt) {
	grunt.initConfig({
		coffee: {
			scripts: {
				expand: true,
				flatten: true,
				cwd: 'coffee/',
				src: ['*.coffee'],
				dest: 'js/',
				ext: '.js'
			}
		},
		watch: {
			options: {
				livereload: true
			},
			scripts: {
				files: ['coffee/*.coffee'],
				tasks: ['newer:coffee']
			}
		},
		concat: {
			dist: {
				src: ['js/*.js'],
				dest: 'dist/js/all.js'
			}
		},
		uglify: {
			dist: {
				options: {
					banner: '/* Yo! Created by Oles Gergun */'
				},
				files: {
					'dist/js/all.min.js' : ['dist/js/all.js']
				}
			}
		},
		less: {
			production: {
			    options: {
			      paths: ["style/"],
			      plugins: [
				      new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})
			      ]
			    },
			    files: {
			      "style/css/style.css": "style/less/style.less"
				},
  			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-less');	

	grunt.registerTask('default', ['coffee', 'less', 'concat', 'uglify', 'watch'])
}


