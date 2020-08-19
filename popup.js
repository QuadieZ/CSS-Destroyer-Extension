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

function rotate() {
    chrome.tabs.executeScript({
        file: 'rotate.js'
    })
}

function icon() {
    chrome.tabs.executeScript({
        file: 'icon.js'
    })
}


document.addEventListener('DOMContentLoaded', function() {
    var rb = document.getElementById('rainbow');
    rb.addEventListener('click',rainbow);

    var lsd = document.getElementById('sht4');
    lsd.addEventListener('click',sht4);

    var p = document.getElementById('pastel');
    p.addEventListener('click',pastel);

    var ro = document.getElementById('rotate');
    ro.addEventListener('click',rotate)
    
    var ic = document.getElementById('sht-ic');
    ic.addEventListener('click',icon)
    
});



  
