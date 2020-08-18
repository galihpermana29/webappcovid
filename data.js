class RenderData {
    constructor(death, confirmed, recovered) {
        this.death = death;
        this.confirmed = confirmed;
        this.recovered = recovered;
    }

    renderAllDataProv() {
        const dataCovidProv = document.querySelector('.statistikProvinsi');
        dataCovidProv.innerHTML = '';
        dataCovidProv.innerHTML +=
        `<div class="cont death">
        <h1 class="title">Meninggal</h1>
        <h1>${this.death}</h1>
        </div>

        <div class="cont positive">
            <h1 class="title">Terkonfirmasi</h1>
            <h1>${this.confirmed}</h1>
        </div>

        <div class="cont recovered">
            <h1 class="title">Sembuh</h1>
            <h1>${this.recovered}</h1>
        </div>
    `;
    }

    renderAllDataNas() {
        const dataCovidNas = document.querySelector('.statistikNasional');
        dataCovidNas.innerHTML = '';
        dataCovidNas.innerHTML += `
        <div class="cont death">
        <h1 class="title">Meninggal</h1>
        <h1>${this.death}</h1>
        </div>
        
        <div class="cont positive">
            <h1 class="title">Terkonfirmasi</h1>
            <h1>${this.confirmed}</h1>
        </div>
        
        <div class="cont recovered">
            <h1 class="title">Sembuh</h1>
            <h1>${this.recovered}</h1>
        </div>`;
    }
}

export {RenderData};