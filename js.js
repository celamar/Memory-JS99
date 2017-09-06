
function cachephotos () {
   imageCourante.style.visibility = 'hidden';
   imageAnterieur.style.visibility = 'hidden';
   onAttendPourCacherLesImages = 0;
 }

var idImagePrecedente = 0;
var onAttendPourCacherLesImages = 0;
var imageCourante;
var imageAnterieur; 


 
 function clicImage (n) {
  //si on attend pas on rentre dans le if
   if (onAttendPourCacherLesImages == 0) {
    // n represente l'id de l'image selectionné
       imageCourante = document.getElementById('img'+n);
       //on fait apparaitre l image courante
       imageCourante.style.visibility = 'visible';
       if (idImagePrecedente==0) {
        //id image precedent devient id image courante
        // pour le prochain clic
         idImagePrecedente = n;
       } else {
        // on va pouvoir comparer les images
         imageAnterieur  = document.getElementById('img'+idImagePrecedente);
         if (imageAnterieur.src==imageCourante.src) {
          //si c'est la meme on ne fait plus rien et on attend le prochain clic
          // sans oublier de vider id image precedente
          idImagePrecedente = 0;
         } else {
           onAttendPourCacherLesImages = 1;
           setTimeout('cachephotos();',800);
           idImagePrecedente = 0;
         }
         
       }
   }
 }
  
  
