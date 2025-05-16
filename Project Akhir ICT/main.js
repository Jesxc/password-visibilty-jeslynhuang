let passwordInput = document.getElementById('password');      
let icon = document.getElementById('input-icon');

// sumber: https://youtu.be/Tir5zw4NEmM?si=_c6t7au_gAZGUJPq

function togglePassword() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';  
    icon.classList.add("ri-eye-line");  
    icon.classList.remove("ri-eye-off-line"); 
  } else {
    passwordInput.type = 'password'; 
    icon.classList.add("ri-eye-off-line");
    icon.classList.remove("ri-eye-line");  
  } 
} 

icon.addEventListener('click', togglePassword); 


Swal.fire({
  title: " Jeanette Jeslyn Huang 11/20 ",
  text: " Semper fidelis, selalu setia ",
  imageUrl: " jeslyn.jpg ",
  imageWidth: 500,
  imageHeight: 300,
  confirmButtonText: "Tutup",
  showCloseButton: true, 
});
