/* Заказ к празднику: дата уходит в заявку по-русски («14 октября, среда»), а не в формате 2026-10-14. */
(function () {
  'use strict';
  var input = document.getElementById('o-date');
  var out = document.getElementById('o-date-f');
  if (!input || !out) return;
  var DAYS = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  var t = new Date();
  input.min = new Date(t.getTime() - t.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  input.addEventListener('change', function () {
    var p = input.value.split('-');
    if (p.length !== 3) { out.value = ''; return; }
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    out.value = d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' }) + ', ' + DAYS[d.getDay()];
  });
})();
