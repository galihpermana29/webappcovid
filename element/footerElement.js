class ContributorElement extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
        <h1>Contributor</h1>
        <h2>Galih Permana | Developer</h2>
        <div class="sosmed">
            <a href="https://www.linkedin.com/in/galih-permana-7661b8186/" target="_blank"><i class="fab fa-linkedin-in"></i></a> 
            <a href="https://www.instagram.com/ygalihpermana/" target="_blank"><i class="fab fa-instagram"></i></a> 
        </div>
        <h2>Ryo Shandy | UI Designer</h2>
        <div class="sosmed">
            <a href=""><i class="fab fa-linkedin-in"></i></a> 
            <a href="https://www.instagram.com/ryoshandy/" target="_blank"><i class="fab fa-instagram"></i></a> 
        </div>
        <p>Made with <i class="fas fa-heart"></i></p><p>#JanganLupaPakaiMasker #CoronaVirus #AdaptasiKebiasaanBaru</p>
        
        `;
	}
}

customElements.define('contributor-element', ContributorElement);
