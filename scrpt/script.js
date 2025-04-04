document.addEventListener('DOMContentLoaded', () => {
    const botonesVerDetalles = document.querySelectorAll('button[onclick^="mostrarDetalles"]');
    const botonesCerrarDetalles = document.querySelectorAll('button[onclick^="cerrarDetalles"]');
    const botonesVerMas = document.querySelectorAll('button[onclick^="mostrarMas"]');

    botonesVerDetalles.forEach(boton => {
        boton.addEventListener('click', () => {
            const id = boton.getAttribute('onclick').match(/'([^']+)'/)[1];
            const detalles = document.getElementById(id);
            detalles.classList.remove('oculto');
        });
    });

    botonesCerrarDetalles.forEach(boton => {
        boton.addEventListener('click', () => {
            const id = boton.getAttribute('onclick').match(/'([^']+)'/)[1];
            const detalles = document.getElementById(id);
            detalles.classList.add('oculto');
        });
    });

    botonesVerMas.forEach(boton => {
        boton.addEventListener('click', () => {
            const id = boton.getAttribute('onclick').match(/'([^']+)'/)[1];
            const galeria = document.getElementById(id);
            galeria.classList.toggle('oculto');
        });
    });
});
function enviarWhatsApp(nombre, modelo, año, detalles) {
    // Construir el mensaje para enviar por WhatsApp
    const mensaje = `Hola,%20me%20interesa%20la%20maquinaria:%20${encodeURIComponent(nombre)}.%0ASigue%20disponible%20y%20los%20datos%20son:%0AModelo:%20${encodeURIComponent(modelo)}%0AAño:%20${encodeURIComponent(año)}%0ADetalles:%20${encodeURIComponent(detalles)}`;
    // Enviar a WhatsApp con el mensaje predefinido
    window.open(`https://wa.me/961670446?text=${mensaje}`, '_blank');
}