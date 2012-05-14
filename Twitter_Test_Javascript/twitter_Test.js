// JavaScript Document

var twitter_id = 'arisinn'; //表示したいtwitter ID
var twitter_count = 10; //表示数
var twitter_elem_id = 'twitter_data';

window.onload = function() {
	var url = 'http://twitter.com/statuses/user_timeline/'
	+ twitter_id
	+ '.json?callback=twitterCallback&count='
	+ twitter_count;
	
	var script = document.createElement('script');
	script.setAttribute('src', url);
	document.body.appendChild(script);
}

function twitterCallback(obj){
	var html = "";
	for(var i=0 ; i<twitter_count && i<obj.length ; i++){
		html += "<li><a href='http://twitter.com/" + twitter_id + "/status/"
		+ obj[i].id + "'>" + obj[i].text + "</a></li>";
	}
document.getElementById(twitter_elem_id).innerHTML = html;
}
