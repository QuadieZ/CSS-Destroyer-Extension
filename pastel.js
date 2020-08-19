var style = document.createElement("style");

style.innerHTML =
      "body {" +
      "background:linear-gradient(#FF968A,#A2E1DB);" +
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
      "0% {background:linear-gradient(#FF968A,#A2E1DB);} " +
      "25% {background:linear-gradient(#A2E1DB,#D4F0F0);}" +
      "50% {background:linear-gradient(#D4F0F0,#FFFFB5);}" +
      "75% {background:linear-gradient(#FFFFB5,#FFCCB6);}" +
      "100% {background:linear-gradient(#FFCCB6,#FF968A);}" +
      "}" 

var ref = document.querySelector("script");

ref.parentNode.insertBefore(style, ref);