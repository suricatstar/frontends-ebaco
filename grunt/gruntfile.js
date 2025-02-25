const { option } = require("grunt");

module.exports = function(grunt) { 
    grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
       less: {
            development: {
                files: {
                    'dev/styles/main.css' : "src/styles/main.less"
                }
            },
            production: {
                files: {
                    'dist/styles/main.min.css' : "src/styles/main.less"
                },
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                }
            }
       },
         watch: {
              styles: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development'],
                
              }
         },
    //    sass: {
    //         dist: {
    //             option: {
    //                 style: 'compressed'
    //             },
    //             files: {
    //                 'main2.css' : 'main.scss'
    //             }
    //         }
    //    },
    //    concurrent: {
    //           target: ['olaGrunt','less', 'sass']
    //    }
    })

    // grunt.registerTask('olaGrunt', function() {
    //     const done = this.async();
    //     setTimeout(function() {
    //         console.log('Hello World');
    //         done();
    //     }, 3000);
    // })
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-sass');
    // grunt.loadNpmTasks('grunt-concurrent');

    // grunt.registerTask('default', ['concurrent']);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production']);
}