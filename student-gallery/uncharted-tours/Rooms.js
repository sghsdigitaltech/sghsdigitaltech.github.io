window.onscroll = function(){scrollFunction()};
		
	function scrollFunction(){
		if (document.body.scrollTop > 30 || document.documentElement.
			scrollTop > 30)
	{
		document.getElementById('navbar').style.padding = "20px 40px";
		document.getElementById('logo').style.fontsize = "20px";
	}
	else
	{
		document.getElementById('navbar').style.padding = "25px 40px";
		document.getElementById('logo').style.fontsize = "23px";
	}
}