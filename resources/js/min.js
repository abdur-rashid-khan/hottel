    var toggled = false;
    function openMenu(){
        if(!toggled){
            toggled = true;
            document.getElementById("myNav").style.width = "80%"; 
            return;
        }
        if(toggled){
            toggled=false;
            document.getElementById("myNav").style.width="0%";
            return;
        }
    }
    function closeMenu(){
        document.getElementById("myNav").style.width="0%"
    }
    var alert=document.querySelector(".fast_alert");
        window.addEventListener('load',function(){
            setTimeout(()=>{
                alert.classList.add('alert');
            },5000);
        }); 
        var preloader = document.getElementById("loading");
            function loading() {
                preloader.style.display = "none";
            }
    // setInterval(a,50);
    // function a (){
    //     let time=new Date();
    //     let hor=time.getHours();
    //     let min=time.getMinutes();
    //     let sec=time.getSeconds();
    //     if(hor>12){
    //         hor=hor;
    //     }
    //     if(hor>12){
    //         pm="pm"
    //     }
    //     if(hor==0){
    //         hor=12;
    //     }else{
    //         let start= hor + ":" + min + ":" + sec;
    //     document.getElementById("localTime").innerHTML=start;
    //     }
    // }
    // jQure use.............
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            margin:20,
            items:3,
            loop:true,
            autoplayHoverPause:true,
            autoplay:true,
            autoplayTimeout:3000,
            responseresponsiveRefreshRate:true,
            responsive:{
                0:{
                    items:1,
                },
                575.98:{
                    items:1,
                },
                767.98:{
                    items:2,
                },
                991.98:{
                    items:3
                },
                1199.98:{
                    items:4,
                },
                1919.98:{
                    items:4,
                }
            }
        });
        $(".show_navbar").waypoint(function (e) {
            "down" == e ? $("nav").addClass("sticky") : $("nav").removeClass("sticky");
        });
    })