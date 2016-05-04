<script src="v/vspfiles/templates/253/js/jquery-1.11.1.min.js"></script> 

<!--<script type="text/javascript" src="v/vspfiles/templates/253/js/bootstrap.min.js"></script>
-->
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

 <script type="text/javascript">
            var $jQueryModern = jQuery.noConflict(true);
        </script>

<script>
$(document).ready(function () {

   $('#360view').popup({
        pagecontainer: '.container',
        transition: 'all 0.3s'
    });

});

$jQueryModern(document).ready(function(e) {
      var doog= $jQueryModern('#mediafarmplugin').nextAll('br').remove();
	//$jQueryModern('#altviews').after('<div class="inserted_div"></div>');
	$jQueryModern('#mediafarmplugin').next('a').appendTo('.inserted_div');
	$jQueryModern('#mediafarmplugin').next('table').appendTo('.inserted_div');
	$jQueryModern('#product_photo_zoom_url').wrap('<div id="product_div">');
	
	if( $jQueryModern('#mediafarmplugin').length == 1 )
		{
			$jQueryModern('#product_div .spining').remove();
			$jQueryModern('#product_div').hide();
		}
	
    if ($jQueryModern('#spinID').length == 1) {
        $jQueryModern('#mediafarmplugin, #product_div').append("<span class='spining'><a class=\"initialism 360view_open\"  href=\"#360view\"><img src='http://expressmedals.comv/vspfiles/templates/253/images/360_view_icon.png'></a></span>");
        $jQueryModern('#spinID').appendTo('.spinnng_inner');
		
		//Michael Holroyd CODE
                var spinUrl = $jQueryModern("#spinID").attr("src"); 
                var currentWidth = Math.min( $(window).width(), $(window).height() );
		var mobilespin = false;
                if(currentWidth <= 400) {
			$jQueryModern("#spinID").height(200).width(200).attr("src",spinUrl+"&s="+200);
			mobilespin = true;
		  } else {
			$jQueryModern("#spinID").height(465).width(465).attr("src",spinUrl+"&s="+465);
			mobilespin = false;
		  }
		
		window.onresize = function(e){
		  var currentWidth = Math.min( $(e.target).width(), $(e.target).height() );
		  if(!mobilespin && currentWidth <= 400) {
			$jQueryModern("#spinID").height(200).width(200).attr("src",spinUrl+"&s="+200);
			mobilespin = true;
		  } else if(mobilespin && currentWidth > 400) {
			$jQueryModern("#spinID").height(465).width(465).attr("src",spinUrl+"&s="+465);
			mobilespin = false;
		  }
		}
		//Michael Holroyd CODE
    }
});
</script> 

<!--// Hidden field for check status form reset -->
<input type="hidden" id="engravingStatus" value="0" name="engravingStatus">


<script src="https://silviomoreto.github.io/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
</body>
</html>
