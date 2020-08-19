var style = document.createElement("style");

style.innerHTML =
      "body {" +
      "background:linear-gradient(#9400D3,#0000FF);" +
      "animation:0.3s sht4 infinite alternate;" +
      "color:white;" +
      "}" +
      "div {" +
      "background:linear-gradient(#00FFFF,#FF00CC);" +
      "animation:0.3s sht4 infinite alternate-reverse;" +
      "}" +
      "a,h1,h2 {" +
      "background: linear-gradient(#00FFFF,#FF00CC);" +
      "animation:0.5s sht4 infinite" +
      "}" +
      "p,td {" +
      "color:white;" +
      "}" +
      "@keyframes sht4 {" +
      "0% {background:linear-gradient(#9400D3,#0000FF);} " +
      "25% {background:linear-gradient(#0000FF,#00FF00);}" +
      "50% {background:linear-gradient(#00FF00,#FFFF00);}" +
      "75% {background:linear-gradient(#FFFF00,#FF0000);}" +
      "100% {background:linear-gradient(#FF0000,#9400D3);}" +
      "}" 

var ref = document.querySelector("script");

ref.parentNode.insertBefore(style, ref);