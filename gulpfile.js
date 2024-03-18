/*

Lesli

Copyright (c) 2023, Lesli Technologies, S. A.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see http://www.gnu.org/licenses/.

Lesli · Ruby on Rails SaaS Development Framework.

Made with ♥ by https://www.lesli.tech
Building a better future, one line of code at a time.

@contact  hello@lesli.tech
@website  https://www.lesli.tech
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/


// · 
const gulp = require("gulp")
const rename = require("gulp-rename");
const replace = require("gulp-replace");


// · 
gulp.task("default", gulp.series(taskCopyDocs, taskCopyImages, taskReplace))


// · 
function getEnginePath(file) {

    // engine name
    var engineName = file.dirname.split("/")[0]

    // get the same path just remove the docs folder
    var engineNameDoc = file.dirname.replace("/docs", "")

    // remove the Lesli prefix for the standard engines
    if (engineName != "Lesli") {
        engineNameDoc = engineNameDoc.replace("Lesli", "")
    }

    // return the new standard path for the web
    return engineNameDoc.toLowerCase()
}


// · 
function getEngineName(file) {

    // engine name
    var engineName = file.dirname.split("/")[0]

    // remove the Lesli prefix for the standard engines
    if (engineName != "Lesli") {
        engineName = engineName.replace("Lesli", "")
    }

    // return the new standard path for the web
    return engineName.toLowerCase()
}


// · 
function taskCopyDocs() {

    return gulp.src([
        "../LesliBuilder/engines/*/docs/*/*.md",
        "../LesliBuilder/engines/*/docs/*.md"
    ]).pipe(rename(file => {
        var engineNameDoc = getEnginePath(file)

        if (file.basename == "readme") {
            file.basename = "index"
        }

        file.dirname = `source/engines/${engineNameDoc}`;
    }))
    .pipe(gulp.dest("."));
}


// · 
function taskCopyImages() {
    return gulp.src([
        "../LesliBuilder/engines/*/docs/images/*",
        "../LesliBuilder/engines/*/app/assets/images/*/*.svg",
    ])
    .pipe(rename((file) => {
        var engineNameDoc = getEngineName(file)
        file.dirname = `source/public/images/engines/${engineNameDoc}`;
    }))
    .pipe(gulp.dest("."));
}


// · 
function taskReplace() {

    return gulp.src("source/engines/*/*.md")

    // replace logo path for lesli index.md file
    .pipe(replace(
        'src="../app/assets/images/lesli/',
        'src="/images/engines/lesli/'
    ))

    // replace logo path for engines index.md file
    .pipe(replace(
        'src="../app/assets/images/lesli_',
        'src="/images/engines/'
    ))

    // replace images inside docs files (like screenshots)
    .pipe(replace(
        'src="./images/', function handleReplace() {
        const engine = this.file.relative.split("/")[0]
        return 'src="/images/engines/'+engine+"/";
    }))

    /*

    // replace for the readme.md file a.k.a indexmd
    .pipe(replace(
        'src="./app/assets/images/lesli_', 
        'src="/images/engines/'
    ))

    // replace for the docs inside the docs folder (mostly logos)
    .pipe(replace(
        'src="../app/assets/images/lesli_',
        'src="/images/engines/'
    ))


    */

    // 
    .pipe(gulp.dest('source/engines'));

}
