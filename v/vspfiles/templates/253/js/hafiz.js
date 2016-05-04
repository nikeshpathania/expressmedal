if (location.pathname == "/2_1_2_Epoxy_Resin_Basketball_Medal_p/cem-303testb.htm" || location.pathname == "/2_1_2_Epoxy_Resin_Basketball_Medal_P/cem-303testb.htm" || location.pathname == "/2_Column_Snow_Boarding_Trophy_p/2-pc146-f1022test.htm" || location.pathname == "/2_Column_Snow_Boarding_Trophy_P/2-pc146-f1022test.htm" ){
//	if(location.pathname.indexOf("/ProductDetails.asp") != -1 || location.pathname.indexOf("-p") != -1 || location.pathname.indexOf("product-p") != -1)
//{
			if( $('#doogmaPlugin').length == 1 )
			{
				$('#options_table').parent().before($('<td></td>').append($('#doogmaPlugin')));
			}	
			$('#options_table').parent().before($('<td></td>').append($('#pro_image')));
			$('table#v65-product-parent table:eq(0)').attr({'id':'image_area'});
			$('#image_area table:eq(0)').attr({'id':'social_media'});
			$('.vCSS_img_quantity_discounts').parent('a').addClass('discount_btn');
//			$('#v65-product-wishlist-button').insertBefore('td.qty_btn');
			$('table.colors_pricebox:eq(0)').attr({'id':'colors_pricebox_1'});
			$('#colors_pricebox_1 table:eq(1)').attr({'id':'price_control'});
			$('table.colors_pricebox:eq(1)').attr({'id':'colors_pricebox_2'});
			jQuery("span[itemprop=description]").css("display","none");
			$('#price_control').parent().addClass('price_section');
			$('#price_control').parent().addClass('price_section');
			$('#price_control').insertAfter('.vCSS_input_addtocart');
			$('#price_control i').insertAfter('.productnamecolorLARGE');
			$('.quant').parent('td').addClass('quantitytd');
			$('span:contains("Qty")').addClass('quant');
			$('.v65-productdetail-cartqty').parent().addClass('qty_btn');
			$('.vCSS_input_addtocart').parent().addClass('cart_section');
			$('#v65-product-wishlist-button').insertAfter('.vCSS_input_addtocart');
			$('.discount_btn').insertAfter('.vCSS_input_addtocart');
			$('#options_table').find('img').parent('td').addClass('options_text');
 			$('.colors_descriptionbox').parent().closest("table").attr("id","description_area");
			$('table#social_media').insertAfter('#doogmaPlugin');
			$('.vCSS_img_email_a_friend').parent('a').addClass('friend_email');
			$('.friend_email').insertBefore('#v65-share-buttons-container');
			
			if( $('#doogmaPlugin').length == 0 )
			{
				$('#doogmaPlugin').remove();
				$("#listOfErrorsSpan").next('table').detach();
				$("#colors_pricebox-2").css("margin-top",'0px');
				//$('table#colors_pricebox-2').detach();
				$('table#image_area').css('display','block');
			}
			
}