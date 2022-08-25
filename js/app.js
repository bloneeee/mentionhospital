$(document).ready(function(){
    // console.log('i am working');

    // Start Header Sectionn

    // Start Banner Section

        // $(".carousel").carousel({
        //     interval: 500
        // });

    // End Banner Section

    // End Header Section

    // Start Info Section

    $(window).scroll(function(){
        let getscrollpoint = $(this).scrollTop();
        // console.log(getscrollpoint);

        if(getscrollpoint >= 220){
            $(".infotexts").addClass("fromlefts");
            $(".infopics").addClass("fromrights");
        }else{
            $(".infotexts").removeClass("fromlefts");
            $(".infopics").removeClass("fromrights");
        }
    });

    // End Info Section

    // End ADV Section

    $("#videos").click(function(){
        var getmodal = $(this).data("bs-target"); // #videomodal
        var getvideosrc = $(this).data("video"); // https://www.youtube.com/embed/2kyPgu03pgE
        var videourlwithauto = getvideosrc + "?autoplay=1";
        // console.log(getmodal);
        // console.log(videourlwithauto);
      
        $(getmodal + " iframe").attr("src",videourlwithauto);

        $(getmodal + " button.btn-close").click(function(){
            $(getmodal + " iframe").attr("src",getvideosrc);
        });

        $(getmodal).click('hidden.bs.modal',function(){
            $(getmodal + " iframe").attr("src",getvideosrc);
        });
    });

    // End ADV Section

    // Start Premises Section

    $("#lightslider").lightSlider({
        // auto: true,
        item: 4,
        loop: true,
        slideMove: 3,
        speed: 600
    }).play();

    // End Premises Section

    // Start Pricing Section

    $(window).scroll(function(){
        let getscroll = $(this).scrollTop();
        // console.log(getscroll);

        if(getscroll >= 2450){
            $(".cardones").addClass("movelefts");
            $(".cardtwos").addClass("movebottoms");
            $(".cardthrees").addClass("moverights");
        }else{
            $(".cardones").removeClass("movelefts");
            $(".cardtwos").removeClass("movebottoms");
            $(".cardthrees").removeClass("moverights");
        }
    });

    // End Pricing Section

    // Start Join Us Section

    $("#accordion").accordion();

    // End Join Us Section

    // Start Footer Section

    $("#getyear").text(new Date().getUTCFullYear());

    // End Footer Section 

    // Start Progress

    $(window).scroll(function(){
        var getprogress = $("#progresses");
        var getprogressval = $("#progressvalues");
        var getscorlltop = $(this).scrollTop();
        // console.log('getscorlltop', getscorlltop);

                                    //  current height
        // formula st * 100 / (pjheight - cvheight)

        // By jQuery

            // var getscrollheight = $(document).height();
            // console.log('getscrollheight', getscrollheight);
            // var getclientheight = $(window).height();
            // console.log('getclientheight', getclientheight);

            // var calcheight = getscrollheight - getclientheight;
            // getfinalheight = Math.round(getscorlltop * 100 / calcheight);
            // console.log('getifnalheight', getfinalheight);

        // By JavaScript

            var getscrollheight = document.documentElement.scrollHeight;
            // console.log('getscrollheight',getscrollheight);
            var getclientheight = document.documentElement.clientHeight;
            // console.log('getclientheight',getclientheight);
            var calcheight = getscrollheight - getclientheight;
            getfinalheight = Math.round(getscorlltop * 100 / calcheight);
            // console.log(getfinalheight); 

        getprogressval.text(`${getfinalheight}%`);
        getprogress.css({
            "background": `conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
        });
    });

    // End Progress
});