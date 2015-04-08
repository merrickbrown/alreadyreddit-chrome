chrome.runtime.sendMessage(true);

chrome.runtime.onMessage.addListener(
	function(lastvisitedtime, sender) {
		$("div.commentarea div.entry").each(
			function(x) {
				var dateposted = $(this).find(".live-timestamp").attr("title");
				if (Date.parse(dateposted) < lastvisitedtime) {
					$(this).find("div.md p").attr("style", "color:gray");
				}
			}
		);
	}
);