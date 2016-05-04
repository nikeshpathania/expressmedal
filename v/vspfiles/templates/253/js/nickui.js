// Fxing Small Device product page Layout 
$(document).ready(function(e) {
  
	var w= $(window).width();
	//alert(w);
	if(w>=300 && w<=768){
		$('table#options_table').parent().addClass('xsmall');
		$('#doogmaPlugin').parent().addClass('xsmall_img');
			//alert("HTML: " + $("#options_table").html());
		$('select, input[type="text"]').parent().addClass('leftTd');
		//$('table#options_table tr').find('td:gt(1)').addClass('newleftTd');​
		//manageTable();
		//alert(1);

	}
	else{
		$('table#options_table').parent().removeClass('xsmall');
		$('#doogmaPlugin').parent().removeClass('xsmall_img');
		$('select, input[type="text"]').parent().removeClass('leftTd');
		}
$(window).resize(function(){

	var w= $(window).width();
	//alert(w);
	if(w>=300 && w<=768){
			$('table#options_table').parent().addClass('xsmall');
			$('#doogmaPlugin').parent().addClass('xsmall_img');
			$('select, input[type="text"]').parent().addClass('leftTd');
			//$('table#options_table tr').find('td:gt(1)').addClass('newleftTd');​
			//alert(w);
			
			
			
		}
		else{
		$('table#options_table').parent().removeClass('xsmall');
		$('#doogmaPlugin').parent().removeClass('xsmall_img');
		$('select, input[type="text"]').parent().removeClass('leftTd');
		}
	});	
});
