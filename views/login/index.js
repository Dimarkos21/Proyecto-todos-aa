const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const form = document.querySelector('#form');

form.addEventListener('submit', async e => {
    e.preventDefault();
    // utilizamos axios para comunicar el front con el back y el try catch para que sea un evento asyncrono porque no sabemos cuando tiempo va a tardar para enviar una respuesta.
    try {
        const user = {
            email: emailInput.value,
            password: passwordInput.value
        }
        await axios.post('/api/login', user);
window.location.pathname = "/todos/index.html"
        // rederigir al usuario a la pagina de todos cuando inicien sesion correctamente
      
    } catch (error) {
    
        console.log(error);
    }
    
    
   
})