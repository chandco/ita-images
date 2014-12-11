


module.exports = function(grunt) {

    grunt.initConfig({
	  responsive_images: {
	    myTask: {
	      options: {
	      	engine : 'im',
	        sizes: [{
	          rename: false,
	          width: 320,
	          height: 240
	        }]
	      },
	      files: [{
	        expand: true,
	        src: ['img/**/*.{jpg,gif,png}'],
	        dest: 'thumbnails/'
	      }]
	    }
	  },
	})    
	      

  // Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-responsive-images');

	grunt.registerTask('default', ['responsive_images']);


};