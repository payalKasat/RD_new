/**
 * Created by ashwi on 1/16/2018.
 */
/**
 * Created by ashwi on 1/10/2018.
 */

$(document).ready(function(){
    // Add smooth scrolling to all links in navbar
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (2000) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(window).scroll(function() {
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 1000) {
                $(this).addClass("slide");
            }
        });
    });

    // myMap();
});

/* code for map , LatLng is location code*/

/* 12 times user can zoom*/

// function myMap() {
//     var myCenter = new google.maps.LatLng(33.6167, -117.8975);
//     var mapProp = {center:myCenter, zoom:12, scrollwheel:false, draggable:false, mapTypeId:google.maps.MapTypeId.ROADMAP};
//     var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
//     var marker = new google.maps.Marker({position:myCenter});
//     marker.setMap(map);
// }



