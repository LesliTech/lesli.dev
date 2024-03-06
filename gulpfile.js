
const { src, dest } = require('gulp');
const rename = require('gulp-rename');


src("engines/**/readme.md")
.pipe(rename({ extname: 'index.md' }))
.pipe(dest('./'));

