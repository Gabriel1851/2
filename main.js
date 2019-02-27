function toggle_visibility(id) {
  var e = document.getElementById(id);
  if(e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'block';
}

function intro1() {
  toggle_visibility("intro1b");
  toggle_visibility("intro2a");
  toggle_visibility("intro2b");
}

function intro2() {
  toggle_visibility("intro2a");
  toggle_visibility("intro2b");
  toggle_visibility("intro3a");
  toggle_visibility("intro3b");
}

function intro3() {
  toggle_visibility("intro3a");
  toggle_visibility("intro3b");
  toggle_visibility("intro4a");
  toggle_visibility("intro4b");
}

function intro4() {
  toggle_visibility("intro4a");
  toggle_visibility("intro4b");
  toggle_visibility("intro5a");
  toggle_visibility("intro5b");
}

function intro5() {
  toggle_visibility("intro5a");
  toggle_visibility("intro5b");
  toggle_visibility("intro6a");
  toggle_visibility("intro6b");
}

function intro6() {
  toggle_visibility("intro");
  toggle_visibility("intro6a");
  toggle_visibility("intro6b");
}