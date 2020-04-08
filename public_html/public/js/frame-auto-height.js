console.log("Коррекция высоты фрейма");

var iframe = $('#frame', parent.document.body);
const h = $(document.body).height() + 100;
console.log(h);
iframe.height(h);
