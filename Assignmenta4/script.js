(function (window) {


var names = ["Amina", "Zafar", "Shahzad", "Younas", "Ayesha", "Ali", "Ansar", "Kainat", "Noreen", "Samina"];

for (var i in names) {


  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);