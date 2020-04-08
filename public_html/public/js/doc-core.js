function load_theme(path, name, height = 3000) {
    if (tmout){
        tmout = false;
        frame.attr("src", path);
        // frame.css("height", height);
        frame.css("display", "none").fadeIn(300);
        name_lesson.text("«" + name + "»");
        setTimeout(function () {tmout = true}, 100);
    }
}

const frame = $("#frame");
const name_lesson = $("#name-lesson");
let tmout = true;

load_theme("documents/section_1/theme_1/index.html", "Введение", 1000);
var elems = $(".bold-link")[0].style.textDecoration = 'underline';;
console.log(elems);
