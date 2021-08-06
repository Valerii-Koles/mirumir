$(document).ready(function(){
  $('.goods').slick({
  	infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,

  responsive: [
  {
    breakpoint: 1230,
    settings: {
        slidesToShow: 4, 
        slidesToScroll: 1,
    }
},
    {
    	breakpoint: 992,
    	settings: {
    		slidesToShow: 3,
    		slidesToScroll: 1
    	}
    },

    {
    	breakpoint: 740,
    	settings: {
    		slidesToShow: 2,
    		slidesToScroll: 1
    	}
    },

    {
    	breakpoint: 500,
    	settings: {
    		slidesToShow: 1,
    		slidesToScroll: 1
    	}
    },
]
  });
});

// dresses

$('.dresses').slick({
	responsive: [
	{
		breakpoint: 10000,
		settings: {
			slidesToShow: 5,
			arrows: false,
			infinite: false
		}
	},
	 {
    breakpoint: 1230,
    settings: {
        slidesToShow: 4, 
        slidesToScroll: 1,
    }
},
    {
    	breakpoint: 992,
    	settings: {
    		slidesToShow: 3,
    		slidesToScroll: 1
    	}
    },

    {
    	breakpoint: 740,
    	settings: {
    		slidesToShow: 2,
    		slidesToScroll: 1
    	}
    },

    {
    	breakpoint: 500,
    	settings: {
    		slidesToShow: 1,
    		slidesToScroll: 1
    	}
    },
	]

});

//  window.onscroll = function showHeader () {
//   	var header = document.querySelector('header');
//  	if (window.pageYOffset > 1){
//  		header.classList.add('header_fixed');
// }else{
// 	header.classList.remove('header_fixed');
//   }
// }


    const iconMenu = document.querySelector('.burger');
  if(iconMenu){
    const ourMenu = document.querySelector('.menu');
    iconMenu.addEventListener("click", function(e) {
      iconMenu.classList.toggle("animate");
      ourMenu.classList.toggle("open");
    });

  }


let accordeon = $('.accordeon'),
    accordeonItems = $('.accordeon_item'),
    accordeonBtn = $('.accordeon_btn');

accordeonBtn.on('click', function() {
  if(!$(this).hasClass('active')) {
    accordeonBtn.removeClass('active')
    accordeonItems.removeClass('active')

    $(this).addClass('active')
    $(this).closest('.accordeon_item').addClass('active')
  } else {
   
    $(this).removeClass('active')
    $(this).closest('.accordeon_item').removeClass('active')
  }
}) 