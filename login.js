document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const emaill = 'eshmat@main.ru';
    const kod = 'toshmat';
  
    if (email === emaill && password === kod) {
      window.location.href =  "index.html" ; 
    } else {
      document.getElementById('error').classList.remove('hidden');
    }
  })