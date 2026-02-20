 
/*menu active JS start*/

 $(function () {
    try {
        addActiveClassInHeaderMenu();
    } catch (err) {
        console.log(err);
    }
});

function addActiveClassInHeaderMenu() {
    let currentPageUrl = window.location.pathname;

    //first remove active class 
    $('#main-menu .navbar-nav .nav-item').removeClass('active');

    //first layer menu
    $('#main-menu .navbar-nav .nav-item .nav-link').each(function (e) {
        let pageLink = $(this).attr('href') || '';
        
        if (pageLink) {

            if (!pageLink.startsWith("/")) {
                pageLink = '/' + pageLink
            }

            if (currentPageUrl === pageLink) {
                $(this).parent().addClass('active');
            }
            else if (currentPageUrl.endsWith('/') === true && pageLink.endsWith('/') === false) {
                if (currentPageUrl === pageLink + '/') {
                    $(this).parent().addClass('active');
                }
            }
        }            

    });

    //second layer menu
    $('.dropdown-menu a.dropdown-item').each(function (e) {
        let pageLink = $(this).attr('href') || '';
        
        if (pageLink) {

            if (!pageLink.startsWith("/")) {
                pageLink = '/' + pageLink
            }

            if (currentPageUrl === pageLink) {
                $(this).parent().parent().addClass('active');
            }
            else if (currentPageUrl.endsWith('/') === true && pageLink.endsWith('/') === false) {
                if (currentPageUrl === pageLink + '/') {
                    $(this).parent().parent().addClass('active');
                }
            }
        }

    });

    //third layer menu
    $('.dropdown.second-level a.dropdown-item').each(function (e) {

        let pageLink = $(this).attr('href') || '';
        
        if (pageLink) {

            if (!pageLink.startsWith("/")) {
                pageLink = '/' + pageLink
            }


            if (currentPageUrl === pageLink) {
                $(this).parent().parent().parent().parent().addClass('active');
            }
            else if (currentPageUrl.endsWith('/') === true && pageLink.endsWith('/') === false) {
                if (currentPageUrl === pageLink + '/') {
                    $(this).parent().parent().parent().parent().addClass('active');
                }
            }
        }            

    });

}

/*menu active JS end*/

$(window).width() > 0 && $(window).scroll(function (o) {
    var s = $(".scroller_anchor").offset().top;
    $(this).scrollTop() >= s && "fixed" != $(".scroller_anchor").css("position") ? ($("header").addClass(
        "stick-menu").slideDown(), $("header")) : $(this).scrollTop() < s && "relative" != $(".scroller_anchor")
            .css("position") && ($("header").removeClass("stick-menu"), $("header"))
});


//Dropdown
$('.dropdown-menu').click(function (e) {
    e.stopPropagation();
});
$('.drp-submenu').click(function (e) {
    e.stopPropagation();
});
$(".submenu-arrow").click(function () {
    $(this).parent().toggleClass("show");
    $(".submenu-arrow").not(this).parent().removeClass("show");
});
$(".drp-arrow").click(function () {
    $(this).parent().toggleClass("show-drop");
})
//Dropdown END

// custom wow

$(window).scroll(function () {
    inViewport();
});




$(window).resize(function () {
    inViewport();
});

$(window).load(function () {
    inViewport();
});

function inViewport() {
    $('.custom-wow').each(function () {
        var divPos = $(this).offset().top,
            topOfWindow = $(window).scrollTop();

        if (divPos < topOfWindow + 950) {
            $(this).addClass('animated');
        }
    });
}
// custom wow END

// Address LocaTION
$(document).on("click", ".naccs .menu div", function () {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
            .find("li:eq(" + numberIndex + ")")
            .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
    }
});

// Address LocaTION eND

 

$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        $('#return-to-top').addClass('show');
        $('#return-to-top').removeClass('d-none');
    } else {
        $('#return-to-top').removeClass('show');
        $('#return-to-top').addClass('d-none');
        $('#return-to-top').removeClass('rocket-aniamtion');
    }
});
$('#return-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);

    $(this).addClass('rocket-aniamtion')
});
    //Scroll_to_top END



    
$('.screenshot_slider').owlCarousel({
	loop: true,
	margin: 0,
	autoplay: true,
	autoplayTimeout: 4000,
	nav: false,
	dots: false,
	smartSpeed: 1000,
	touchDrag: true,
	mouseDrag: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1    
		},
		1000: {
			items: 1
		}
	}
});
