$('.pricing-comparison-table-toggle').click(function() {
	if($('#pricing-comparison').hasClass('show')) {
		$(this).find('i').removeClass('lni-minus')
			.addClass('lni-plus');
		$(this).find('span').text('Show Comparison');
		
		$('#pricing-comparison').removeClass('show');

		setTimeout(() => {
			$('#pricing-comparison').addClass('d-none');
		}, 250);
	}
	else {
		$(this).find('i').removeClass('lni-plus')
			.addClass('lni-minus');
		$(this).find('span').text('Hide Comparison');

		$('#pricing-comparison').removeClass('d-none');
		
		setTimeout(() => {
			$('#pricing-comparison').addClass('show');
		}, 250);

	}
});