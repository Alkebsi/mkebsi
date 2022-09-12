//Start Function
function Start()
{
	
}
//update every one millisecond 
var update = setInterval(Update, 1);
function Update()
{
	//showing content on scrolling effect
	//the first scroll on effect
	var iframe = 
	document.getElementsByClassName("frame")[0];
	if(window.pageYOffset >= iframe.offsetTop - (iframe.offsetTop / 2))
		{
			iframe.style.width = "100%";
			iframe.style.height = "100%";
			if(window.innerWidth >= 980)
				{
					iframe.style.height = "50%";
				}
			iframe.style.borderRadius = "10px";
			iframe.style.opacity = "1";
			iframe.style.filter = "blur(0)";
			iframe.style.left = "0";
		}
	
	//the dashes
	if(window.pageYOffset >= d1.offsetTop - (d1.offsetTop / 2))
		{
			d1.style.margin = "6px";
			d2.style.margin = "6px";
			d3.style.margin = "6px";
			d2.style.transition = "0.7s";
		}
	
	//the accordion texts effect 
	if(window.pageYOffset >= acc[0].offsetTop - (acc[0].offsetTop / 2))
		{
			acc[0].style.filter = "none";
			acc[0].style.transform = "translate(0)";
		}
		if(window.pageYOffset >= acc[1].offsetTop - (acc[1].offsetTop / 2))
		{
			acc[1].style.filter = "none";
			acc[1].style.transform = "translate(0)";
		}
		if(window.pageYOffset >= acc[2].offsetTop - (acc[2].offsetTop / 2))
		{
			acc[2].style.filter = "none";
			acc[2].style.transform = "translate(0)";
		}
		if(window.pageYOffset >= acc[3].offsetTop - (acc[3].offsetTop / 2))
		{
			acc[3].style.filter = "none";
			acc[3].style.transform = "translate(0)";
		}
		
	
	//writing the pargraph
	if(window.pageYOffset >= writer.offsetTop - (writer.offsetTop / 2))
		{
			if(i < txt.length)
				{
					writer.innerHTML += txt.charAt(i);
					i++;
				}
		}
}
//writing the pargraph
	var writer = 
	document.getElementById("textWriter");
	var txt = "ast summer I had the chance to visit Australia for the frst time and it was a great experience. One thing I knew for certain was that I didn’t want to do the typical tourist thing and waste such a special opportunity. I heard about a volunteer project in a place called Kangaroo Island in Queensland and decided immediately that it was just the right thing for me! It’s a beautiful place off the south coast of Australia that is home to kangaroos, koalas and other native Australian animals in need of protection. I arrived at Kangaroo Island feeling very excited, but with no idea of what to expect. I was a bit nervous about speaking English all day, but my host family were very welcoming and the other people on the project were really helpful. We were working there for free in exchange for food and a place to stay and it was the best six weeks of my life! It’s quite hard to describe a typical day on the island because we were always busy with something different to do. Every morning we had to prepare food for the different animals and clean up after them, too. That part wasn’t so much fun, of course – it was messy, smelly and it gave me a bit of a backache! We also did some repair work on fences and pathways and helped to look after the trees and plants. One of my favourite activities on Kangaroo Island was helping the experts with their animal protection projects. I imagine that the science was pretty complicated, but it was interesting to learn and understand the importance of the work they do. I also enjoyed showing visitors around on tours of the park and sharing our interest for the animals. I would really recommend volunteering on Kangaroo Island. It was incredible to be in close contact with such beautiful animals and see how they live. I met people from around the world and took some fantastic pictures – the memories will stay with me for the rest of my life!";
	var i = 0;

//top search panel color
var topp = 
document.getElementById("topPanel");
function DarkTop(dark)
{
	if(dark == false)
		{
			topp.content = "#fff";
		}
		else
		{
			topp.content = "#000";
		}
}

//bring all dashes
var d1 =
document.getElementById("dash1");
var d2 =
document.getElementById("dash2");
var d3 =
document.getElementById("dash3");
//all the dashes in one divid
var allD=
document.getElementById("all-dashes");
//bring the right bar
var trb =
document.getElementById("right-bar");

//to mange the clicks
var clicked = "ok";
//the function for the click dashes
function onDashesClick()
{
	//the first click
	if(clicked == "ok")
	{
	clicked = "no";
	d1.style.width = "30px";
	d1.style.height = "6px";
	d1.style.transform = "rotate(46deg) translate(28px, -21px)";
	
	allD.style.transform = "rotate(360deg)";
	allD.style.top = "6px";
	allD.style.right = "85px";
	
	d3.style.width = "30px";
	d3.style.height = "6px";
	d3.style.transform = "rotate(-46deg) translate(28px, 21px)";
	
	trb.style.right = "0px";
	}
	
	//the second click
  else if (clicked == "no")
	{
		clicked = "ok";
	d1.style.width = "60px";
	d1.style.height = "12px";
	d1.style.transform = "rotate(0) translate(0)";
	
	allD.style.transform = "rotate(0)";
	allD.style.top = "0";
	allD.style.right = "10px";
	
	d3.style.width = "60px";
	d3.style.height = "12px";
	d3.style.transform = "rotate(0) translate(0)";
	
	trb.style.right = "-1000px";
	}
}


//The experience of the accordion in the main page
var acc =
document.getElementsByClassName("accor");

var txt1 =
document.getElementsByClassName("txt1")[0];
var t1bool = false;

var txt2 =
document.getElementsByClassName("txt2")[0];
var t2bool = false;

var txt3 =
document.getElementsByClassName("txt3")[0];
var t3bool = false;

var txt4 =
document.getElementsByClassName("txt4")[0];
var t4bool = false;


function AText(value)
{
	if(value == 1)
		{
			if(!t1bool)
				{
					txt1.style.maxHeight = "400px";
					txt1.style.border = "1px solid #00ffc2";
					acc[0].style.borderRadius = "0";
					acc[0].innerHTML = "<h4>Friendship for Hire!</h4><b>-</b>";
					t1bool = true;
				}
				else
				{
					txt1.style.maxHeight = "0";
					txt1.style.border = "0";
					acc[0].innerHTML = "<h4>Friendship for Hire!</h4><b>+</b>";
					acc[0].style.borderRadius = "10px";
					t1bool = false;
				}
		}
		if(value == 2)
		{
			if(!t2bool)
				{
					txt2.style.maxHeight = "400px";
					txt2.style.border = "1px solid #00ffc2";
					acc[1].style.borderRadius = "0";
					acc[1].innerHTML = "<h4>Old Frinds Finally Meet</h4><b>-</b>";
					t2bool = true;
				}
				else
				{
					txt2.style.maxHeight = "0";
					txt2.style.border = "0";
					acc[1].innerHTML = "<h4>Old Frinds Finally Meet</h4><b>+</b>";
					acc[1].style.borderRadius = "10px";
					t2bool = false;
				}
		}
		if(value == 3)
		{
			if(!t3bool)
				{
					txt3.style.maxHeight = "400px";
					txt3.style.border = "1px solid #00ffc2";
					acc[2].style.borderRadius = "0";
					acc[2].innerHTML = "<h4>Students Make the Best Teachers</h4><b>-</b>";
					t3bool = true;
				}
				else
				{
					txt3.style.maxHeight = "0";
					txt3.style.border = "0";
					acc[2].innerHTML = "<h4>Students Make the Best Teachers</h4><b>+</b>";
					acc[2].style.borderRadius = "10px";
					t3bool = false;
				}
		}
		if(value == 4)
		{
			if(!t4bool)
				{
					txt4.style.maxHeight = "400px";
					txt4.style.border = "1px solid #00ffc2";
					acc[3].style.borderRadius = "0";
					acc[3].innerHTML = "<h4>Is Your Friend Simply the Best?</h4><b>-</b>";
					t4bool = true;
				}
				else
				{
					txt4.style.maxHeight = "0";
					txt4.style.border = "0";
					acc[3].innerHTML = "<h4>Is Your Friend Simply the Best?</h4><b>+</b>";
					acc[3].style.borderRadius = "10px";
					t4bool = false;
				}
		}
}