window.onload = function () {
	gsap.to('#preloader', {
		autoAlpha: 0,
		duration: 0.4,
		delay: 0.3
	});
}

document.addEventListener('DOMContentLoaded', function () {

	gsap.registerPlugin(ScrollTrigger);

	//  /*---------------------------------*/
	//	 * Button Download CV
	//	/*---------------------------------*/

	let tlBtn = gsap.timeline({yoyo: true, repeat: -1, defaults: { duration: 2, ease: 'power2.in'}});

	tlBtn
	.to('#download-cv span:nth-of-type(1)', {'left': '25%', 'width': '50%'}, 'one')
	.to('#download-cv span:nth-of-type(2)', {'right': '25%', 'width': '50%'}, 'one')
	.to('#download-cv span:nth-of-type(3)', {'bottom': '25%', 'height': '50%'}, 'one')
	.to('#download-cv span:nth-of-type(4)', {'top': '25%', 'height': '50%'}, 'one')
	.to('#download-cv span:nth-of-type(1)', {'left': '100%', 'width': '0%', ease: 'power2.out'}, 'two')
	.to('#download-cv span:nth-of-type(2)', {'right': '100%', 'width': '0%', ease: 'power2.out'}, 'two')
	.to('#download-cv span:nth-of-type(3)', {'bottom': '100%', 'height': '0%', ease: 'power2.out'}, 'two')
	.to('#download-cv span:nth-of-type(4)', {'top': '100%', 'height': '0%', ease: 'power2.out'}, 'two')

	document.querySelector('#download-cv').onmouseenter = () => {
		tlBtn.pause();
		gsap.to('#download-cv span:nth-of-type(1)', {'width': '100%', 'left': '0', 'backgroundColor': 'crimson'});
		gsap.to('#download-cv span:nth-of-type(2)', {'width': '100%', 'right': '0', 'backgroundColor': 'crimson'});
		gsap.to('#download-cv span:nth-of-type(3)', {'height': '100%', 'bottom': '0', 'backgroundColor': 'crimson'});
		gsap.to('#download-cv span:nth-of-type(4)', {'height': '100%', 'top': '0', 'backgroundColor': 'crimson'});
	}

	document.querySelector('#download-cv').onmouseleave = () => {
		let tlBtnl = gsap.timeline();
		tlBtnl
		.to('#download-cv span:nth-of-type(1)', {'width': '0%'}, 'one')
		.to('#download-cv span:nth-of-type(2)', {'width': '0%'}, 'one')
		.to('#download-cv span:nth-of-type(3)', {'height': '0%'},'one')
		.to('#download-cv span:nth-of-type(4)', {'height': '0%', onComplete: ()=> {
			gsap.set('#download-cv span', {'backgroundColor': '#E7746F'});
			tlBtn.restart().play();
		}}, 'one')
	}

	//  /*---------------------------------*/
	//	 * Navbar settings
	//	/*---------------------------------*/

	document.querySelectorAll('a[href^="#"]').forEach(hrefLink => {
		hrefLink.onclick = (e) => {
			e.preventDefault();
			let nameHref = hrefLink.getAttribute('href');
			let offsetTop = nameHref === '#home' ? document.querySelector(nameHref).offsetTop : document.querySelector(nameHref).offsetTop + 20;
			gsap.to(window, {
				duration: 1,
				scrollTo: {
					y: offsetTop
				},
				ease: 'power2.inOut'
			});
		}
	});

	let navLinks = ['#home', '#services', '#portfolio', '#skills'];

	navLinks.forEach(el => {
		let navLink = document.querySelector('a[href="' + el + '"].nav_link');
		ScrollTrigger.create({
			trigger: el,
			start: "top top",
			onEnter: () => {
				navLink.parentElement.classList.add('active')
			},
			onLeave: () => {
				navLink.parentElement.classList.remove('active')
			},
			onEnterBack: () => {
				navLink.parentElement.classList.add('active')
			},
			onLeaveBack: () => {
				navLink.parentElement.classList.remove('active')
			},
		});
	});

	ScrollTrigger.create({
		trigger: "#services",
		start: "top top",
		onEnter: () => {
			document.querySelector('header').classList.add('active');
			gsap.to('.scroll-up', {
				autoAlpha: 1
			});
		},
		onLeaveBack: () => {
			document.querySelector('header').classList.remove('active');
			gsap.to('.scroll-up', {
				autoAlpha: 0
			})
		}
	});

	function openMenu() {
		document.querySelector('#custom-collapse').setAttribute('data-open', 'true');
		let tlMenu = gsap.timeline({defaults:{ease:'power4.out'}});
		
		tlMenu
		.to('#custom-collapse', {'height':'260px', duration: 0.4, autoAlpha: 1})
		.from('#custom-collapse ul li', {xPercent: 500, duration: 0.6, stagger: 0.1, autoAlpha: 0}, '<0')
	}
	
	function closeMenu() {
		document.querySelector('#custom-collapse').setAttribute('data-open', 'false');
		let tlMenu = gsap.timeline({defaults:{ease:'power4.out'}});

		tlMenu
		.to('#custom-collapse', {'height':'0px', duration: 0.3, autoAlpha: 0})
		.set('#custom-collapse ul li', {'transform': 'translate(0%, 0%)', autoAlpha: 1});		
	}

	document.querySelector('button.navbar-toggle').onclick = () => {
		document.querySelector('#custom-collapse').getAttribute('data-open') === 'false' ? openMenu()
					: closeMenu();
	}

	window.onresize = () => {
		if (window.innerWidth > 767) gsap.set('#custom-collapse', {autoAlpha: 1}); 
	}

	// 		/* ---------------------------------------------- /*
	// 		 * WOW Animation When You Scroll
	// 		/* ---------------------------------------------- */

	gsap.to('#home', {
		'backgroundPosition': '50% 10%',
		duration: 1,
		scrollTrigger: {
			scrub: true,
			trigger: '#home'
		}
	});

	let progress_ring = document.querySelectorAll('.progressCircle .progress-ring .progress-ring__circle');
	gsap.set(progress_ring, {
		'stroke-dasharray': '10 450',
		'stroke-dashoffset': '0'
	});
	gsap.to(progress_ring, {
		duration: 1.5,
		stagger: 0.2,
		'stroke-dasharray': (i, e) => {
			let one = e.parentElement.nextElementSibling.getAttribute('data-percent');
			return 430 * one / 100 + ' 450'
		},
		ease: Power3.easeOut,
		scrollTrigger: {
			trigger: '.progressCircle',
			start: "top 80%"
		}
	});

	gsap.from('#services .row:nth-of-type(1)', {
		y: -200,
		opacity: 0,
		duration: 1,
		scrollTrigger: {
			trigger: '#services .row:nth-of-type(1)',
			start: "60% 80%",
		}
	});

	if (window.innerWidth > 768) {

		gsap.from('#services .row:nth-of-type(2) .col-sm-3', {
			stagger: {
				from: 'random',
				each: 0.1
			},
			scrollTrigger: {
				trigger: '#services .row:nth-of-type(2)',
				start: "-30% 80%",
			},
			y: 300,
			ease: Back.easeOut.config(1.4),
			duration: 1
		});

		gsap.from('#portfolio .row:nth-of-type(2) .col-xs-12.col-sm-4.col-md-4', {
			scale: 0,
			opacity: 0,
			y: -50,
			duration: 0.6,
			scrollTrigger: {
				trigger: '#portfolio .row:nth-of-type(2)',
				start: "30% 80%",
			},
			stagger: {
				amount: 1,
				from: 'random'
			}
		});

	}

	gsap.from('#portfolio .row:nth-of-type(1)', {
		y: -200,
		scale: 0,
		opacity: 0,
		duration: 1,
		scrollTrigger: {
			trigger: '#portfolio .row:nth-of-type(1)',
			start: "60% 80%",
		}
	});

	gsap.from('#skills .mySkills', {
		y: -200,
		scale: 0,
		opacity: 0,
		duration: 1,
		scrollTrigger: {
			trigger: '#skills .mySkills',
			start: "60% 80%",
		}
	});

	// gsap.from('.calltoaction .row .col-md-12.col-lg-12', {
	// 	x: () => -(window.innerWidth / 1.3),
	// 	duration: 0.8,
	// 	scrollTrigger: {
	// 		trigger: '.calltoaction .row',
	// 		start: "top 80%",
	// 	},
	// 	stagger: 0.3,
	// 	ease: Back.easeOut.config(2)
	// });

	// gsap.from('#contact .row:nth-of-type(1)', {
	// 	y: -100,
	// 	opacity: 0,
	// 	duration: 1,
	// 	scrollTrigger: {
	// 		trigger: '#contact .row:nth-of-type(1)',
	// 		start: "50% 80%",
	// 	}
	// });

	// gsap.from('#contact .ajax-hidden .wow', {
	// 	y: 30,
	// 	opacity: 0,
	// 	duration: 1.1,
	// 	ease: Power0.easeNone,
	// 	scrollTrigger: {
	// 		trigger: '#contact .row:nth-of-type(2)',
	// 		start: "20% 80%",
	// 	},
	// })

	// 		/* ---------------------------------------------- /*
	// 		 * Rotator settings
	// 		/* ---------------------------------------------- */

	let heightRotator = 0;
	document.querySelectorAll('#cbp-qtrotator .cbp-qtcontent').forEach(el => {
		if (heightRotator <= el.getBoundingClientRect().height) heightRotator = el.getBoundingClientRect().height;
	});

	document.querySelector('#cbp-qtrotator').style.minHeight = heightRotator + 'px';

	let rotator = gsap.timeline({
		repeat: -1
	});

	let cbp_qtprogress = document.querySelector('#cbp-qtrotator .cbp-qtprogress');
	let all_cbp_qtcontent = document.querySelectorAll('#cbp-qtrotator .cbp-qtcontent');

	function installSetting() {
		return {
			opacity: 0,
			y: (i, e) => -e.getBoundingClientRect().height / 4,
			scale: 0
		}
	}

	function animantionIn() {
		return {
			y: 0,
			scale: 1,
			opacity: 1,
			duration: 0.7
		}
	}

	function animationOut() {
		return {
			y: (i, e) => e.getBoundingClientRect().height / 4,
			scale: 1.2,
			opacity: 0,
			duration: 0.7
		}
	}

	function fullProgress() {
		return {
			duration: 8,
			'width': '100%',
			ease: Power0.easeNone
		}
	}

	function dischargeProgress() {
		return {
			'width': '0%'
		}
	}

	if (all_cbp_qtcontent.length > 1) {
		all_cbp_qtcontent.forEach((el, index) => {
			if (el.nextElementSibling.classList.contains('cbp-qtcontent')) {
				rotator
					.set(el, {
						opacity: 1
					})
					.set(el.nextElementSibling, installSetting())
					.to(cbp_qtprogress, fullProgress())
					.set(cbp_qtprogress, dischargeProgress())
					.to(el, animationOut())
					.to(el.nextElementSibling, animantionIn())
			} else {
				rotator
					.set(all_cbp_qtcontent[0], installSetting())
					.to(cbp_qtprogress, fullProgress())
					.set(cbp_qtprogress, dischargeProgress())
					.to(el, animationOut())
					.to(all_cbp_qtcontent[0], animantionIn())
			}
		});
	} else if (!!all_cbp_qtcontent[0]) gsap.set(all_cbp_qtcontent[0], {
		opacity: 1
	});

	/* ---------------------------------------------- /*
	 * E-mail validation
	/* ---------------------------------------------- */

	function isValidEmailAddress(emailAddress) {
		var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
		return pattern.test(emailAddress);
	};

	/* ---------------------------------------------- /*
	 * Contact form ajax
	/* ---------------------------------------------- */

	$('#contact-form').submit(function (e) {

		e.preventDefault();

		var c_name = $('#c_name').val();
		var c_email = $('#c_email').val();
		var c_message = $('#c_message ').val();
		var response = $('#contact-form .ajax-response');

		var formData = {
			'name': c_name,
			'email': c_email,
			'message': c_message
		};

		if ((c_name == '' || c_email == '' || c_message == '') || (!isValidEmailAddress(c_email))) {
			response.fadeIn(500);
			response.html('<i class="fa fa-warning"></i> Please fix the errors and try again.');
		} else {
			$.ajax({
				type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
				url: 'assets/php/contact.php', // the url where we want to POST
				data: formData, // our data object
				dataType: 'json', // what type of data do we expect back from the server
				encode: true,
				success: function (res) {
					var ret = $.parseJSON(JSON.stringify(res));
					response.html(ret.message).fadeIn(500);
				}
			});
		}
		return false;
	});



});