let links=document.querySelectorAll("a");
let sections=document.querySelectorAll("section");
console.log(links);

window.addEventListener("scroll",function(e){
	
	sections.forEach(function (section){
		let windowTop=window.scrollY;
		let offsetfromTop=section.offsetTop-150;
		//let height=section.offsetHeight;
		let ids=section.getAttribute("id");
		console.log(windowTop);
		console.log(offsetfromTop);
		//console.log(height);
		
		
		if(  windowTop>=offsetfromTop)
		{
			links.forEach(function (linkOne){
				linkOne.classList.remove("active");
				//let idValue=document.querySelector("a[href*=" + ids + "]")
				document.querySelector("a[href*=" + ids + "]").classList.add("active");
				// console.log(idValue);
				console.log("df");
	
			});
		}
	});
});




// window.addEventListener("scroll",function(e){
	
	// let wScroll=window.scrollY;
	// console.log(wScroll);
	
	// if(wScroll<262)
	// {
		// console.log("fdf")
	// }
	
	// else if(wScroll<520 && wScroll>262)
	// {
		// document.querySelector(".two").classList.toggle("active");
		// document.querySelector(".one").classList.toggle("active");
	// }
	 // else if(wScroll<780 && wScroll>560)
	// {
		// document.querySelector(".three").classList.toggle("active");
		// document.querySelector(".one").classList.toggle("active");
	// }
	// else
	// {
		// document.querySelector(".three").classList.toggle("active");
		// document.querySelector(".four").classList.toggle("active");
	// }
	// })
	
// })



