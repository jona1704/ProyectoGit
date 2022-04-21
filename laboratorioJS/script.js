// Verificar que se cargo mi pagina
document.addEventListener('DOMContentLoaded', function(event){
    preloader();
    funcion_modo_oscuro();
    validarFormulario(); // Faltaba esta línea
    enviar();
    event.preventDefault();
});

function funcion_modo_oscuro(){
    // Accedemos al boton por el id
    const btnSwitch = document.querySelector('#switch');
    // Escucho por el boton
    btnSwitch.addEventListener('click', function(){
        // Acceder al body
        document.body.classList.toggle('dark');

        // if(!btnSwitch.classList.contains('active')){
        //     btnSwitch.classList.add('active');    
        // } else{
        //     btnSwitch.classList.remove('active');    
        // }
        btnSwitch.classList.toggle('active');
        
        // Requerimos conocer si existe el modo dark
        if(document.body.classList.contains('dark')){
            // En localStorage solo podemos guardar texto 
            localStorage.setItem('modo_dark','true');  
        } else{
            localStorage.setItem('modo_dark','false');     
        }
    });

    // Obtenemos variable modo_dark 
    // Estas lineas va afuera del btnSwitch.addEventListener('click');
    if(localStorage.getItem('modo_dark') === 'true'){
        document.body.classList.add('dark');
        btnSwitch.classList.add('active');
    } else{
        document.body.classList.remove('dark');
        btnSwitch.classList.remove('active');
    }
}

function validarFormulario(){
    const formulario = document.querySelector('.sugerencias-form'),
        inputs = document.querySelectorAll('.sugerencias-form [required]');

        // Crear span
        inputs.forEach(function(input){
            const span = document.createElement("span");
            span.id = 'e_' + input.name;
            span.textContent = input.title;
            span.classList.add("sugerencias-form_error","none");
            input.insertAdjacentElement("afterend", span);
        });

        document.addEventListener('keyup', function(event){
            // Buscar los inputs con required
            if(event.target.matches(".sugerencias-form [required]")){
                // Barremos todo el codigo buscandos los inputs con required
                let input = event.target, // e.target seria cada input
                    pattern = input.pattern || input.dataset.pattern;

                // Validamos si el input tiene el atributo de pattern y 
                // si el valor en el input no esta vacío
                if(pattern && input.value !== ""){
                    // Validamos el  pattern - Por medio de la expresion regular
                    let regex = new RegExp(pattern);
                        return !regex.exec(input.value)?(
                            document.getElementById('e_' + input.name).classList.add("is-active"),
                            document.getElementById('e_' + input.name).classList.remove("none")
                        ):(
                            document.getElementById('e_'+ input.name).classList.remove("is-active"),
                            document.getElementById('e_'+ input.name).classList.add("none")
                        )
                }

                if(!pattern){
                    return input.value === ""?(
                        document.getElementById('e_' + input.name).classList.add("is-active"),
                        document.getElementById('e_' + input.name).classList.remove("none")
                    ):(
                        document.getElementById('e_' + input.name).classList.remove("is-active"),
                        document.getElementById('e_' + input.name).classList.add("none")
                    )
                }
            }
        });
}

function preloader(){
    let outer = document.querySelector(".outer");
    let percent = document.querySelector("span");
    let contenedor = document.querySelector(".container");
    let count = 0;
    window.addEventListener('load', function(){
        if(!this.sessionStorage.getItem('doNotShow')){
            this.sessionStorage.setItem('doNotShow','true');
            let loading = setInterval(function(){
                if(count == 100){
                    outer.classList.remove("active-loader");
                    outer.classList.add("active-loader-2");
                    clearInterval();
                } else{
                    count = count + 1;
                    percent.textContent = count + '%';
                    outer.classList.add("active-loader");
                }
            }, 50);          
            /* Cerrando Preloader*/
            setTimeout(function(){
                contenedor.classList.add('cerrar');
            }, 6000);
        }  else{
            /* Cerrando Preloader*/
            outer.style.display = "none";
            contenedor.style.display = "none";
        }      
    });
}

