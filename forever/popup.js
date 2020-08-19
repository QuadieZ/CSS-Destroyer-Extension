function rainbow() {
    chrome.tabs.executeScript({
        file: 'rainbow.js'
      }); 
}

function sht4() {
    chrome.tabs.executeScript({
        file: 'lsd.js'
    });
}

function pastel() {
    chrome.tabs.executeScript({
        file: 'pastel.js'
    })
}




document.addEventListener('DOMContentLoaded', function() {
    var rb = document.getElementById('rainbow');
    rb.addEventListener('click',rainbow);

    var lsd = document.getElementById('sht4');
    lsd.addEventListener('click',sht4);

    var p = document.getElementById('pastel');
    p.addEventListener('click',pastel);
    
});



  
