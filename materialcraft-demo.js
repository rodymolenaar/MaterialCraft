function swapStyleSheet(sheet) {
  document.getElementById("themestyle").setAttribute("href", sheet);
}

function initiate() {
  var standard = document.getElementById("standard");
  var blue = document.getElementById("blue");
  var dark = document.getElementById("dark");
  var purple = document.getElementById("purple");
  var red = document.getElementById("red");

  standard.onclick = function () { swapStyleSheet("https://cdn.rawgit.com/rodymol123/MaterialCraft/master/themes/MaterialCraft/dist/materialcraft.css") };
  blue.onclick = function () { swapStyleSheet("https://cdn.rawgit.com/rodymol123/MaterialCraft/master/themes/MaterialCraft-Blue/dist/materialcraft.css"); };
  dark.onclick = function () { swapStyleSheet("https://cdn.rawgit.com/rodymol123/MaterialCraft/master/themes/MaterialCraft-Dark/dist/materialcraft.css"); };
  purple.onclick = function () { swapStyleSheet("https://cdn.rawgit.com/rodymol123/MaterialCraft/master/themes/MaterialCraft-Purple/dist/materialcraft.css"); };
  red.onclick = function () { swapStyleSheet("https://cdn.rawgit.com/rodymol123/MaterialCraft/master/themes/MaterialCraft-Red/dist/materialcraft.css"); };
}

window.onload = initiate;
