//VIDEO SETTINGS
function progress(){
	var video = document.getElementById("myVideo");
	video.play();
}
//LOCK_SETTINGS
function show_lock_settings(){	
var CLOSE     = document.getElementById("close_lock_setting")
var FORM_LOCK = document.getElementById("form1")
	CLOSE.style.display = "block"
	FORM_LOCK.style.display = "block"
}
function close_lock_Settings(){
var LOCK_BUTTON = document.getElementById("lock_button")	
var CLOSE     = document.getElementById("close_lock_setting")
var FORM_LOCK = document.getElementById("form1")
	LOCK_BUTTON.type = "button"
	CLOSE.style.display = "none"
	FORM_LOCK.style.display = "none"
}
//DATE FORM VISIBLE
function show_date_form(){
var LOCK_BUTTON = document.getElementById("lock_button")
var DATE_FORM = document.getElementById("DATE_FORM");
var TIME_FORM = document.getElementById("TIME_FORM");
var TIMELAPSE_FORM = document.getElementById("TIMELAPSE_FORM");
	LOCK_BUTTON.type = "submit"
	DATE_FORM.style.display = "block";
	TIME_FORM.style.display = "none";
	TIMER_FORM.style.display = "none";
}
//TIME FORM VISIBLE
function show_time_form(){
var LOCK_BUTTON = document.getElementById("lock_button")
var DATE_FORM = document.getElementById("DATE_FORM");
var TIME_FORM = document.getElementById("TIME_FORM");
var TIMELAPSE_FORM = document.getElementById("TIMELAPSE_FORM");
	LOCK_BUTTON.type = "submit"
	DATE_FORM.style.display = "none";
	TIME_FORM.style.display = "block";
	TIMER_FORM.style.display = "none";
}
//TIMER FORM VISIBLE
function show_timer_form(){
var LOCK_BUTTON = document.getElementById("lock_button")
var DATE_FORM = document.getElementById("DATE_FORM");
var TIME_FORM = document.getElementById("TIME_FORM");
var TIMELAPSE_FORM = document.getElementById("TIMELAPSE_FORM");
	LOCK_BUTTON.type = "submit"
	DATE_FORM.style.display = "none";
	TIME_FORM.style.display = "none";
	TIMER_FORM.style.display = "block";
}
//DATE OUTPUT
function show_date_output(){
	var date_input = document.getElementById("date_input").value 
	var date_output = document.getElementById("date_output")
	date_output.innerHTML = date_input
}
//TIME OUTPUT
function show_time_output(){
	var  hour = document.getElementById("hour_field").value
	var  minute = document.getElementById("minute_field").value
	var  day_time = document.getElementById("day_time").value
	var time_output = document.getElementById("time_output")
	time_output.innerHTML=hour+" : "+minute+" "+" "+day_time
}
//TIMER OUTPUT
function show_timer_output(){
	var hours = document.getElementById("hour_range").value
	var minute = document.getElementById("minute_range").value
	var seconds = document.getElementById("second_range").value
	var timer_output = document.getElementById("timer_output")
	timer_output.innerHTML = hours+" : "+minute+" : "+seconds

// TIMER TEXT COUNTER ELEMENT

	var timer_output_2 = document.getElementById("TIMER_TEXT")
	timer_output_2.innerHTML = hours+" : "+minute+" : "+seconds
	
	}
//input text
function upload(){
	var val = document.getElementById("upload_button");
	var vid = document.getElementById("i_footage");
	vid.play()
	val.value = "UPLOAD"
}	
function upload_2(){
	var val = document.getElementById("upload_button");
	val.value = "+"
}
//UPLOAD DISAPPEARS
function gone(){
	var val = document.getElementById("upload_button");
	val.style.display = "none";
}
//FILE UPLOAD OUTPUT //FILE UPLOAD INPUT
function show_file_name(){
     var uploaded_file_name =  document.getElementById("upload").value	
     var val = document.getElementById("upload_button");
     val.style.display = "block"
 }
