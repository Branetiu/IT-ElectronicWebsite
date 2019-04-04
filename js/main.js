/*
*******************************************************************
Script 1: Browser Plugin Detection (browserdetection.html)
this function detects the user browser
******************************************************************
*/
function browserDetection() { 
	if(navigator.userAgent.indexOf("Chrome") != -1 ){
		document.write('Chrome');
    }
    else if(navigator.userAgent.indexOf("Opera") != -1 ){
		document.write('Opera');
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ){
        document.write('Firefox');
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
      document.write('IE'); 
    }  
    else{
       document.write('unknown');
    }
}// end function browserDetection

/*
******************************************************************
Script 2a: Status Bar Message (statusbar.html)
this function shows a message on the status bar
******************************************************************
*/
function writeToStatus(input){
    window.status=input;
    return true;
}// end function writeoStatus

/*
/*****************************************************************
Script2b : Vertical Scrolling Text( scroll.html)
this function is used for Vertical Scrolling Text
****************************************************************
*/
var pos=100;
function scrollText() {
	pos =pos-1;
	if (pos < 0-document.getElementById("text").offsetHeight+130){
		return;
    }
    document.getElementById("text").style.top=pos;
    window.setTimeout("scrollText()",30);
}// end function scrollText

/*

*******************************************************************
Script 4a: Cycling Animations (cyclinganimations.html)
Using Canvas
******************************************************************
*/
//declare variables
var img = new Image();
img.src = 'images/animation6.jpg';
var CanvasXSize = 950;
var CanvasYSize = 200;
var speed = 20; //lower is faster
var scale = 1.05;
var y = -4.5; //vertical offset

// Main program
var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function() {
    imgW = img.width*scale;
    imgH = img.height*scale;
    if (imgW > CanvasXSize) { 
		x = CanvasXSize-imgW; 
    } // image larger than canvas
    if (imgW > CanvasXSize) { 
		clearX = imgW; 
	} // image larger than canvas
    else { 
		clearX = CanvasXSize; 
	}
    if (imgH > CanvasYSize) { 
		clearY = imgH; 
	} // image larger than canvas
    else {
		clearY = CanvasYSize; 
	}
    //Get Canvas Element
    ctx = document.getElementById('canvas').getContext('2d');
    //Set Refresh Rate
    return setInterval(draw, speed);
}

function draw() {
	//Clear Canvas
    ctx.clearRect(0,0,clearX,clearY);
    //If image is <= Canvas Size
    if (imgW <= CanvasXSize) {
        //reset, start from beginning
        if (x > (CanvasXSize)) {
			x = 0; 
		}
        //draw aditional image
        if (x > (CanvasXSize-imgW)) {
			ctx.drawImage(img,x-CanvasXSize+1,y,imgW,imgH); 
		}
    }
    //If image is > Canvas Size
    else {
        //reset, start from beginning
        if (x > (CanvasXSize)) { 
			x = CanvasXSize-imgW; 
		}
        //draw aditional image
        if (x > (CanvasXSize-imgW)) { 
			ctx.drawImage(img,x-imgW+1,y,imgW,imgH);			
	    }
    }
    //draw image
    ctx.drawImage(img,x,y,imgW,imgH);
    //amount to move
    x += dx;
}// end function draw
/*****************************************************************
Script 6a: Email Verification
this function is used for email verification
****************************************************************
*/
function emailVerification(myForm) {
	re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	if (re.test(myForm.emailAddr.value)) {
		return true
	}
	alert("Invalid email address")
	myForm.emailAddr.focus()
	myForm.emailAddr.select()
	return false
}//end function emailVerification 

/*

/*****************************************************************
Script 8: Set Cookie and Return Cookie (cookie.html)
these two functions setting and returning a cookie
****************************************************************
*/
function writeCookie(){
    if( document.myform.customer.value == "" ){
	    alert("Enter some value!");
        return;
    }
    cookievalue= escape(document.myform.customer.value) + ";";
    document.cookie="name=" + cookievalue;
    alert ("Setting Cookies : " + "name=" + cookievalue );
}
function readCookie(){
	document.write ("name=" + cookievalue );
}

 //end cookie
/*
*******************************************************
Script 9:Dynamic Web Page Update(Time)(dynamicwebpageupdate.html)
this function prints the time
***********************************************************
*/
function timeDigtal(){
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
    document.write("<b>" + hours + ":" + minutes + " " + "</b>");
	document.write("<b>:" + seconds + "</b>");
}//end function timeDigtal
/////////////////////////////////////////////

	function validate()   /// I created validation form for me,the administrator of this website.
/// name is Bogdan and password 12345, if its correct it will move to index.html, if not to fail.html.
{
    if(   document.getElementById("text1").value == "Bogdan","Alex","Ion"
       && document.getElementById("text2").value == "12345","123","Ion" )
    {
        alert( "Validation succeeded" );
        location.href="index.html";   /// here I can move user to other page for example administrator page
    }
    else
    {
        alert( "Validation failed" );
        location.href="fail.html";   /// if validation is fail , move to fail.
    }
}
///// I created this counter of visits by using localStorage it will increase everytime even if I refresh web  page
if (localStorage.pagecount)
 {
 localStorage.pagecount=Number(localStorage.pagecount) +1;
 }
else
 {
 localStorage.pagecount=1;
 }
document.write("Visits on this website: " + localStorage.pagecount + " time(s).");

////////////////////////
///Flashing Status Bar it's used to make my website look cool.
var Message = "Hello. Welcome on my website !!!"; 
var DisplayStatus = 0; 
function StartFlashing() 
{ 
  if (DisplayStatus == 0) 
    { 
      window.status=Message; 
      DisplayStatus=1; 
    } 
  else 
    { 
      window.status=""; 
      DisplayStatus=0; 
    } 
  setTimeout("StartFlashing()",150); 
} 
////////////////
////DynamicFrame it's used for the button 'Change Frame', so when the user click, it will be a transfer to the 2nd screen on pcworld page.
function dynamicFrame() {
    var frames = window.frames;
    frames[1].location = "http://www.pcworld.ie/";
}
	////////////////////////////////////////
	///Mouse over it's used to let user when he move cursor over a text to change his color style to red.
function mouseOver() {
    document.getElementById("text").style.color = "red";
}// end function

function mouseOut() {
    document.getElementById("text").style.color = "black";
}// end function