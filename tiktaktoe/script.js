
let vuoro = "";
let peliKaynnissa = false;
let sisalto = 
["T", "I", "C", 
"T", "A", "C",
"T", "O", "E"];
document.querySelector('#aloitusNappi').style.visibility = "visible";
document.querySelector('#ilmoitus').style.visibility = "hidden";




const klikkaaAloita = () => {
    pelinKaynnistys();
    document.querySelector('#aloitusNappi').style.visibility = "hidden";
}

const pelinKaynnistys = () => {
    peliKaynnissa = true;
    vuoro = "X";
    sisalto = 
    ["", "", "", 
    "", "", "",
    "", "", ""];
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

const klikkaa = (klikattuRuutu) => {
    const ruutu = klikattuRuutu.target;
    const ruutuNro = parseInt(ruutu.getAttribute('id'));
    if (sisalto[ruutuNro] === "" && peliKaynnissa) {
        if (vuoro === "X") {
            sisalto[ruutuNro] = "X";
            document.getElementById(ruutuNro.toString()).innerHTML = "X";
        }
        if (vuoro === "O") {
            sisalto[ruutuNro] = "O"
            document.getElementById(ruutuNro.toString()).innerHTML = "O"
        }
    }
    console.log(vuoro);
    testaaVoittorivi();
}

console.log(sisalto);
const vuoronVaihto = () => {
    if (vuoro === "X") {
        vuoro = "O";
        return;
    }
    if (vuoro === "O") {
        vuoro = "X";
        return;
    } else {
        console.log("Virhe vuoron vaihdossa.")
    }
}

const voittoRivit = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const testaaVoittorivi = () => {
    let peliVoitettu = false;
    for (let i = 0; i <= 7; i++) {
        const voittoRivi = voittoRivit[i];
        let a = sisalto[voittoRivi[0]];
        let b = sisalto[voittoRivi[1]];
        let c = sisalto[voittoRivi[2]];
        if (a === "" || b === "" || c === "") {
            continue;
        }
        if (a === b && b === c) {
            peliVoitettu = true;
            break;
        }
    }
    
    if (peliVoitettu) {
        peliKaynnissa = false;
        document.querySelector('#ilmoitus').style.visibility = "visible";
        document.querySelector('#ilmoitusTeksti').innerHTML =  `VOITTAJA ON ${vuoro}`
        return;
    }

    let tasaPeli = !sisalto.includes("");
    if (tasaPeli) {
        peliKaynnissa = false;
        document.querySelector('#ilmoitus').style.visibility = "visible";
        document.querySelector('#ilmoitusTeksti').innerHTML =  `TASAPELI`
        return;
    }
    
    if (peliKaynnissa) {
        vuoronVaihto();
    }
}





document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', klikkaa));
document.querySelector('#aloitusNappi').addEventListener('click', klikkaaAloita);
document.querySelector('#ilmoitusNappi').addEventListener('click', alkuTila);


