// Mendapatkan elemen tampilan kalkulator
const display = document.getElementById("display");

// Menambahkan angka atau operator ke tampilan kalkulator
function addNumber(value) {
    display.value += value;
}

// Menghapus tampilan kalkulator
function clearDisplay() {
    display.value = '';
}

// Menghapus karakter terakhir di tampilan kalkulator
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Menghitung hasil ekspresi matematika
function calculateResult() {
    try {
        // Mengganti simbol untuk kompatibilitas dengan eval
        let expression = display.value;
        expression = expression.replace(/x/g, '*').replace(/÷/g, '/');
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

// Fungsi untuk menghitung akar kuadrat
function calculateSquareRoot() {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.sqrt(value);
    } else {
        display.value = 'Error';
    }
}

// Fungsi untuk menghitung persentase
function calculatePercentage() {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = value / 100;
    } else {
        display.value = 'Error';
    }
}

// Menangani input keyboard
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Memeriksa apakah yang ditekan adalah angka atau operator yang valid
    if (/[0-9+\-*/.÷x]/.test(key)) {
        addNumber(key);
    }

    // Memeriksa jika tombol Enter ditekan untuk menghitung hasil
    if (key === 'Enter') {
        calculateResult();
    }

    // Memeriksa jika tombol Backspace ditekan untuk menghapus karakter terakhir
    if (key === 'Backspace') {
        deleteLast();
    }
});
