import { RenderData } from './data.js';
import './data/dataprov.js';
import './element/jumbotronElement.js';
import './element/informationElement.js';
import './element/footerElement.js';

// ! API

// Base Url for API
const baseURL = 'https://corona.coollabs.work';

// Function getDataCoronaProv
const getDataCoronaProv = async () => {
	// ambil nilai yang di klik pada dropdown
	const select = document.querySelector('#selectProv');
	const pilihProvinsi = select.selectedIndex;
	const provinsiValue = document.getElementsByTagName('option')[pilihProvinsi]
		.value;

	// jalankan fetch
	const res = await fetch(`${baseURL}/indonesia/provinsi/${provinsiValue}/`);
	const resJSON = await res.json();

	// instance baru dari class RenderData yang diisi argumen data json (meninggal, positif, sembuh)
	let renderDataProvinsi = new RenderData(
		resJSON.Kasus_Meni,
		resJSON.Kasus_Posi,
		resJSON.Kasus_Semb
	);

	// kasih method renderAllDataProv untuk merender data dan html
	renderDataProvinsi.renderAllDataProv();
};

const getDataCoronaNas = async () => {
	const ress = await fetch(`${baseURL}/country/indonesia`);
	const ressJSON = await ress.json();

	let renderDataNasional = new RenderData(
		ressJSON.Deaths,
		ressJSON.Confirmed,
		ressJSON.Recovered
	);
	renderDataNasional.renderAllDataNas();
};

getDataCoronaNas();

// ketika select di click, jalankan function getDataCoronaProv

// select.addEventListener('click', getDataCoronaProv);

const tombolCari = document.querySelector('.tombol');
tombolCari.addEventListener('click', getDataCoronaProv);

// DOM MANIPULATION
const asksElement = document.querySelectorAll('.ask');
const anssElement = document.querySelectorAll('.ans');

asksElement.forEach((ask, index) => {
	ask.addEventListener('click', () => {
		anssElement[index].classList.toggle('show');
		ask.classList.toggle('chevron');
	});
});
