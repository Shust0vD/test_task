var entryDate = Date.parse(localStorage.getItem('entryDate'));
var now = Date.parse(new Date());
var diff = now - entryDate;

var p = document.getElementById("timer");
p.innerHTML = time()

 var currentTime; 
    function time(){
      now = Date.parse(new Date());
      diff = now - entryDate;
      return [diff % 86400000 / 3600000,
        diff % 3600000 / 60000,
        diff % 60000 / 1000
      ] 
      .map(x => Math.floor(x).toString().padStart(2, '0'))
      .join(':')
    };

setInterval(function(){
	p.innerHTML = time()
}, 1000);