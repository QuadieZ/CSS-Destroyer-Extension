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
    "animation:0.5s sht4 infinite" +
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
    "}" 
    
    var ref = document.querySelector("script");

    ref.parentNode.insertBefore(style, ref);