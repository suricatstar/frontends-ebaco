const { option } = require("grunt");

module.exports = function(grunt) { 
    grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
       less: {
            development: {
                files: {
                    'main.css' : "main.less"
                }
            },
            production: {
                files: {
                    'main.min.css' : "main.less"
                },
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                }
            }
       },
       sass: {
            dist: {
                option: {
                    style: 'compressed'
                },
                files: {
                    'main2.css' : 'main.scss'
                }
            }
       }
    })

    grunt.registerTask('olaGrunt', function() {
        const done = this.async();
        setTimeout(function() {
            console.log('Hello World');
            done();
        }, 3000);
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['less', 'sass']);
}