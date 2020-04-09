// on scroll 

$(window).on('scroll',function(){
   if($(window).scrollTop()){
       $('nav').addClass('ubah');
   }else {
       $('nav').removeClass('ubah');
   }
});
 
// on menu navigasi clicked
 var buka = true;
        
         toggleBtn = () => {
             buka = !buka;
            if(buka){
            document.getElementById("side-bar").style = 'left : 0';
            document.getElementById("before").setAttribute("style","transform : rotate(45deg);top : 11px;");
            document.getElementById("after").setAttribute("style","transform : rotate(-45deg);top : -14px;");
            document.getElementById("tengah").setAttribute("style","opacity : 0");
            }else if(!buka){
            document.getElementById("side-bar").style = 'left : -100';
            document.getElementById("before").removeAttribute("style");
            document.getElementById("after").removeAttribute("style");
            document.getElementById("tengah").removeAttribute("style");
            }
         }

         tutupBar = () => {
            document.getElementById("side-bar").style = 'left : -100%';
            document.getElementById("before").removeAttribute("style");
            document.getElementById("after").removeAttribute("style");
            document.getElementById("tengah").removeAttribute("style");
         }
         

    //    animate scroll 

   