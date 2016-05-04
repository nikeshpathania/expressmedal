<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Expressmedal Medal</title>
 <script src="v/vspfiles/js/product_details.js"></script>  
     

        <link rel="stylesheet" href="v/vspfiles/templates/253/css/main.css">
        <link href="v/vspfiles/templates/253/css/imports.css" rel="stylesheet">
        <link href="v/vspfiles/templates/253/css/push-menu/component.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="v/vspfiles/templates/253/css/productdetails.css">
        <link rel="stylesheet" type="text/css" href="v/vspfiles/templates/253/css/softaddtocart.css">
        <link href="v/vspfiles/designer_template/designer_template.css" rel="stylesheet">
        <link href="v/vspfiles/designer_template/bootstrap-select.min.css" rel="stylesheet">

        <!--[if lt IE 9]>
        <script src="v/vspfiles/templates/253/js/html5shiv.js"></script>
        <![endif]-->
<!-- jQuery -->
<!--<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> 
-->
<script src="v/vspfiles/templates/253/js/jquery-1.11.1.min.js"></script>


<script src="v/vspfiles/designer_template/designer.js"></script>
<script src="v/vspfiles/js/jquery.bpopup.min.js"></script>
<script src="v/vspfiles/designer_template/nick-ui2016.js"></script>

<!-- jQuery Popup Overlay-->
<script src="v/vspfiles/designer_template/jquery.popupoverlay.js"></script>



</head>

<body  class="cbp-spmenu-push" onLoad="loadEngravings()">
<div id="engravingpopup">
<form class="eng_form">
<span class="button b-close" onClick="closed_popup()"></span>
  <div id="popup1" style="display:block">
  
    <table width="100%">
      <tbody>
       
        <tr style="padding-top:30px;">
          <td colspan="2">
            <span class="span_text">Please confirm item quantity, on which to add custom engraving:</span> 
            <span class="qty_text" >Qty:&nbsp;
            <input type="text" id="popup1_qty" name="popup1_qty" size="4" style="text-align:center" onKeyUp="show_hide_popup1_options(this.value);" value="1">
            </span></td>
        </tr>
        <tr id="tr_popup1_options">
          <td colspan="2" style="padding:10px 0 0" ><span style="padding-right:31px;" class="left">Is engraving text the same for all <span id="spn_popup1_qty"></span> medals?</span>
          <span class="radioholder" style="float:right">
            <input id="popup1_no" name="popup1_options" type="radio" >
            No
            <input id="popup1_yes" name="popup1_options" type="radio" checked="true" />
            Yes </span></td>
        </tr>
        <tr style="padding-top:20px">
          <td align="right" colspan="2" ><img onClick="show_popup2()" src="/v/vspfiles/images/next_button_popup.png" alt="update"></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div id="popup2" style="display:none">
    <div class="table" style="margin-bottom:0">
      <table width="100%">
        <tr>
          <td><div class="popup_title">Step2: Engraving Details</div></td>
          <td><img src="/v/vspfiles/images/logo.png" style="float:right;margin-left:50px"></td>
        </tr>
        <tr style="padding-top:15px; padding-bottom:10px">
          <td colspan="2"><span style="font-size:16px;">Please enter engraving details below. </span><span style="font-size:9pt">(Max. 25 characters per line)</span><br></td>
        </tr>
		<input type="hidden" id="engravings_1" value="0" name="engravings">
      </table> 
      <table width="100%" class="engraving_option">
          <tr>
            <td valign="top" align="right" class="options_text"><img width="1" border="0" height="4" src="/v/vspfiles/templates/253/images/clear1x1.gif"><br>
              Engraving line1: </td>
            <td></td>
            <td><input type="text" maxlength="25" size="" value="" name="name1" placeholder="Your engraving text here1" >
              <br></td>
          </tr>
          <tr>
            <td valign="top" align="right" class="options_text"><img width="1" border="0" height="4" src="/v/vspfiles/templates/253/images/clear1x1.gif"><br>
              Engraving line2: </td>
            <td></td>
            <td><input type="text" maxlength="25" size="" value="" name="name1" placeholder="Your engraving text here1" >
              <br></td>
          </tr>
          <tr>
            <td valign="top" align="right" class="options_text"><img width="1" border="0" height="4" src="/v/vspfiles/templates/253/images/clear1x1.gif"><br>
              Engraving line3: </td>
            <td></td>
            <td><input type="text" maxlength="25" size="" value="" name="name1" placeholder="Your engraving text here1" >
              <br></td>
          </tr>
        </table>
    </div>
    <div style="text-align:right"><input type="image" src="/v/vspfiles/images/save-text-and-return.png"  onclick="save_engraving();" value="Save Engravings" id="save_engraving" class="b-close single_add_to_cart_button button alt"></div>
  </div>
  <div id="popup3" style="display:none">
    <div style="position:relative;width:100%"> 
      <div>
        <table width="100%">
          <tr class="popup3_row1">
            <td><div class="popup_title">Step2: Email Engraving Details for each Item</div></td>
            <td><img src="/v/vspfiles/images/logo.png" style="float:right;margin-right:15px"></td>
          </tr>
          <tr>
          <td colspan="2">
          <label id="currentDate">
          </td>
          </tr>
          
          <tr style="padding-top:15px;">
            <td colspan="2"><span style="font-size:16px;">For your convenience, simply email all of  your engraving text detail to  &nbsp; <br/><a style="color:blue;" target="_top" href="mailto:text@expressmedals.com">Text@Expressmedals.com</a> after you complete your order.</span></td>
          </tr>
          <tr style="padding-top:15px;">
            <td colspan="2"><span style="font-size:16px;">Please include Your Order # in the Subject line of your email.</span></td>
          </tr>
          <tr style="padding-top:15px;">
            <td colspan="2"><span style="font-size:16px;">Order number will be displayed after checkout and on your copy of the invoice.</span></td>
          </tr>
        </table>
      </div>
      <div style="padding-top: 20px; position: relative; margin: 0px auto; width: 100%; text-align: right;">
        <input type="image" src="/v/vspfiles/images/returntoproduct-page.png" style="padding-left:10px;padding-right:10px;padding-top:1px;padding-bottom:1px;cursor:pointer;text-align:right" class="b-close">
      </div>
    </div>
  </div>
</form>
</div>

<!--<ul class="navgation">
<li><a href="index.php">Medal</a></li>
<li><a href="trophy.php">Trophy</a></li>
<li><a href="ring.php">Ring</a></li>

</ul>-->