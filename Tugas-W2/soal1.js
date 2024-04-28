const prompt = require('prompt-sync')({ sigint: true });

const numberInput = prompt('Masukkan Angka : ');

function pangkat2(input) {
	if ( input < 0 ) {
		console.log('Tidak bisa input bilangan negatif');
	} else if ( input % 2 == 1 ) {
		console.log('Tidak bisa input bilangan ganjil');
	} else {
		const jawaban  = Math.sqrt(input);
		console.log(`Akar dari ${input} adalah ${jawaban}`);
	}
}

pangkat2(numberInput);