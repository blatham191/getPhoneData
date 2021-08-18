function searchTable() {
			  // Declare variables 
			  document.getElementById('multiRow').style.display = '';
			  // document.getElementById('hideThis1').style.display = 'none';
			  // document.getElementById('hideThis2').style.display = 'none';
			  // document.getElementById('hideThis3').style.display = 'none';
			  // document.getElementById('hideThis4').style.display = 'none';
			  //document.getElementById('scroll').scrollIntoView();
			  var input, filter, table, tr, td, i;
			  input = document.getElementById('input');
			  filter = input.value.toUpperCase();
			  table = document.getElementById('multiRow');
			  tr = table.getElementsByTagName('tr');

			  // Loop through all table rows, and hide those who don't match the search query
			  for (i = 0; i < tr.length; i++) {
			      td = tr[i].getElementsByTagName('td')[0];
			      if(filter === ''){
			        document.getElementById('multiRow').style.display = 'none';
			        // document.getElementById('hideThis1').style.display = '';
			        // document.getElementById('hideThis2').style.display = '';
			        // document.getElementById('hideThis3').style.display = '';
			        // document.getElementById('hideThis4').style.display = '';
			      }
			      else{
			        if (td) {
			          if (tr[i].getElementsByTagName('td')[0].innerHTML.toUpperCase().indexOf(filter) > -1) {
			            tr[i].style.display = '';
			          } 
			          else if (tr[i].getElementsByTagName('td')[1].innerHTML.toUpperCase().indexOf(filter) > -1) {
			            tr[i].style.display = '';
			          }
			          else if (tr[i].getElementsByTagName('td')[2].innerHTML.toUpperCase().indexOf(filter) > -1) {
			            tr[i].style.display = '';
			          } 
			          else if (tr[i].getElementsByTagName('td')[3].innerHTML.toUpperCase().indexOf(filter) > -1) {
			            tr[i].style.display = '';
			          }  
			          else {
			            tr[i].style.display = 'none';
			          }
			        } 
			      }
			    
			  }
			}
