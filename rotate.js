var style = document.createElement("style");

style.innerHTML =
  "a,h1,h2,p,img, input {" +
  "animation:1s move infinite alternate;" +
  "}" +
  "@keyframes move {" +
  "0% {transform:rotate(0deg);}" +
  "100% {transform:rotate(360deg);}" +
  "}";

var ref = document.querySelector("script");

ref.parentNode.insertBefore(style, ref);