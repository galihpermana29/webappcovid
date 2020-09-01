class JumbotronElement extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = 
        `
        <img src="./image/landing1k.png" alt="Using Mask" class="mask">
        <div class="jumbotron-teks">
            <h1 class="mask-title">Data Pantauan Pasien Covid-19 Seluruh Indonesia</h1>
            <p class="mask-paragraf">Website ini dibuat sebagai bentuk kontribusi yang bisa kami berikan sebagai talenta digital di tengah pandemi virus Covid-19</p>
            <a href="#covid">Selengkapnya</a>
        </div>

        `;
    }
}

customElements.define('jumbotron-element', JumbotronElement);
