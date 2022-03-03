

function playclip() {
if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
if (document.all)
 {
  document.all.sound.src = "jetts.mp3";
 }
}

else {
{
var audio = document.getElementById("mySoundClip"); audio.play();
audio.play();
}
}
}

