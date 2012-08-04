function getCurrentUrl(callback){
    chrome.tabs.getSelected(null,function(tab){
        chrome.tabs.sendRequest(tab.id, {req: "getlocation"}, function(response){
            callback(response.reply);
        });
    });
}
$(function(){
	$('.view-ad-positions').on("click", function(){
		getCurrentUrl(function(url){
			upto = url.length - 1;
			$('h4').toggle(0);
			$('h4').html(url[upto]);
			$('button').toggle(0);
			$('p').toggle(0);
			$('.number').html(upto);
			for(i=1;i < upto ;i++){
				$('<tr><td>'+url[i]+'</td></tr>').appendTo('table');
			}
		});
		return false;
	});
});
