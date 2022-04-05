// Verificar que se cargo mi pagina
document.addEventListener('DOMContentLoaded', function(){
    funcion_modo_oscuro();
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