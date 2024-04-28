const { productBin } = require("./response");


const data = productBin.data;

const jumlah = (data) => {
	let nilai = 0;

	data.map((el) => {
		nilai = nilai + el.quantity;
	});

	console.log(nilai);
};

jumlah(data); 