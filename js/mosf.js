$('document').ready(function(){
	$('.popup-btn').on('click',function(){
		var popup = $(this).attr('popup-target');
		$(popup).show();
		$('.overlay').attr('popup-target',popup);
		$(".overlay").show();
	})
	$('.overlay').on('click',function(){
		var popup = $(this).attr('popup-target');
		$(popup).hide();
		$(".overlay").hide();
	})
	$('.sidebar-btn').on('click',function(){
		$('.sidebar').show();
		$('.overlay').attr('popup-target','.sidebar');
		$(".overlay").show();
	})
})