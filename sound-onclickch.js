function playclip2() {
if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
if (document.all)
 {
  document.all.sound.src = "ch.mp3";
 }
}

else {
{
var audio = document.getElementById("mySoundClip2"); audio.play();
audio.play();
}
}
}