// JavaScript Document 
var defaultProductPrice;

function loadEngravings() {
    if (location.pathname.indexOf("/expressmedal/index.php") != 0 || location.pathname.indexOf("/expressmedal/ring.php") != 0 || location.pathname.indexOf("/expressmedal/trophy.php") != 0 || location.pathname.indexOf("_p") != -1) {
        var product_code = getProductCode();
        
    }

}


function show_hide_engraving_button() {
    var show = true;
    $('select').each(function (index, element) {
        var val = $(this).find("option:selected").text();
        if (val.toLowerCase().indexOf('no engraving') != -1) {
            show = false;
        } else {
            show = true;
        }
        var val1 = $(this).find("option:contains('DO NOT add Engraving')").text();
        if (val1.toLowerCase().indexOf('do not add engraving') != -1) {
            show = false;
        }

    });

    if (show == true) {
        $('#show_engravings').css('display', 'block');
    } else {
        $('#show_engravings').css('display', 'none');
    }
}

function show_engraving_button_nick() {
    var ret = false;
    $('select').each(function (index, element) {
        var val = $(this).find("option:contains('NO Engraving')").text();
        var val1 = $(this).find("option:contains('DO NOT add Engraving')").text();
        if (val.toLowerCase().indexOf('no engraving') != -1) {
            ret = true;	
			}
			
        if (val1.toLowerCase().indexOf('no engraving') != -1) {
            ret = true;
            $('#show_engravings').css('display', 'none');
            //alert('do not add engraving');
        }
    });
    return ret;
}


function getQueryString(sVar) {
    urlStr = window.location.search.substring(1);
    sv = urlStr.split("&");
    for (i = 0; i < sv.length; i++) {
        ft = sv[i].split("=");
        if (ft[0] == sVar) {
            return ft[1];
        }
    }
}

function getProductCode() {
    var product_code = "";
    if (location.pathname.indexOf("/expressmedal/index.php") != 0 || location.pathname.indexOf("/expressmedal/trophy.php") != 0 || location.pathname.indexOf("/expressmedal/ring.php") != 0)  {
        //product_code = getQueryString("ProductCode");
		product_code = $('.product_code').text();
    } else {
        var url = window.location.pathname;
        var filename = url.substring(url.lastIndexOf('/') + 1);
        var temp = filename.split(".");
        product_code = temp[0];
    }
    return product_code;
}


/*function getProductCode() {
    var product_code = "";
    if (location.pathname.indexOf("/ProductDetails.asp") != -1) {
        product_code = getQueryString("ProductCode");
    } else {
        var url = window.location.pathname;
        var filename = url.substring(url.lastIndexOf('/') + 1);
        var temp = filename.split(".");
        product_code = temp[0];
    }
    return product_code;
}*/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
function engravingPopUp() {
    $('#popup1_qty').val($('.v65-productdetail-cartqty').val());
    $('#spn_popup1_qty').text($('.v65-productdetail-cartqty').val());
    show_hide_popup1_options($('.v65-productdetail-cartqty').val())
    $('#popup1').css('display', 'block');
    $('#popup2').css('display', 'none');
    $('#popup3').css('display', 'none');
    $("#engravingpopup").bPopup({
        closeClass: 'b-close'
    });
    var temp = $('#engravingpopup').css('top').split('p');
    var val = parseInt(temp[0]) - 70;
    if (val > 70) {
        $('#engravingpopup').css('top', val + 'px');
    }
    if ($('.v65-productdetail-cartqty').val() > 1) {
        $("#tr_popup1_options").show();
    } else {
        $("#tr_popup1_options").hide();
    }
    $('#popup1_yes').attr('checked', true)


}

function show_popup2() {
    if ($('#popup1_yes').is(':checked')) {
		$('.v65-productdetail-cartqty').val($('#popup1_qty').val());
        $('#popup1').css('display', 'none');
        $('#popup2').css('display', 'block');
        $('#popup3').css('display', 'none');
    }
    if ($('#popup1_no').is(':checked')) {
		$('.v65-productdetail-cartqty').val($('#popup1_qty').val());
        $('#popup1').css('display', 'none');
        $('#popup2').css('display', 'none');
        $('#popup3').css('display', 'block');

        $('#popup1_yes').prop('checked', true);
    }

    

}

function save_engraving() {
	$('engravings_1').val('1');// Check for pop field hidden status
	var str = "";
    var qstr = "";
    var qty = $(".v65-productdetail-cartqty").val();
    var no_of_lines = $("#no_of_lines").val();
    for (var i = 1; i <= qty; i++) {
        if ($('#allSame:checked').length > 0) {
            m = 1;
        } else {
            m = i;
        }
        for (var j = 1; j <= no_of_lines; j++) {
            if (j == no_of_lines) {
                str = str + $("#line_" + m + "_" + j).val() + "__";
            } else {
                str = str + $("#line_" + m + "_" + j).val() + ":";
            }
        }
    }

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function show_hide_popup1_options(val) {
    $('#spn_popup1_qty').text(val);
    if (parseInt(val) <= 1 || val == "" || val == "undefined" || val == undefined) {
        $("#tr_popup1_options").css("display", "none");
    } else {
        $("#tr_popup1_options").css("display", "table-row");
    }
}