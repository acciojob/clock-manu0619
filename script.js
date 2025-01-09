//your JS code here. If required.
let a=document.querySelector("#timer");
let time=new Date();
setInterval(()=>{
	time=new Date();

	a.innerHTML=time.toLocaleString();
},1000);