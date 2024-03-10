

const { src, dest, task, series } = require('gulp');
const rename = require('gulp-rename');
const replace = require('gulp-replace');

task("default", series(taskCopy))

function taskCopy() {

    return gulp.src('../LesliBuilder/engines/*/docs/*.md')
    .pipe(rename((file) => {
        const engineName = file.dirname.split('/')[4]; // Extract the ENGINE_NAME
        file.dirname = `lesli.dev/engines/${engineName}`;
    }))
    .pipe(gulp.dest('.'));

    // return src("../LesliBuilder/engines/**/docs/*.md",)
    // .pipe(dest('./source/engines/'));

    // return src([
    //     "../LesliBuilder/engines/**/docs/**"
    // ])
    // .pipe(rename(function (file) {
    //     // Extract the engine name from the file path
    //     var engineName = file.dirname.split("/")[2];

    //     if (engineName != "Lesli") {
    //         engineName = engineName.replace("Lesli","")
    //     }
        
    //     // Update the destination path
    //     file.dirname = `./source/engines/${engineName}`.toLowerCase();

    //   })).pipe(dest('.'));
}


function taskRename() {
    return src([
        "source/engines/babel/readme.md"
    ]).pipe(rename('index.md'))
    .pipe(dest(file => file.base));
}


function taskReplace() {
    return src([
        "source/engines/babel/index.md"
    ]).pipe(replace('src="./app/assets/images/lesli_babel/babel-logo.svg"','src="/images/engines/cloud-babel.svg"'))
    .pipe(dest(file => file.base));
}
