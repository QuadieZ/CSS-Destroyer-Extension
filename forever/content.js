chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {
      
      var style = document.createElement("style");

      style.innerHTML =
        "body {" +
        "background-image:url('https://picsum.photos/500')," + 
        "linear-gradient(#00FFFF,#FF00CC);" +
        "background-blend-mode: difference;" +
        "animation:0.3s sht4 infinite alternate;" +
        "color:white;" +
        "}" +
        "div {" +
        "background-image:url('https://picsum.photos/500')," + 
        "linear-gradient(#00FFFF,#FF00CC);" +
        "background-blend-mode: difference;" +
        "animation:0.3s sht4 infinite alternate-reverse;" +
        "}" +
        "a,h1,h2 {" +
        "background: linear-gradient(#00FFFF,#FF00CC);" +
        "background-blend-mode: difference;" +
        "animation:0.5s sht4 infinite," +
        "1s move infinite alternate;" +
        "}" +
        "p,td {" +
        "color:white;" +
        "}" +
        "@keyframes sht4 {" +
        "0% {background-image:url('https://picsum.photos/800')," + 
        "linear-gradient(#00FFFF,#FF00CC);} " +
        "25% {background-image:url('https://picsum.photos/800')," + 
        "linear-gradient(#FF00CC,#FF4500);}" +
        "50% {background-image:url('https://picsum.photos/800')," +
        "linear-gradient(#FF4500,#FFFF00);}" +
        "75% {background-image:url('https://picsum.photos/800')," +
        "linear-gradient(#FF4500,#000000);}" +
        "100% {background-image:url('https://picsum.photos/800')," +
        "linear-gradient(#000000,#00FFFF);}" +
        "}" +
        "@keyframes move {" +
        "0% {transform:rotate(0deg);}" +
        "100% {transform:rotate(360deg);}" +
        "}"
      
      var ref = document.querySelector("script");
  
      ref.parentNode.insertBefore(style, ref);

      var x = document.createElement("div");
      x.style.position = 'fixed';
      x.className = "sht4";                  
        x.innerHTML = "SHT4";
        x.id = 'di';
        x.style.height = '100px';
        x.style.width = '100px';
        x.style.zIndex = '2000';
        x.style.background = 'none';
        x.style.color = 'white';
        x.style.fontWeight = 'bold';
        x.style.fontSize = '100px';
 
  x.style.animation = 'none';
  x.id = 'di';
  document.body.appendChild(x);
  
  var div_elem = document.getElementById(x.id);
  var h = setInterval(function () {
     div_elem.style.top = Math.floor((Math.random() * 100))+"%"; 
     div_elem.style.left = Math.floor((Math.random() * 100))+"%"; 
  }, 400 )

    div_elem.addEventListener('click',() => { location.href="https://www.facebook.com/StupidHackTH/"})
}
});
  