const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const browserSync = require("browser-sync");

//コンパイル元と出力先のパス
const paths = {
  input: ["**/*.pug", "./about_*/sass/*.scss"],
  output: "./"
};

//"pugCompile"コマンドで実行されるタスクを設定
//pipe経由でsrcのデータが加工されていく
const pugCompile = () => {
  return gulp.src(paths.input[0])
    //エラーでwatchが解除されないようにする
    //notifyでエラーログをデスクトップ通知させる
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(pug())
    //コンパイル結果の出力
    .pipe(gulp.dest(paths["output"]));
};
exports.pugCompile = pugCompile;

//"sassCompile"コマンドで実行されるタスクを設定
const sassCompile = () => {
  return gulp.src(paths.input[1])
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sass())
    .pipe(gulp.dest(paths["output"]));
};
exports.sassCompile = sassCompile;

//ブラウザをホットリロードさせる
// const hotReload = (done) => {
//   browserSync.init({
//     server: {
//       index: "./about_*/pug/*.html"
//     }
//   });
//   browserSync.reload();
//   done()
// };
// exports.hotReload = hotReload;

//ファイルの保存毎に自動でコンパイルとホットリロードを行う
const watch = () => {
  gulp.watch(paths.input, gulp.parallel(pugCompile, sassCompile));
};
exports.watch = watch;