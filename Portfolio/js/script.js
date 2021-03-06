$(document).ready(function() {

    $('#slides').superslides({
        animation:'fade' ,
        play: 5000 ,

    });
    var typed=new Typed(".typed", {
        strings: ["Student" ,"Web Developer"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false,
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    

    var skillsTopOffset=$(".skillsSection").offset().top;
    
    $(window).scroll(function() {
        
        
        if(window.pageYOffset > skillsTopOffset - $(window).height() +200){
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 160,
                onStep: function(from, to, percent){
                    $(this.el).find('percent').text(Math.round(percent));
                }
            });    
        }

    });

     const nav =$("#navigation");
     const navTop = nav.offSet().top;

     $(window).on("scroll",stickyNavigation);

     function stickyNavigation(){
         var body= $("body");

         if($(window).scrollTop()>=navTop){
             body.addClass("fixedNav")
         }

         else{
             body.removeClass("fixedNav");
         }
     }




});