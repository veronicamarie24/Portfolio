// This variable tells us if we are on the phone screen or not.
// It is changed consistently throughout the functions whenever necessary.
var onPhoneScreen = false;

function openMenu() {
"use strict";
var count=1;

var counter=setInterval(timer, 200); //1000 will  run it every 1 second

function timer()
{
	count=count-1;
	if (count <= 0)
	{
		if(onPhoneScreen)
		{
			document.getElementById("container").style.backgroundImage = "url('images/phoneBlur.png')";
			document.getElementById("expand").style.backgroundColor = "rgba(76,76,76,0.70)";
		}
		
		else
		{
			document.getElementById("expand").style.backgroundColor = "rgba(76,76,76,0.90)";
		}
		
		clearInterval(counter);
		
		document.getElementById("expand").style.height = "100%";
		document.getElementById("arrow").style.opacity = "1";
		
		document.getElementById("notifications").style.opacity = "1";
		document.getElementById("date").style.opacity = "1";
		document.getElementById("location").style.opacity = "1";
		document.getElementById("wifisetting").style.opacity = "1";
		document.getElementById("rotation").style.opacity = "1";
		document.getElementById("airplane").style.opacity = "1";
		document.getElementById("mute").style.opacity = "1";

		return;
	}

  
}
}




function resetMenu() {
"use strict";
var count=1;

var counter=setInterval(timer, 100); //1000 will  run it every 1 second

	function timer()
	{
		count=count-1;
		if (count <= 0)
		{
			clearInterval(counter);

			document.getElementById("expand").style.height = "25px";
			
			document.getElementById("arrow").style.opacity = "0";
			
			if(onPhoneScreen) 
			{
				document.getElementById("expand").style.backgroundColor = "#372415";
				document.getElementById("container").style.backgroundImage = "url('images/phone.png')";
			}
			
			else
			{
				document.getElementById("expand").style.backgroundColor = "rgba(205,205,205,0.5)";
				
				document.getElementById("appstore").style.filter = "blur(0)";
				document.getElementById("clock").style.filter = "blur(0)";
				document.getElementById("contacts").style.filter = "blur(0)";
				document.getElementById("gallery").style.filter = "blur(0)";
				document.getElementById("safari").style.filter = "blur(0)";
				document.getElementById("messenger").style.filter = "blur(0)";
				document.getElementById("phone").style.filter = "blur(0)";
				document.getElementById("camera").style.filter = "blur(0)";
			}
			
			document.getElementById("notifications").style.opacity = "0";
			document.getElementById("date").style.opacity = "0";
			document.getElementById("location").style.opacity = "0";
			document.getElementById("wifisetting").style.opacity = "0";
			document.getElementById("rotation").style.opacity = "0";
			document.getElementById("airplane").style.opacity = "0";
			document.getElementById("mute").style.opacity = "0";
			
			return;
	  }

	}
}



function amazonScreen() {
"use strict";
var count=1;

var counter=setInterval(timer, 200); //1000 will  run it every 1 second

	function timer()
	{
		count=count-1;
		if (count <= 0)
		{
			clearInterval(counter);
			document.getElementById("goToAmazon").style.backgroundColor = "rgba(202,202,202,1)";
			document.getElementById("goToMain").style.backgroundColor = "rgba(202,202,202,.4)";
			document.getElementById("container").style.backgroundImage = "url('images/amazon.png')";
			
			document.getElementById("appstore").style.opacity = "0";
			document.getElementById("clock").style.opacity = "0";
			document.getElementById("contacts").style.opacity = "0";
			document.getElementById("gallery").style.opacity = "0";
			document.getElementById("safari").style.opacity = "0";
			document.getElementById("messenger").style.opacity = "0";
			document.getElementById("phone").style.opacity = "0";
			document.getElementById("camera").style.opacity = "0";
			
			document.getElementById("amazonRectangle").style.opacity = "1";
			document.getElementById("amazonLogo").style.opacity = "1";
			document.getElementById("amazonCart").style.opacity = "1";
			document.getElementById("amazonBook").style.opacity = "1";
			document.getElementById("amazonGames").style.opacity = "1";
			document.getElementById("amazonMusic").style.opacity = "1";
			document.getElementById("amazonText").style.opacity = "1";
			return;
	  }
	}
}


function mainScreen() {
"use strict";
var count=1;

var counter=setInterval(timer, 200); //1000 will  run it every 1 second

	function timer()
	{
		count=count-1;
		if (count <= 0)
		{
			clearInterval(counter);
			
			if(onPhoneScreen)
			{
				document.getElementById("expand").style.backgroundColor = "rgba(205,205,205,0.5)";
				document.getElementById("back").style.opacity = "0";
			}
			
			else
			{			
				document.getElementById("amazonRectangle").style.opacity = "0";
				document.getElementById("amazonLogo").style.opacity = "0";
				document.getElementById("amazonCart").style.opacity = "0";
				document.getElementById("amazonBook").style.opacity = "0";
				document.getElementById("amazonGames").style.opacity = "0";
				document.getElementById("amazonMusic").style.opacity = "0";
				document.getElementById("amazonText").style.opacity = "0";
			}
			
			document.getElementById("container").style.backgroundImage = "url('images/main.png')";
			document.getElementById("goToAmazon").style.backgroundColor = "rgba(202,202,202,.4)";
			document.getElementById("goToMain").style.backgroundColor = "rgba(202,202,202,1)";
			
			document.getElementById("appstore").style.opacity = "1";
			document.getElementById("clock").style.opacity = "1";
			document.getElementById("contacts").style.opacity = "1";
			document.getElementById("gallery").style.opacity = "1";
			document.getElementById("safari").style.opacity = "1";
			document.getElementById("messenger").style.opacity = "1";
			document.getElementById("phone").style.opacity = "1";
			document.getElementById("camera").style.opacity = "1";
			
			onPhoneScreen = false;
			return;
		}


	}
}


function phoneScreen() {
"use strict";
var count=1;
onPhoneScreen = true;

var counter=setInterval(timer, 700); //1000 will  run it every 1 second

	function timer()
	{
		count=count-1;
		if (count <= 0)
		{
			clearInterval(counter);
			document.getElementById("container").style.backgroundImage = "url('images/phone.png')";
			document.getElementById("expand").style.backgroundColor = "#372415";
			document.getElementById("goToAmazon").style.backgroundColor = "rgba(202,202,202,0)";
			document.getElementById("goToMain").style.backgroundColor = "rgba(202,202,202,0)";
			
			document.getElementById("back").style.opacity = "1";
			
			document.getElementById("appstore").style.opacity = "0";
			document.getElementById("clock").style.opacity = "0";
			document.getElementById("contacts").style.opacity = "0";
			document.getElementById("gallery").style.opacity = "0";
			document.getElementById("safari").style.opacity = "0";
			document.getElementById("messenger").style.opacity = "0";
			document.getElementById("phone").style.opacity = "0";
			document.getElementById("camera").style.opacity = "0";
			return;
		}


	}
}
