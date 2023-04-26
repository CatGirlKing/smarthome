jQuery(document).ready(function($){
	//create the slider
	$('.cd-testimonials-wrapper').flexslider({
		selector: ".cd-testimonials > li",
		animation: "slide",
		controlNav: false,
		slideshow: false,
		smoothHeight: true,
		start: function(){
			$('.cd-testimonials').children('li').css({
				'opacity': 1,
				'position': 'relative'
			});
		}
	});
	//调用api
	$(document).ready(function() {
		$('#btn').click(function() {
			$.ajax({
				type: 'GET',
				url: 'https://iot.cn-shanghai.aliyuncs.com/?Format=JSON&Version=2018-01-20&AccessKeyId=LTAI5tJUfREbaCbG3fenS6zk&SignatureVersion=1.0&SignatureMethod=HMAC-SHA1&SignatureNonce=8e8c1cd6-e32a-11ed-a71f-005056c00008&Timestamp=2023-04-25T05%3A32%3A23Z&Action=QueryDeviceOriginalPropertyStatus&RegionId=cn-hangzhou&PageSize=5&IotId=6qDzRGS5Ra4PjUj2kbRzicci00&Asc=1&IotInstanceId=iot-06z00ep2pjifrby&Signature=tFULUNXv5BppJVVm%2FKAjV4lhCUU%3D',
				success: function(response) {
					$('#response').text(response);
				}
			});
		});
	});

	//open the testimonials modal page
	$('.cd-see-all').on('click', function(){
		$('.cd-testimonials-all').addClass('is-visible');
	});

	//close the testimonials modal page
	$('.cd-testimonials-all .close-btn').on('click', function(){
		$('.cd-testimonials-all').removeClass('is-visible');
	});
	$(document).keyup(function(event){
		//check if user has pressed 'Esc'
    	if(event.which=='27'){
    		$('.cd-testimonials-all').removeClass('is-visible');	
	    }
    });
    
	//build the grid for the testimonials modal page
	$('.cd-testimonials-all-wrapper').children('ul').masonry({
  		itemSelector: '.cd-testimonials-item'
	});
});