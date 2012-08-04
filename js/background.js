var matches = [];
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    switch(request.req) {
        case "getlocation": 
            sendResponse({
                reply: matches
            });
            break;
    }
});

$(function(){
	pattern = /"[^"]*"/;
	$('script:contains(yld_mgr.place_ad_here)').each(function(){
		matches.push($(this).html().match(pattern));
	});
	for(i=0; i < matches.length; i++){	
		m = JSON.stringify(matches[i]).replace(/\"\\\"/g, "");
		m = m.replace(/\\\"\"/g, "");
		m = m.replace(/\[/g, "");
		m = m.replace(/\]/g, "");
		matches[i] = m
	}
	matches.push(window.location.href);
});
