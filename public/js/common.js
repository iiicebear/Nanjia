
$(function() {
	totalheight = window.screen.availHeight;
	totalwidth1 = window.screen.availWidth;
//	console.log(document.body.scrollWidth,totalwidth1);
	gundong = Number(window.innerWidth)-Number(document.documentElement.clientWidth);
	totalwidth = Number(totalwidth1)-Number(gundong);
	document.getElementById("navbar").style.width=totalwidth+"px";
	document.getElementById("slides").style.height=totalheight+"px";
	document.getElementById("slides").style.width=totalwidth+"px";
	document.getElementById("char").style.height=totalheight+"px";
	document.getElementById("char").style.width=totalwidth+"px";
	document.getElementById("adva").style.height=totalheight+"px";
	document.getElementById("adva").style.width=totalwidth+"px";
	document.getElementById("project").style.height=totalheight+"px";
	document.getElementById("project").style.width=totalwidth+"px";
	document.getElementById("intro").style.height=totalheight+"px";
	document.getElementById("intro").style.width=totalwidth+"px";
	document.getElementById("data").style.height=totalheight+"px";
	document.getElementById("data").style.width=totalwidth+"px";
	document.getElementById("part").style.height=totalheight+"px";
	document.getElementById("part").style.width=totalwidth+"px";
	document.getElementById("about").style.height=totalheight+"px";
	document.getElementById("about").style.width=totalwidth+"px";
	document.getElementById("connect").style.height=totalheight+"px";
	document.getElementById("connect").style.width=totalwidth+"px";
});