// JavaScript Document
// Get lenth of .colors_pricebox Table
// addClass into qty table
// .colors_pricebox Table InsertAfter Option_Table 
// Change dynamic class name of colors_pricebox Table
// Insert Description to after price Offer
// Inser Product code to after Product Heading 
var DefattachmentImgSrc;
var DefribbonImgSrc;
var DefmedalImgSrc;
function loadDesignerTemp(){
klonTable();		
changeQtyTable();	
addCointainerForText();
insertAfterItems();
engravingTrInsert();
addSelectOptionId();
storeDefaultImagePaths();
}

// From  Harry 
function closed_popup(){
		
		
		$('#line1').val('');
        $('#line2').val('');
        $('#line3').val('');
		$('#optional_engraving').prop('selectedIndex',0);
		// restore option engraving select box to its default selection //
		var statuseEgraving =$("#engravingStatus").val();
		//alert(statuseEgraving);
		if(statuseEgraving == 1){
			setTimeout(function(){ resetForm2(); },1000);
			$("#show_engravings").hide();
			$("#engravingStatus").val('0');
            $("#cloned_btn").css('display', 'none');
            $(".vCSS_input_addtocart").show();			
		}
		else
		{
			$("#cloned_btn").css('display', 'none');
			$("#show_engravings").hide();
            $(".vCSS_input_addtocart").show();
		}
				
	if($('#popup2').css('display')=='block'){
		$('.engraving_option input').each(function () {
        var idStringFull = ($(this).attr('id'));
        var idValueInteger = (Number(idStringFull.match(/\d+/)) + 1); // get numbers
       // $("#line" + idValueInteger).attr('name', $(this).attr('name'));
        var did = "line" + idValueInteger;
        var dvalue = ($(this).val());
        var completeInput = '<input name=' + $(this).attr('name') + ' value="" id="' + did + '"/>';
        //$("#line" + idValueInteger).replaceWith(completeInput);
        $("#" + $(this).attr('id') + "_display").html($(this).val());
		$(this).val('');
		});	
	}

}
function clearPopUp(){
        $('#line1').val('');
        $('#line2').val('');
        $('#line3').val('');		
	if($('#popup2').css('display')=='block'){
		$('.engraving_option input').each(function () {
        var idStringFull = ($(this).attr('id'));
        var idValueInteger = (Number(idStringFull.match(/\d+/)) + 1); // get numbers
        //$("#line" + idValueInteger).attr('name', $(this).attr('name'));
        var did = "line" + idValueInteger;
        var dvalue = ($(this).val());
        var completeInput = '<input name=' + $(this).attr('name') + ' value="" id="' + did + '"/>';
       // $("#line" + idValueInteger).replaceWith(completeInput);
        $("#" + $(this).attr('id') + "_display").html($(this).val());
		$(this).val('');
		});	
	}

}

/* Use For Add to cart Validation Purpose */
function showalert()
{
	alert("No engraving text defined:\n\nPlease click on the 'ADD ENGRAVING' button and specify the text for laser engraving on this item.");
	return false;
}

$( document ).ready(function() {

$tmc = $(".vCSS_input_addtocart").clone().attr('id', 'cloned_btn').show();
$tmc.insertAfter(".vCSS_input_addtocart"); 
$("#cloned_btn").removeAttr('onclick','');

$("#cloned_btn").html('');


$("#cloned_btn").replaceWith('<img src="/v/vspfiles/templates/253/images/buttons/btn_addtocart.gif" id="cloned_btn" class="btnN" name="btnaddtocart" alt="Add to cart" border="0" onclick="showalert();">');
$("#cloned_btn").css('float','right');
$("#cloned_btn").css('display','none');

$('#popup1_no').click(function() {
	if ($(this).is(':checked')){		
            $("#engravingStatus").val('0');
            $("#cloned_btn").css('display', 'none');
            $(".vCSS_input_addtocart").show();
       	} 

});

$('select#optional_engraving').change(function () {
 var textstring = $(this).find("option:selected").text();
        var result = textstring.toLowerCase().indexOf('no engraving');
        if (parseInt(result) == -1) {
            $(".vCSS_input_addtocart").hide();
            $("#cloned_btn, #show_engravings").css('display', 'block');
            $("#engravingStatus").val('1');
        } else {
            $("#engravingStatus").val('0');
            $("#cloned_btn, #show_engravings").css('display', 'none');
            $(".vCSS_input_addtocart").show();
        }
	
});
/* End Validation Purpose*/

$(".vCSS_input_addtocart").click(function(){
	
		var reset_status = $("#engravingStatus").val();
		//alert(reset_status); return false;
	   if(reset_status == 0)
	   {
		   setTimeout(function(){ resetForm1(); },3000);
			//resetForm1();
			clearPopUp();
			$('#options_table input').val('');
		}
	}); 
	$('#optional_engraving').change(function(){
		
		//var val = $(this).find("option::selected").text();
		var val = $('option:selected', $(this)).text();
		//alert(val.toLowerCase());
		 if (val.toLowerCase().indexOf('no engraving') != -1) {
           clearPopUp();
        }
		else{
			//alert('no');
		}
			
	});
	
	
	
	
// For Engraving Button
if (show_engraving_button_nick()) {
            $(".v65-productdetail-cartqty").before('<img onclick="engravingPopUp()" id="show_engravings" src="http://' + document.domain + '/v/vspfiles/images/Add-engraving-button.png" alt="Add Engraving" style="float:right" />');
            show_hide_engraving_button();

            $('div[itemprop="offers"]').find('b').each(function (index, element) {
                if ($(this).text().indexOf("Special Instructions") != -1 || $(this).text().indexOf("Custom") != -1) {
                    $(this).text("");

                }
            });
            var re = new RegExp('enable_engraving_popup_feature', 'g');
            $('div[itemprop="offers"]').html($('div[itemprop="offers"]').html().replace(re, ''));

            $("input[name=btnupdateprice]").css('display', 'none');
            var product_price = $('.product_productprice').text().split('$')[1].replace(/,/g, '');
            defaultProductPrice = $('.product_productprice').find('b').find('span').text();

            $('select').change(function () {

                show_hide_engraving_button();
                var increment = 0;
                $('select').each(function (index, element) {
                    var recal_var = $(this).find("option:selected").text();
                    if (recal_var.indexOf('[Add $') > 0) {
                        var price_result = parseFloat(recal_var.split('$')[1].slice(0, -1).replace(/,/g, ''));
                        increment += price_result;

                    }

                });
                var new_price = parseFloat(product_price) + parseFloat(increment);
                $('.product_productprice').find('b').find('span').text("$" + new_price.toFixed(2));

            });
        }	
	
});

//var localdate = ShowLocalDate();
//var utcDate = ShowUTCDate();

function klonTable(){
if( $('#mediafarmplugin').length == 1 )
	{
		$('#product_photo_zoom_url').html('');
		$('#mediafarmplugin').insertAfter('#product_photo_zoom_url')
		$('#product_photo_zoom_url2').remove();
	}
	
var tablecount = $('.colors_pricebox').length;
$('.v65-productdetail-cartqty').parent().parent().parent().parent().addClass('qty_table');
$('.colors_pricebox').each(function(index, element) {		
		$(this).attr('id','table'+index );
	});
	if(tablecount>=2){
		$('#table0').insertAfter('#table1'); 
	}
}


function changeQtyTable(){
var table = $('.qty_table'), 
    div = $('<div />');
	$('td', table).each(function(i){
		$('<div class="col' + (i+1) + '" />').html($(this).html()).appendTo(div);
	});
	table.after(div).remove();
		$('.col1').parent().addClass('qty_table');
}
	
	
function addCointainerForText(){	
	$('td:contains("Click Add Engraving button after selecting this option to enter text details")').html(function (_, html){
		return  html.replace(/(Click Add Engraving button after selecting this option to enter text details)/g, '<small class="small_text">$1</small>')
		});
		
	$('.col1:contains("Qty:")').html(function (_, html){
		return  html.replace(/(Qty:)/g, '<span class="Qty_label">$1</span>')
		});
}

function insertAfterItems(){
	$("div[itemprop=offers]").insertAfter('.qty_table');
	$("span[itemprop=description]").insertAfter("span#product_description");
	$("div[itemprop=offers] i").insertAfter('.productnamecolorLARGE');
	
	$('.colors_pricebox').parent().addClass('rightTd');
	$('.rightTd').prev().addClass('leftTd');
	$('#options_table').find('img').parent('td').addClass('options_text');

	$('.rightTd #listOfErrorsSpan').detach();
	$('#vCSS_img_quantity_discounts').wrap('<span>');
	$('#v65-product-wishlist-button').wrap('<div class="image_control">');
	$('.vCSS_img_quantity_discounts').parent().insertAfter('#v65-product-wishlist-button');
}


function engravingTrInsert(){
	 $("input[name=btnupdateprice]").detach();
	 $("#options_table").find("input[type='text']").each(function (index, element) {
	   $(this).closest("tr input[type='text']").val('').attr('placeholder','Your engraving text here1');
	   //$(this).closest("tr").clone().appendTo('#popup2 .table').wrapAll('<table class="engraving_option" width="100%">');
	   $(this).closest("tr input[type='text']").val('').attr('placeholder','Your engraving text here');
	   $(this).closest("tr").css("display","none").addClass('no');
	   $(this).closest("tr input[type='text']").attr('id','line'+(index+1));
     });
	 
	 
	$('.engraving_option input').each(function(index, element) {
         $(this).attr('id','tags'+index );
		  $(this).attr('maxlength',25 );
		   var tagId = $(this).attr('id');
		   var indexCounter = (index + 1);
		   jQuery("#line"+indexCounter).val($(this).val());
		   $("#" + $(this).attr('id') + "_display").html($(this).val());
		   
		   
    });
	
 	$('.engraving_option input').change(function() {		
	
		var x = $("#tags0").val();
        var y = $("#tags1").val();
        var z = $("#tags2").val();
        $('#line1').val(x);
        $('#line2').val(y);
        $('#line3').val(z);
			
			$("#cloned_btn").css('display','none');
			$(".vCSS_input_addtocart").show();
			$("#engravingStatus").val('0');
	}); 

	/* For Medal Text*/
	/*var lineArr = ['CONFIGURE','ENGRAVING OPTION','TO PREVIEW HERE'];
	var medalhtml = '';
	for(var j=0;j<3;j++)
	{
		medalhtml += '<p style="font-size:9px"><strong><span id="tags'+j+'_display">'+lineArr[j]+'</span></strong></p>';
	}	
	$('#medal_text').html(medalhtml);*/
	
	
	//var reff = $('#options_table').find('tr').slice(10,11).find('input[type="text"]').val();
	//alert(reff);
	//$('.popup3_row1').next().html('<p style="color:#ff0000">' +localdate+ ' Refference '+ reff +' </p>');
		

	//$('.engraving_option').after('<div style="text-align:right"><input type="image" src="/v/vspfiles/images/update_button_popup.png"  onclick="save_engraving()" value="Save Engravings" id="save_engraving" class="b-close single_add_to_cart_button button alt"></div>');
	 
	// $('#options_table tr:last').after('<tr style="display:none"><td colspan="3" id="tdHtml"><input type="text" name="line1" id="line1" value="">	<input type="text" name="line2" id="line2" value="">	<input type="text" name="line3" id="line3" value=""></td></tr>');
	 
	//alert(1);
	

}


function SelectChangeHandler()
{
   console.log("sdsakdjsak;dsl;kadksadjksad");
	var selctId = $(this).attr('id');
	var productCode = getProductCode().toLowerCase();
	var folderURL ='http://expressmedalscom.ipage.com/product_designers/'+productCode+'/';
		
	if (selctId == 'medal')
	  {	
		  var name = $( "#medal option:selected" ).text();
          var img = getImageName(name,this.value);            
          var imgSrc = folderURL+selctId+"/"+img+ '.png';       
		  $('#medal_block img')[0].src = imgSrc;
		  $('#medal_block img')[0].alt = img;
		 
	  }
	if (selctId == 'ribbon')
	  {

	       var name = $( "#ribbon option:selected" ).text();
	       var img = getImageName(name,this.value);           
		  $('#ribbon_block img')[0].src = folderURL+selctId+"/"+img+ '.png';
		  $('#ribbon_block img')[0].alt= img;
	  }	
	if (selctId == 'ribbon_attachment')
	  {
		  var name = $( "#ribbon_attachment option:selected" ).text();
		  var img = getImageName(name,this.value);
		  $('#ribbon_attachment_block img')[0].src = folderURL+selctId+"/"+img+ '.png';
		  $('#ribbon_attachment_block img')[0].alt = img;
	  }	  
}

function getImageName(name,value)
{

		if (parseFloat(name.indexOf('['))<0) {
			var res = name;

           var name2 = res.replace(/ \/ /g, '_');
           var name3 = name2.replace( /\s/g, "_");
           var name4 = name3.replace( /"/g, "");
           var name5 = name4.replace(/\//g,"_");
           var name6 = name5.replace(/-/g,"_");
           
         
           //alert(a.replace( /\s/g, "")); 
            return 'w_'+value+'_a_'+name6.toLowerCase();

		}else
		{
			var res = name.slice(0,parseFloat(name.indexOf('['))-1);

           var name2 = res.replace(/ \/ /g, '_');
           var name3 = name2.replace( /\s/g, "_");
           var name4 = name3.replace( /"/g, "");
           var name5 = name4.replace(/\//g,"_");
           var name6 = name5.replace(/-/g,"_");                  
         
           return 'w_'+value+'_a_'+name6.toLowerCase();
		}

    
}


function addSelectOptionId()
{
	$('td:contains("Medal Color")').next().next().find('select').attr('id','medal');
	$('td:contains("Style & Color")').next().next().find('select').attr('id','ribbon');
	$('td:contains("Ribbon Attach Option")').next().next().find('select').attr('id','ribbon_attachment');
	$('td:contains("Optional Engraving")').next().next().find('select').attr('id','optional_engraving');
	
	$('td:contains("Medal Color")').next().next().find('select').change(SelectChangeHandler);
	$('td:contains("Style & Color")').next().next().find('select').change(SelectChangeHandler);
	$('td:contains("Ribbon Attach Option")').next().next().find('select').change(SelectChangeHandler);
	
}


	
/*function ShowLocalDate() {
	var dNow = new Date();
	var localdate= (dNow.getMonth()+1) + '/' + dNow.getDate() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
	$('#currentDate').text(localdate)
	return localdate;
}

function ShowUTCDate() {
	var dNow = new Date();
	var utc = new Date(dNow.getTime() + dNow.getTimezoneOffset() * 60000)
	var utcdate= (utc.getMonth()+1) + '/' + utc.getDate() + '/' + utc.getFullYear() + ' ' + utc.getHours() + ':' + utc.getMinutes();
	return utcdate;
}
*/
function storeDefaultImagePaths()
{
			var productCode = getProductCode().toLowerCase();
	var folderURL ='http://expressmedalscom.ipage.com/product_designers/'+productCode+'/';
	
	
            var medalName = $( "#medal option:selected" ).text();

            var medalImg = getImageName(medalName,$( "#medal option:selected" ).val());
         
          DefmedalImgSrc = folderURL+"medal"+"/"+medalImg+ '.png';
          
		  
	       var ribbonName = $( "#ribbon option:selected" ).text();
	       var ribbonImg = getImageName(ribbonName,$( "#ribbon option:selected" ).val());
          DefribbonImgSrc = folderURL+"ribbon"+"/"+ribbonImg+ '.png';
		 
		  var attachmentName = $( "#ribbon_attachment option:selected" ).text();
		  var attachmentImg = getImageName(attachmentName,$( "#ribbon_attachment option:selected" ).val());
		 DefattachmentImgSrc = folderURL+"ribbon_attachment"+"/"+attachmentImg+ '.png';
	    console.log("medal src"+DefmedalImgSrc);
	console.log("ribbon src"+DefribbonImgSrc);
	console.log("ribbon_attachment src"+DefattachmentImgSrc);
}
function resetForm1(){
	$('#divText').hide();// hide Live Site Medal Text
	$("#show_engravings").hide(); // hide engraving button //
	var productCode = getProductCode();
	//alert(DefmedalImgSrc);
	console.log("medal src"+DefmedalImgSrc);
	console.log("ribbon src"+DefribbonImgSrc);
	console.log("ribbon_attachment src"+DefattachmentImgSrc);


	var medalfolderURLimg =DefmedalImgSrc;
	$("#medal_block img").attr("src", medalfolderURLimg);
	var ribbonfolderURLimg =DefribbonImgSrc;
	$("#ribbon_block img").attr("src", ribbonfolderURLimg);
	var ribbon_attachmentURLimg =DefattachmentImgSrc;
	$("#ribbon_attachment_block img").attr("src", ribbon_attachmentURLimg);
	$('.product_productprice').find('b').find('span').text(defaultProductPrice);	
	
	/* For Medal Text*/
	
/*	var lineArr = ['CONFIGURE','ENGRAVING OPTION','TO PREVIEW HERE'];
	var medalhtml = '';
	for(var j=0;j<3;j++)
	{
		medalhtml += '<p><strong><span id="tags'+j+'_display">'+lineArr[j]+'</span></strong></p>';
	}
	$('#medal_text').html('');
	$('#medal_text').html(medalhtml);*/
	/* For Medal Text*/
	
$.fn.clearForm = function() {
  return this.each(function() {
    var type = this.type, tag = this.tagName.toLowerCase();
	var boxid = this.id;
    if (tag == 'form')
      return $(':input',this).clearForm();
    if ( type == 'text')
	{
		var boxname = this.name;
		if( boxname.indexOf('QTY') >=0 ) // for qty input box //
		{		
			this.value = '1';
		}
		
		if(this.id == 'line1')
		{
			$(this).val('');//CONFIGURE
			$(this).attr('placeholder','Your engraving text here');		
			
		}
		if(this.id == 'line2')
		{
			$(this).val(''); //ENGRAVING OPTION
			$(this).attr('placeholder','Your engraving text here');
		}
		if(this.id == 'line3')
		{
			$(this).val(''); //TO PREVIEW HERE
			$(this).attr('placeholder','Your engraving text here');
		}
	}  
	else if (type == 'radio')
      this.checked = false;
   else if (tag == 'select')
      this.selectedIndex = 0;
  });
};
	$('#vCSS_mainform').clearForm();
}


/* Validation */
    var specialKeys = new Array();
        specialKeys.push(8); 
        $(function () {
            $("#popup1_qty,.v65-productdetail-cartqty").bind("keypress", function (e) {
                var keyCode = e.which ? e.which : e.keyCode
                var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
                $(".error").css("display", ret ? "none" : "inline");
                return ret;
            });
            $("#popup1_qty,.v65-productdetail-cartqty").bind("paste", function (e) {
                return false;
            });
            $("#popup1_qty,.v65-productdetail-cartqty").bind("drop", function (e) {
                return false;
            });
        });

/* /Validation */
/* .Resest Form2 */
function resetForm2(){	
$.fn.clearForm = function() {
  return this.each(function(index) {
   var type = this.type, tag = this.tagName.toLowerCase();
	var boxid = this.id;
   if (tag == 'form')
	{
      return $(':input',this).clearForm();
	}     
   if (tag == 'select')
   {
     if( $.trim(boxid) == 'optional_engraving')
	  {
		  this.selectedIndex = 0;
	  }
	  
	}  
  });
};
	$('#vCSS_mainform').clearForm();
}

/* /Resest Form2 */