const navbar = document.querySelector('#navbar');

const createNavHome = () => {
    navbar.innerHTML = `   
        <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
            <p class="font-bold text-xl text-white rounded-lg">TodoApp</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 md:hidden w-10 h-10 text-white cursor-pointer p-2 hover:bg-slate-800 rounded-lg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>    
              <div class="hidden md:flex flex-row gap-4">
                <a href="/login" class="text-white font-bold hover:bg-indigo-800 py-2 px-4 rounded-lg">Login</a>
                <a href="/signup/" class="transition ease-in-out text-white font-bold bg-slate-600 hover:bg-slate-800 py-2 px-4 rounded-lg">Registro</a>
              </div>          
              <div class="bg-slate-600/80 fixed top-16 right-0 left-0 bottom-0 justify-center items-center flex-col gap-4 hidden">
              <a href="/login" class="text-white font-bold hover:bg-indigo-800 py-2 px-4 rounded-lg">Login</a>
              <a href="/signup/" class="transition ease-in-out text-white font-bold bg-slate-600 hover:bg-slate-800 py-2 px-4 rounded-lg">Registro</a>
        </div>
      </div> 

    `;
};

const createNavSignup = () => {
  navbar.innerHTML = `   
      <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
          <p class="font-bold text-xl text-white rounded-lg">TodoApp</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 md:hidden w-10 h-10 text-white cursor-pointer p-2 hover:bg-slate-800 rounded-lg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>    
            <div class="hidden md:flex flex-row gap-4">
              <a href="/login" class="text-white font-bold hover:bg-indigo-800 py-2 px-4 rounded-lg">Login</a>
            </div>          
            <div class="bg-slate-600/80 fixed top-16 right-0 left-0 bottom-0 justify-center items-center flex-col gap-4 hidden">
            <a href="/login" class="text-white font-bold hover:bg-indigo-800 py-2 px-4 rounded-lg">Login</a>
      </div>
    </div> 

  `;
};

const createNavLogin = () => {
  navbar.innerHTML = `   
      <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
          <p class="font-bold text-xl text-white rounded-lg">TodoApp</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 md:hidden w-10 h-10 text-white cursor-pointer p-2 hover:bg-slate-800 rounded-lg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>    
            <div class="hidden md:flex flex-row gap-4">
              <a href="/signup/" class="text-white font-bold hover:bg-indigo-800 py-2 px-4 rounded-lg">Registro</a>
            </div>          
            <div class="bg-slate-600/80 fixed top-16 right-0 left-0 bottom-0 justify-center items-center flex-col gap-4 hidden">
            <a href="/signup/" class="text-white font-bold hover:bg-indigo-800 py-2 px-4 rounded-lg">Registro</a>
      </div>
    </div> 

  `;
};
      



const createNavTodos= () => {

  console.log("hoa")
  navbar.innerHTML = ` 
       <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
          <p class="font-bold text-xl text-white rounded-lg">TodoApp</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 md:hidden w-10 h-10 text-white cursor-pointer p-2 hover:bg-slate-800 rounded-lg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>    
            <div class="hidden md:flex flex-row gap-4">
<button  id="close-btn" class="text-white font-bold hover:bg-indigo-800 py-2 px-4 rounded-lg">Cerrar sesion</button>
            </div>          
            <div class="bg-slate-600/80 fixed top-16 right-0 left-0 bottom-0 justify-center items-center flex-col gap-4 hidden">
<button  class="text-white font-bold hover:bg-indigo-800 py-2 px-4 rounded-lg">Cerrar sesion</button>
      </div>
    </div> 
  `;
};

if (window.location.pathname === '/') {
  createNavHome();
}

if (window.location.pathname === '/') {
  createNavHome();
} else if (window.location.pathname === '/signup/') {
  createNavSignup();
} else if (window.location.pathname === '/login/' ) {
  createNavLogin();
} else if (window.location.pathname === '/todos/index.html' ) {
  createNavTodos();
}

const navBtn = navbar.children[0].children[1];
  // console.log(navbar);

navBtn.addEventListener('click', e => {
  const menuMobile = navbar.children[0].children[3];
  if (!navBtn.classList.contains('active')) {
    navBtn.classList.add('active');
    navBtn.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />'
    menuMobile.classList.remove('hidden');
    menuMobile.classList.add('flex')
  } else {
    navBtn.classList.remove('active');
    navBtn.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />'
    menuMobile.classList.add('hidden');
    menuMobile.classList.remove('flex');
  }
})


const classBTNDesktop =navbar.children[0].children[2].children[0];



const classBTNMobile =navbar.children[0].children[3].children[0];
classBTNDesktop.addEventListener("click", async e =>{
try { await axios.get ("/api/logout");
  console.log("hola")
  window.location.pathname = "/Login"
} catch (error){
  console.log(error);
}
})

classBTNMobile.addEventListener("click", async e =>{
  try { await axios.get ("/api/logout");
    console.log("hola")
    window.location.pathname = "/Login"
  } catch (error){
    console.log(error);
  }
  })