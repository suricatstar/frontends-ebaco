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
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development'],
            
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev']
            }
        },
         replace:{
            dev:{
                options:{
                    patterns:[
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: '../src/scripts/main.js'
                        }
                    ]
                },
                files:[
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            },
            dist:{
                options:{
                    patterns:[
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: './scripts/main.min.js'
                        }
                    ]
                },
                files:[
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin:{
            dist:{
                options:{
                    removeComments: true,
                    collapseWhitespace: true
                },
                files:{
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },
        clean:['prebuild'],
        uglify:{
            target:{
                files:{
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }

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
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-sass');
    // grunt.loadNpmTasks('grunt-concurrent');

    // grunt.registerTask('default', ['concurrent']);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('dev', ['less:development', 'replace:dev']);
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'clean', 'uglify']);
}