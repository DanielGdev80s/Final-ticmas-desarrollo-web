
document.getElementById('twiter').addEventListener('click', () => {
    window.open('https://twitter.com/TheHorrorMaster')
   });

   document.getElementById('facebook').addEventListener('click', () => {
    window.open("https://www.facebook.com/directorjohncarpenter/")
   });

   document.getElementById('instagram').addEventListener('click', () => {
    window.open("https://www.instagram.com/JohnCarpenterOfficial/")
   });

   document.getElementById('youtube').addEventListener('click', () => {
    window.open("https://www.youtube.com/channel/UCL8qXl5HI0v_XxGN8CFQxLw")
   });

   document.getElementById('web').addEventListener('click', () => {
    window.open("https://theofficialjohncarpenter.com/")
   });

   function mostrar(){
    document.getElementById('extracto').style.display = 'block';
    
   }

   function ocultar(){
    document.getElementById('extracto').style.display = 'none';
    
   }

   function mostraracademica(){
    document.getElementById('academicadiv').style.display = 'block';
    
   }

   function ocultaracademica(){
    document.getElementById('academicadiv').style.display = 'none';
    
   }

   function mostrarfilmografia(){
    document.getElementById('filmografiadiv').style.display = 'block';
    
   }

   function ocultarfilmografia(){
    document.getElementById('filmografiadiv').style.display = 'none';
    
   }


   const switchButton = document.getElementById('switch');
 
   switchButton.addEventListener('click', () => {
       document.body.classList.toggle('dark'); 
       switchButton.classList.toggle('active');
   });

