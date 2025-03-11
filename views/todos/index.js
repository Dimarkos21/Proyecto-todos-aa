const input = document.querySelector('input');
const ul = document.querySelector('ul');
const form = document.querySelector('#form');
const totalCountSpan = document.querySelector('.total-count');
const completedCountSpan = document.querySelector('.completed-count');
const incompletedCountSpan = document.querySelector('.incompleted-count');

// Contadores de tareas
const totalCount = () => {
    const howMany = ul.children.length; 
    totalCountSpan.innerHTML = howMany;
};

const completeCount = () => {
    const howMany = document.querySelectorAll('.line-through').length;
    completedCountSpan.innerHTML = howMany;
};

const incompletedCount = () => {
    const howMany = document.querySelectorAll('ul li:not(.line-through)').length; 
    incompletedCountSpan.textContent = howMany;
};

const todoCount = () => {
    totalCount();
    completeCount();
    incompletedCount();
};



form.addEventListener('submit', async e => {
    e.preventDefault();

    if (input.value === '') {
        return;
    }

    try {
        const { data } = await axios.post('/api/todos', { text: input.value });
        const listItem = document.createElement('li');
        listItem.id = data.id; // Usar _id
        console.log('Nuevo ID de tarea asignado:', listItem.id); // Log del nuevo ID
        listItem.classList.add('flex', 'flex-row');

        listItem.innerHTML = `
            <div class="group grow flex flex-row justify-between">
                <button class="delete-icon w-12 md:w-14 hidden group-hover:flex group-hover:justify-center group-hover:items-center cursor-pointer bg-red-500 origin-left">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-7 md:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <p class="p-4 break-words grow">${data.text}</p>
            </div>
            <button class="check-icon w-12 md:w-14 flex justify-center items-center cursor-pointer border-l border-slate-300 dark:border-slate-400 hover:bg-green-300 transition duration-300 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-7 md:w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </button>
        `;

        ul.append(listItem);
        input.value = '';
        todoCount();
    } catch (error) {
        console.error('Error al agregar tarea:', )}})


ul.addEventListener('click', async e => {
    if (e.target.closest('.delete-icon')) {
        const li = e.target.closest('li');
        const todoId = li.id; // Asegúrate de que el ID se esté obteniendo correctamente
        try {
            await axios.delete(`/api/todos/${todoId}`);
            li.remove();
            todoCount();
        } catch (error) {
            console.error('Error al eliminar tarea:', error);
        }
    }

    if (e.target.closest('.check-icon')) {
        const checkIcon = e.target.closest('.check-icon');
        const listItem = checkIcon.parentElement;
    

        try {


            if (!listItem.classList.contains('line-through')) {
                await axios.patch(`/api/todos/${listItem.id}`, { checked: true});
                checkIcon.classList.add('bg-green-400');
                checkIcon.classList.remove("hover:bg-green-300")
                listItem.classList.add('line-through', 'text-slate-400', 'dark:text-slate-600');
            } else {

                await axios.patch(`/api/todos/${listItem.id}`, { checked: false});
                checkIcon.classList.remove('bg-green-400');
                checkIcon.classList.add("hover:bg-green-300")
                listItem.classList.remove('line-through', 'text-slate-400', 'dark:text-slate-600');
            }

            todoCount();
        } catch (error) {
            console.error('Error al actualizar tarea:', error);
        }
    }
});

// Cargar las tareas desde el servidor cuando se inicia la aplicación
(async () => {
    try {
        const { data } = await axios.get('/api/todos');
        data.forEach(todo => {
            const listItem = document.createElement('li');
            listItem.id = todo.id; // Usar _id
            console.log(listItem.id);
            listItem.classList.add('flex', 'flex-row');
            listItem.innerHTML = `
                <div class="group grow flex flex-row justify-between">
                    <button class="delete-icon w-12 md:w-14 hidden group-hover:flex group-hover:justify-center group-hover:items-center cursor-pointer bg-red-500 origin-left">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-7 md:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <p class="p-4 break-words grow">${todo.text}</p>
                </div>
                <button class="check-icon w-12 md:w-14 flex justify-center items-center cursor-pointer border-l border-slate-300 dark:border-slate-400 hover:bg-green-300 transition duration-300 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-7 md:w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </button>
            `;

            if (todo.checked) {
                listItem.classList.add('line-through', 'text-slate-400', 'dark:text-slate-600');
                listItem.querySelector('.check-icon').classList.add('bg-green-400');
            }

            ul.append(listItem);
        });
        todoCount();
    } catch (error) {
        console.error('Error al cargar tareas:', error);
        window.location.pathname = '/login';
    }
})();

const handleDblClick = (e) => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const selectedText = range.toString();
        console.log('Texto seleccionado:', selectedText);
        // Tu lógica aquí
    } else {
        console.warn('No hay una selección activa.');
    }
};

document.addEventListener('click', handleDblClick);
