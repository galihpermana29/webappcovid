const dataProvinsi = [
	'DKI Jakarta',
	'Jawa Timur',
	'Jawa Tengah',
	'Sulawesi Selatan',
	'Jawa Barat',
	'Kalimantan Selatan',
	'Sumatera Utara',
	'Bali',
	'Sumatera Selatan',
	'Papua',
	'Sulawesi Utara',
	'Nusa Tenggara Barat',
	'Banten',
	'Kalimantan Tengah',
	'Kalimantan Timur',
	'Maluku Utara',
	'Gorontalo',
	'Maluku',
	'Sumatera Barat',
	'Sulawesi Tenggara',
	'Daerah Istimewa Yogyakarta',
	'Riau',
	'Aceh',
	'Kepulauan Riau',
	'Papua Barat',
	'Kalimantan Barat',
	'Lampung',
	'Kalimantan Utara',
	'Sulawesi Barat',
	'Bengkulu',
	'Sulawesi Tengah',
	'Jambi',
	'Kepulauan Bangka Belitung',
	'Nusa Tenggara Timur',
];

const sorted = dataProvinsi.sort();

sorted.forEach((p) => {
	const options = document.createElement('option');
	const isiOptions = document.createTextNode(`${p}`);

	options.appendChild(isiOptions);

	const select = document.querySelector('#selectProv');
	select.appendChild(options);
});
