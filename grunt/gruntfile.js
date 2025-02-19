module.exports = function(grunt) { 
    grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
    })

    grunt.registerTask('olaGrunt', function() {
        const done = this.async();
        setTimeout(function() {
            console.log('Hello World');
            done();
        }, 3000);
    })

    grunt.registerTask('olaGrunt2', ['olaGrunt', 'olaGrunt', 'olaGrunt']);
}