document.addEventListener("DOMContentLoaded", function(event) {
var thumbnail= document.getElementById('img');
thumbnail.addEventListener("click", function() {
if (thumbnail.style.height=="40%"){
thumbnail.style.width="10%";
thumbnail.style.height="10%";
}else{
    thumbnail.style.width="40%";
    thumbnail.style.height="40%"; 
}
});
});