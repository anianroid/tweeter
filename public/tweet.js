$.ajax({
	type: 'GET',
	url: '/tweets',
	success: function(data) {
		var html = ``;
		for(var i = 0; i<data.tweets.length; i++) {
			appendNewTweet(data.tweets[i]);
		}
	}
});


function appendNewTweet(tweet) {
	var newTweet = `<div class="tweet-wrapper">
										<div class="tweet-text">${tweet.text}</div>
										<div class="tweet-time"><small>${new Date(tweet.time).toLocaleString()}</small></div>
									</div>`;

	$("#render-tweets").prepend(newTweet);
}

$("#submit-tweet").click(function () {
	$.ajax({
		type: 'POST',
		url: '/tweet',
		contentType: 'application/json',
		data: JSON.stringify({tweet: $("#new-tweet").val()}),
		success: function(data) {
			appendNewTweet(data);
			$("#new-tweet").val('');
		}
	})
});