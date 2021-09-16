let palautaAika = () => {
    let uusi = new Date();
    let vuosi = uusi.getFullYear();
    let kk = uusi.getMonth() + 1;
    let paiva = uusi.getDate();
    let tunti = uusi.getHours();
    let min = uusi.getMinutes();
    let sek = uusi.getSeconds();

    if (tunti < 10) {
        tunti = "0" + tunti 
    }

    if (min < 10) {
        min = "0" + min;
    }

    if (sek < 10) {
        sek = "0" + sek;
    }


    let aika = tunti + ":" + min + ":" + sek;
    let paivaMaara = paiva + "/" + kk + "/" + vuosi;
    document.getElementById("munKello").innerText = aika + "\n" + paivaMaara;

    setTimeout(palautaAika, 1000);
};

palautaAika();