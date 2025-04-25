function createProgressBar(canvasId, stockRemaining, stockConsumed) {
    var ctx = document.getElementById(canvasId).getContext('2d');
    var progressBar = new Chart(ctx, {
        type: 'doughnut',
        data: {
        labels: ['Stock restante', 'Consumido'],
        datasets: [{
            data: [stockRemaining, stockConsumed],
            backgroundColor: ['#821212', '#e0e0e0'], // Color rojo para el stock restante
            borderWidth: 0
        }]
        },
        options: {
        circumference: Math.PI,
        rotation: Math.PI,
        cutout: '80%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
            enabled: false
            }
        },
    }
    });
}
  