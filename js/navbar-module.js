export class Navbar {

    animation () {
        $(".main-nav .bars-link ").on("click",function() {
            $(".main-nav .bars-link").addClass("d-none");
            $(".main-nav .x-link").removeClass("d-none");
            $(".collapsed-nav").animate({
               left:0
            });
            $(".main-nav").animate({
                left:270
             });
             $(".collapsed-nav .inner .a1 , .collapsed-nav .inner .a2 , .collapsed-nav .inner .a3 , .collapsed-nav .inner .a4 , .collapsed-nav .inner .a5").animate({
                top:0
             })
            })
        
        $(".main-nav .x-link,#Search,#Categories,#Area , #Ingredients , #ContactUs").on("click",function() {
            $(".main-nav .x-link").addClass("d-none");
            $(".main-nav .bars-link").removeClass("d-none");
            $(".collapsed-nav").animate({
                       left: -270
             });
             $(".main-nav").animate({
                 left:0
              });
            $(".collapsed-nav .inner a").animate({
                top:220
             })
        })
        
    }
}