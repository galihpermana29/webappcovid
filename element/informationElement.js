// judul
class InformationTitle extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `<h1 class="title-faq">Informasi Seputar Covid-19</h1>
        `;
	}
}

customElements.define('information-title', InformationTitle);

// class information covid1
class InformationCov1 extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
        <div class="a1">
            <div class="ask">
                <h1>Apa itu Coronvirus (COVID-19)</h1>
                <i class="fas fa-chevron-circle-up"></i>
                <i class="fas fa-chevron-circle-down"></i>
            </div>
            <div class="ans">
                <p> <span>Coronavirus</span> merupakan keluarga besar virus yang menyebabkan penyakit pada <span> manusia dan hewan. </span> Pada manusia biasanya menyebabkan penyakit <span> infeksi saluran pernapasan, </span>  mulai flu biasa hingga penyakit yang serius seperti Middle East Respiratory Syndrome (MERS) dan Sindrom Pernapasan Akut Berat/Severe Acute Respiratory Syndrome (SARS). Coronavirus jenis baru yang ditemukan pada manusia sejak kejadian luar biasa muncul di Wuhan, Tiongkok, pada Desember 2019, kemudian diberi nama <span>Severe Acute Respiratory Syndrome Coronavirus 2 (SARS-COV2), dan menyebabkan penyakit Coronavirus Disease-2019 (COVID-19).</span></p>
            </div>
        </div>
        `;
	}
}

customElements.define('information-covid1', InformationCov1);

// class information covid2
class InformationCov2 extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
        <div class="a2">
                <div class="ask">
                    <h1>Apa gejala Coronavirus (COVID-19) ?</h1>
                    <i class="fas fa-chevron-circle-up"></i>
                    <i class="fas fa-chevron-circle-down"></i>
                </div>
                <div class="ans">
                    <p> Gejala COVID-19 sebagai berikut:
                        <ul>
                            <li>Demam ≥ 38°C</li>
                            <li>Batuk kering</li>
                            <li>Sesak napas</li>
                            <li>Nyeri tenggorokan/ketika menelan</li>
                        </ul>
                        Jika ada orang yang dalam 14 hari sebelum muncul gejala tersebut pernah melakukan perjalanan ke negara terjangkit atau pernah merawat/kontak erat dengan penderita COVID-19, maka orang tersebut akan diperiksa melalui pemeriksaan laboratorium lebih lanjut untuk memastikan diagnosisnya.
                    </p>
                </div>
        </div>
        `;
	}
}

customElements.define('information-covid2', InformationCov2);

// class information covid3
class InformationCov3 extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
        <div class="a3">
                <div class="ask">
                    <h1>Apakah COVID-19 dapat menular melalui udara ?</h1>
                    <i class="fas fa-chevron-circle-up"></i>
                    <i class="fas fa-chevron-circle-down"></i>
                </div>
                <div class="ans">
                    <p> 
                        <span>Tidak.</span> Hingga saat ini penelitian menyebutkan bahwa virus penyebab COVID-19 ditularkan melalui kontak dengan tetesan kecil (droplet) dan saluran pernapasan.
                    </p>
                </div>
         </div>
        `;
	}
}

customElements.define('information-covid3', InformationCov3);

// class information covid4
class InformationCov4 extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
        <div class="a4">
            <div class="ask">
                <h1>Bisakah manusia terinfeksi COVID-19 dari hewan ?</h1>
                <i class="fas fa-chevron-circle-up"></i>
                <i class="fas fa-chevron-circle-down"></i>
            </div>
            <div class="ans">
                <p> 
                    Saat ini, <span>belum ditemukan bukti bahwa hewan peliharaan seperti anjing atau kucing dapat terinfeksi virus COVID-19.</span> Namun, akan jauh lebih baik untuk <span>selalu</span> mencuci tangan dengan sabun dan air setelah kontak dengan hewan peliharaan. Kebiasaan ini dapat melindungi Anda terhadap berbagai bakteri umum seperti E.coli dan Salmonella yang dapat berpindah antara hewan peliharaan dan manusia.
                </p>
            </div>
        </div>
        `;
	}
}

customElements.define('information-covid4', InformationCov4);
