function getPhoneData(_spreadsheetID, _worksheet, headers, tableID){

	var url = "https://spreadsheets.google.com/feeds/list/"+ _spreadsheetID +"/"+ _worksheet+ "/public/values?alt=json"

	$.getJSON(url, function(data){
		var entries = data.feed.entry;
		var data = entries[0].content.$t.split(/,|:/);
		var j = 1;
		$('.'+tableID).append('<tr><th><b>Address</b></th><td>'+entries[0].gsx$address.$t+'</td></tr>');
		for (var i=1; i<headers.length; i++){
		  $('.'+tableID).append('<tr><th><b>'+headers[i]+'</b></th><td>'+data[j]+'</td></tr>');
		  j = j + 2
		}
		
	})
}

function getSiteKey(site, _spreadsheetID){
	var key ="";
	var url = "https://spreadsheets.google.com/feeds/list/"+ _spreadsheetID +"/ovlwpr6/public/values?alt=json"

	$.getJSON(url, function(data){
		var entries = data.feed.entry;

		for (var i = entries.length - 1; i >= 0; i--) {
			//console.log(entries[i]);
			if(entries[i].gsx$site == site){
				key = entries[i].gsx$code;
			}
		}

	})
	return key;	
}
