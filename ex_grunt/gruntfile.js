module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': "dev/styles/main.less"
                }
            },
            production: {
                files: {
                    'dist/styles/main.min.css': "dev/styles/main.less"
                },
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                }
            }
        },
        uglify: {
            production: {
                files: {
                    'dist/scripts/main.min.js': 'dev/scripts/main.js'
                }
            }
        },
        watch:{
            less:{
                files:['dev/styles/**/*.less'],
                tasks:['less:development']
            },
            
        }
        
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less:development', 'watch']);
    grunt.registerTask('build', ['less:production', 'uglify:production']);
}