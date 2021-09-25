var paymentOptionActive = sessionStorage.getItem("payment-option-active") ?? 'credit-card',
	makeActive = function(paymentOptionActive) {
		$('.payment-option').removeClass('payment-option--active');
		$('.payment-option[data-type="' + paymentOptionActive + '"]')
			.addClass('payment-option--active');		
	},
	open = function(targets) {
		let timeline = anime.timeline(),
			hasPaymentActiveOption = sessionStorage.getItem("payment-option-active") != null,
			speed = 100;

		console.log(hasPaymentActiveOption);

		if(hasPaymentActiveOption) {
			timeline.add({
				targets: '.payment-page__logo',
				scale: 0,
				delay: anime.stagger(speed)
			});
		}

		timeline.add({
			targets: targets,
			scale: [0, 1.3],
			delay: anime.stagger(speed)
		});
	},
	openPaymentLogos = function(option) {
		switch(option) {
			case "credit-card": 
				open('#visa, #mastercard');
				break;
			case "ewallet": 
				open('#gcash, #grabpay');
				break;
			case "online-banking": 
				open('#banchnet, #bpi');
				break;
			case "pay-later": 
				open('#gcash, #grabpay, #banchnet, #bpi, #visa, #mastercard');
				break;
		}
	};

$(document).ready(function() {
	// openPaymentLogos(paymentOptionActive);
	// makeActive(paymentOptionActive);
});

$('.payment-option').click(function() {
	let option = $(this).data('type');

	openPaymentLogos(option);
	
	sessionStorage.setItem("payment-option-active", option);
	makeActive(option);
});