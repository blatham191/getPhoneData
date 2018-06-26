function getHeaders(_spreadsheetID, _worksheet, tableID){

	var url = "https://spreadsheets.google.com/feeds/cells/"+ _spreadsheetID +"/"+ _worksheet+ "/public/values?alt=json"

	var headings = [];

	$.getJSON(url, function(data){
		var entries = data.feed.entry;
		var data = entries[0].content.$t.split(/,|:/);
		var j = 1;

		for (var i=0; i<entries.length; i++){
		  if(entries[i].title.$t != "A2"){
		  	headings.push(entries[i].content.$t)
		  }
		  else if(entries[i].title.$t == "A2"){
		  	break;
		  }
		}
		
	})

	return headings;
}


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


function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds){
		  break;
		}
	}
}
