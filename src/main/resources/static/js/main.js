try {
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  }, false);
} catch (z) {
  document.attachEvent('oncontextmenu', function (e) {
    e.returnValue = false;
  });
}

document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
}

setTimeout(function(){
	document.body.classList.add('body_visible');
}, 200);

window.addEventListener("mousewheel", function(e) {
  if (e.ctrlKey) {
    e.preventDefault();
    return false;
  }
});