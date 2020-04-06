function load_theme(path, name) {
    frame.attr("src", path);
    frame.css("display", "none").fadeIn(1000);
    name_lesson.text("«" + name + "»");
}

const frame = $("#frame");
const name_lesson = $("#name-lesson");

load_theme("documents/section_1/theme_1/index.html", "Введение. Основы сетей");
