jQuery(function() {
    
	var $ = jQuery;
    

    $(document).ready(function() {
    
        // General styling
        
        $('.wsite-form-radio-container, .wsite-com-product-option-dropdown, .wsite-com-product-option-radio').jqTransform();

        $('body').addClass('postload');

        // Masthead
        // --------------------------------------------------------------------------------------//
        
        // Sticky Nav

        $('#navigation').waypoint('sticky');
        
        $(window).resize(function() {
            $('#navigation').waypoint('unsticky');
            $('#navigation').waypoint('sticky');
        });

        // search button click action
        
        $('#sitesearch .wsite-search-button').click(function(){
            $("#sitesearch #wsite-header-search-form").toggleClass("expanded");
            if ($("#sitesearch #wsite-header-search-form").hasClass("expanded")) {
                $("#sitesearch").addClass("loaded");                
                $("#sitesearch #wsite-header-search-form .wsite-search-input").focus();                
            }
            return false;
        });
        
        if ($("#sitesearch").html().length <= 0) { $("#search").remove(); }

        // Mobile menu
        
        $('#mobile').click(function(e){
            e.preventDefault();
            $("#navigation").toggleClass('expanded');
            if ($("#navigation").hasClass("expanded")) {
                $("#navigation-wrap").css({"max-height": ($(window).height() - 50)+ "px"});                
                $("#navmobile").css({"max-height": ($(window).height() - 100)+ "px"});                
            }
            else {
             $("#navigation-wrap").css({"max-height": "0px"});                
           }
        });
        
        // Landing Page
        // --------------------------------------------------------------------------------------//

        setTimeout(function() {
            $(".landing-page #landing-scroll").addClass("loaded");
        }, 1000);
                
        $('.landing-page').waypoint(function() {
            $('.landing-page').addClass('scrolled');
        }, { offset: -5 });
        
        $(".landing-page #landing-scroll").click(function(e){
            e.preventDefault();
            $('.landing-page').addClass('scrolled');
        });

        // Product Page
        // --------------------------------------------------------------------------------------//

        // Swap preview images for hi-res images in product page
        
        $("a.wsite-product-image").each(function(){
            var hires = $(this).attr("href");
            $(this).find('img').attr("src", hires);
        });
        
        
        // Storefront
        // --------------------------------------------------------------------------------------//

        // Categories sidebar list in tablet/mobile
        
        $('.wsite-com-sidebar').prepend('<a id="open-categories" href="#">See All Categories</a><a id="close-categories" href="#">X Close</a>');
        $('#open-categories, #close-categories').click(function(e){
            e.preventDefault();
            $('.wsite-com-sidebar').toggleClass('sidebar-expanded');
        });
        
        // Wrap products in subpages
        
        if (!$('.wsite-com-category-subcategory-group').text().trim().length) {
            $('.wsite-com-category-subcategory-group').next("div").remove();
            $(".wsite-com-sidebar").addClass("inner");
        }
        
        // Store Item
        // --------------------------------------------------------------------------------------//
        
        
        $('#wsite-com-product-quantity .wsite-com-product-title').text('Qty');

        // Format Store markup

        $("#wsite-com-product-images-strip a:first-child").addClass("current-thumb");
        
        $("#wsite-com-product-images-strip a").click(function(){
            $(".current-thumb").removeClass("current-thumb");
            $(this).addClass("current-thumb");
        });

        // Cart + Member
        
        $('#nav').on('DOMSubtreeModified propertychange', function() {
          
          if ($(window).width() < 768) {
            $("#nav li a").each(function(){
              // Differentiating post-load nav elements by the presence of an id (only currently available modifier)
              if ($(this).attr("id")) {
                var navLinkId = $(this).attr("id");
                var navLinkParent = $(this).parent().detach();

                // Append to mobile nav if new element
                if (!$("#navmobile #"+navLinkId).length) {
                  $("#navmobile .wsite-menu-default").append(navLinkParent);
                  var newheight = $("#navmobile .wsite-menu-default").height();
                  $(".wsite-mobile-menu").height(newheight);
                }
              }
            });
          }

        });
        
        // function cartdisplay() {
        //           if (Number($('#wsite-mini-cart .wsite-subtotal-wrapper .wsite-price').text()) > 0 ) {
        //             $('#wsite-mini-cart').addClass('full');
        //           }
        //           else {
        //             $('#wsite-mini-cart').removeClass('full');
        //           }
        //         }
        //         
        //         setTimeout(function() { cartdisplay(); }, 800);
        //         
        //         $('.wsite-product-button, #wsite-com-product-buy, .wsite-product-item .wsite-remove-button').on('click', function(){
        //           setTimeout(function() { cartdisplay(); }, 800);
        //         });
        
        
        // Blog
        // --------------------------------------------------------------------------------------//

        $("#commentReplyTitle").text("Leave a comment");
        
        // Figure out of comment is last in tree
        $(".blogCommentLevel1, .blogCommentLevel2").each(function(){
            if ($(this).parent().next("div").children("div").hasClass("blogCommentLevel0") || $(this).parent().next("div").is("#lastComment")) {
                $(this).addClass("last");
            }
        });


    });
});

