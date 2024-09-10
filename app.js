document.getElementById('calcular').addEventListener('click', calcularEmpleadoDelMes);

function calcularEmpleadoDelMes() {
    // Precios de los productos
    const precios = {
        aqua: 200,
        emocion: 180,
        alegria: 160,
        frescura: 150
    };

    // Cantidades vendidas por Juana
    const juanaVentas = {
        aqua: parseInt(document.getElementById('juanaAqua').value) || 0,
        emocion: parseInt(document.getElementById('juanaEmocion').value) || 0,
        alegria: parseInt(document.getElementById('juanaAlegria').value) || 0,
        frescura: parseInt(document.getElementById('juanaFrescura').value) || 0
    };

    // Cantidades vendidas por Pedro
    const pedroVentas = {
        aqua: parseInt(document.getElementById('pedroAqua').value) || 0,
        emocion: parseInt(document.getElementById('pedroEmocion').value) || 0,
        alegria: parseInt(document.getElementById('pedroAlegria').value) || 0,
        frescura: parseInt(document.getElementById('pedroFrescura').value) || 0
    };

    // Calcular el total vendido por cada vendedor
    const totalJuana = calcularTotal(juanaVentas, precios);
    const totalPedro = calcularTotal(pedroVentas, precios);

    // Determinar el empleado del mes
    let resultado = document.getElementById('resultado');
    if (totalJuana > totalPedro) {
        resultado.innerHTML = `Juana es la empleada del mes con $${totalJuana} en ventas.`;
    } else if (totalPedro > totalJuana) {
        resultado.innerHTML = `Pedro es el empleado del mes con $${totalPedro} en ventas.`;
    } else {
        resultado.innerHTML = `Empate. Ambos vendieron $${totalJuana}.`;
    }
}

// Función para calcular el total de ventas
function calcularTotal(ventas, precios) {
    return ventas.aqua * precios.aqua +
           ventas.emocion * precios.emocion +
           ventas.alegria * precios.alegria +
           ventas.frescura * precios.frescura;
}
