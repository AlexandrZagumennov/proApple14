export const sliders = () => {
	const swiperIndonesia = new Swiper('.products__carousel', {
		//slidesPerView: 3,
		spaceBetween: 24,
		loop: true,
		navigation: {
			nextEl: '.products__arrow_right',
			prevEl: '.products__arrow_left',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			1000: {
				slidesPerView: 3,
			},
		},
	});
};