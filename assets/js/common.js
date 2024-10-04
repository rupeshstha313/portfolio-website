document.addEventListener('DOMContentLoaded', function () {
	function setHeight() {
		const windowHeight = window.innerHeight;
		const navbarHeight = document.querySelector('nav').offsetHeight;
		const heroSection = document.getElementById('hero_section');
  
		// Apply height for desktop
		if (window.innerWidth > 768) {
			heroSection.style.height = `${windowHeight - navbarHeight}px`; // Subtract navbar height
		} else {
			// Reset height for mobile to auto
			heroSection.style.height = 'auto';
		}
	}
  
	// Call on load
	setHeight();
  
	// Adjust on window resize
	window.addEventListener('resize', setHeight);
  });
  
  
  // Menus
   // Toggle mobile menu and switch to close button
   function toggleMenu() {
	const menu = document.querySelector('nav ul.mobile-menu'); // Select mobile menu
	const menuBtn = document.getElementById('menuBtn');
	menu.classList.toggle('active');
	
	// Toggle hamburger to close button
	if (menu.classList.contains('active')) {
	  menuBtn.innerHTML = '&#10006;'; // Change to close icon
	} else {
	  menuBtn.innerHTML = '&#9776;'; // Change back to hamburger icon
	}
  }
  
  document.getElementById('menuBtn').addEventListener('click', toggleMenu);
  
  // Change navbar background on scroll
  window.onscroll = function() {
	const navbar = document.getElementById('navbar');
	if (window.scrollY > 80) {
	  navbar.classList.add('fixed');
	} else {
	  navbar.classList.remove('fixed');
	}
  }
  // Menus
  
  
  
  
  
  // <!-- typewriter -->
	var TxtType = function(el, toRotate, period) {
	  this.toRotate = toRotate;
	  this.el = el;
	  this.loopNum = 0;
	  this.period = parseInt(period, 10) || 2000;
	  this.txt = '';
	  this.tick();
	  this.isDeleting = false;
	};
  
	TxtType.prototype.tick = function() {
	  var i = this.loopNum % this.toRotate.length;
	  var fullTxt = this.toRotate[i];
  
	  if (this.isDeleting) {
	  this.txt = fullTxt.substring(0, this.txt.length - 1);
	  } else {
	  this.txt = fullTxt.substring(0, this.txt.length + 1);
	  }
  
	  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
	  var that = this;
	  var delta = 120 - Math.random() * 100;
  
	  if (this.isDeleting) { delta /= 2; }
  
	  if (!this.isDeleting && this.txt === fullTxt) {
	  delta = this.period;
	  this.isDeleting = true;
	  } else if (this.isDeleting && this.txt === '') {
	  this.isDeleting = false;
	  this.loopNum++;
	  delta = 500;
	  }
  
	  setTimeout(function() {
	  that.tick();
	  }, delta);
	};
  
	window.onload = function() {
	  var elements = document.getElementsByClassName('typewrite');
	  for (var i=0; i<elements.length; i++) {
		  var toRotate = elements[i].getAttribute('data-type');
		  var period = elements[i].getAttribute('data-period');
		  if (toRotate) {
			new TxtType(elements[i], JSON.parse(toRotate), period);
		  }
	  }
	  // INJECT CSS
	  var css = document.createElement("style");
	  css.type = "text/css";
	  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
	  document.body.appendChild(css);
	 };
  // <!-- typewriter -->
  
  
  
  
  
  
  
  
  
  
  
  
  