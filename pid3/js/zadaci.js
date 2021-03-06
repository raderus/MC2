/* Copyright Radovan Rus (c) 2018. */
const obzor = Array.from(document.getElementsByClassName("obzor"));
const karta = Array.from(document.getElementsByClassName("karta"));
const kompas = Array.from(document.getElementsByClassName("kompas"));
const vjetar = Array.from(document.getElementsByClassName("vjetar"));
const nizina = Array.from(document.getElementsByClassName("nizina"));
const razv = Array.from(document.getElementsByClassName("razv"));
const zem = Array.from(document.getElementsByClassName("zem"));
const riba = Array.from(document.getElementsByClassName("riba"));
const bodovi = document.querySelector(".bodovi");
const postoci = document.querySelector(".postoci");
const modal = document.getElementById("modal");
const ocjena = document.querySelector(".ocjena");
const btnG1 = document.querySelector(".btn-g1");
const btnG2 = document.querySelector(".btn-g2");
const btnG3 = document.querySelector(".btn-g3");
const btnG4 = document.querySelector(".btn-g4");
const btnL1 = document.querySelector(".btn-l1");
const btnL2 = document.querySelector(".btn-l2");
const btnL3 = document.querySelector(".btn-l3");
const btnL4 = document.querySelector(".btn-l4");
const unesi1 = document.querySelector(".unesi1");
const unesi2 = document.querySelector(".unesi2");
const unesi3 = document.querySelector(".unesi3");
const submn = document.getElementById("submit");
const button = document.querySelectorAll("form a.button");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");

let counter = 0;

const submitFunction = () => {

    if (vjetar[1].checked) {
        counter++;
        const da = document.createElement('span');
        da.setAttribute('class', 'da');
        btnG1.appendChild(da);
    } else {
        const ne = document.createElement('span');
        ne.setAttribute('class', 'ne');
        btnG1.appendChild(ne);
    };
    if (karta[1].checked) {
        counter++;
        const da = document.createElement('span');
        da.setAttribute('class', 'da');
        btnG2.appendChild(da);
    } else {
        const ne = document.createElement('span');
        ne.setAttribute('class', 'ne');
        btnG2.appendChild(ne);
    };
    if (kompas[0].checked) {
        counter++;
        const da = document.createElement('span');
        da.setAttribute('class', 'da');
        btnG3.appendChild(da);
    } else {
        const ne = document.createElement('span');
        ne.setAttribute('class', 'ne');
        btnG3.appendChild(ne);
    };
    if (obzor[0].checked) {
        counter++;
        const da = document.createElement('span');
        da.setAttribute('class', 'da');
        btnG4.appendChild(da);
    } else {
        const ne = document.createElement('span');
        ne.setAttribute('class', 'ne');
        btnG4.appendChild(ne);
    };

    if (nizina[2].checked) {
        counter++;
        const da = document.createElement('span');
        da.setAttribute('class', 'da');
        btnL1.appendChild(da);
    } else {
        const ne = document.createElement('span');
        ne.setAttribute('class', 'ne');
        btnL1.appendChild(ne);
    };
    if (razv[1].checked) {
        counter++;
        const da = document.createElement('span');
        da.setAttribute('class', 'da');
        btnL2.appendChild(da);
    } else {
        const ne = document.createElement('span');
        ne.setAttribute('class', 'ne');
        btnL2.appendChild(ne);
    };
    if (zem[0].checked) {
        counter++;
        const da = document.createElement('span');
        da.setAttribute('class', 'da');
        btnL3.appendChild(da);
    } else {
        const ne = document.createElement('span');
        ne.setAttribute('class', 'ne');
        btnL3.appendChild(ne);
    };
    if (riba[3].checked) {
        counter++;
        const da = document.createElement('span');
        da.setAttribute('class', 'da');
        btnL4.appendChild(da);
    } else {
        const ne = document.createElement('span');
        ne.setAttribute('class', 'ne');
        btnL4.appendChild(ne);
    };

    const obvText1 = document.querySelector(".obv-text1");

    const orijent = document.querySelector(".orijent").value;
    const ori = orijent.replace(/\s+/g, '').toLowerCase();
    const tlocrt = document.querySelector(".tlocrt").value;
    const tlo = tlocrt.replace(/\s+/g, '').toLowerCase();
    const gorski = document.querySelector(".gora").value;
    const gora = gorski.replace(/\s+/g, '').toLowerCase();

    if (ori === "orijentacija" || ori === "orjentacija" || ori === "orjentiranje" || ori === "orijentiranje") {
        counter++;
        const da = document.createElement('span');
        da.setAttribute('class', 'da');
        unesi1.appendChild(da);
    } else {
        const ne = document.createElement('span');
        ne.setAttribute('class', 'ne');
        unesi1.appendChild(ne);
    };

    if (tlo === "tlocrt") {
        counter++;
        const da = document.createElement('span');
        da.setAttribute('class', 'da');
        unesi2.appendChild(da);
    } else {
        const ne = document.createElement('span');
        ne.setAttribute('class', 'ne');
        unesi2.appendChild(ne);
    };

    if (gora === "gorskom" || gora === "gorski" || gora === "planinski" || gora === "planinskom") {
        counter++;
        const da = document.createElement('span');
        da.setAttribute('class', 'da');
        unesi3.appendChild(da);
    } else {
        const ne = document.createElement('span');
        ne.setAttribute('class', 'ne');
        unesi3.appendChild(ne);
    };

    if (p1.parentNode.classList.contains('spremnik2') && p2.parentNode.classList.contains('spremnik1')) {
        counter++
        const da = document.createElement('span');
        da.setAttribute('class', 'da');
        document.querySelector('.dolje').appendChild(da);
    } else {
        const ne = document.createElement('span');
        ne.setAttribute('class', 'ne');
        document.querySelector('.dolje').appendChild(ne);
    };


}

const con = () => {
    modal.style.display = "block";
    bodovi.innerHTML = counter;
    let post = counter /12 * 100;
    post = Math.round(post) / 1;
    postoci.innerHTML = counter + " / 12";
    if(post < 50) ocjena.innerHTML = "Broj bodova nije dovoljan. Još vježbati pojmove.";
    if(post >= 50 && post < 64) ocjena.innerHTML = "vaša ocjena je 2";
    if(post >= 64 && post < 76) ocjena.innerHTML = "vaša ocjena je 3";
    if(post >= 76 && post < 88) ocjena.innerHTML = "vaša ocjena je 4";
    if(post >= 88 && post < 100) ocjena.innerHTML = "BRAVO!!! Vaša ocjena je 5";

    submn.style.display = "none";
    button.forEach( (item) => {
        item.style.display = "flex";
    });

    const inputAllBlock = document.querySelectorAll("input[type=text]");
    inputAllBlock.forEach( (item) => {
        item.readOnly = true;
    });
    const labelAllBlock = document.querySelectorAll("label");
    labelAllBlock.forEach( (item) => {
        item.setAttribute('style', 'pointer-events: none;');
    });

    closeModal();
}
const closeModal = () => {
    const closeicon = document.querySelectorAll(".clo");
    closeicon.forEach( (item) => {
        item.addEventListener("click", function(){
            modal.style.display = "none";
        });
    })

}
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
const submitDisable = () => {
    submn.disabled = true;
    submn.style.opacity = "0.6";
}

/* Drag & Drop */
function allowDrop(ev) {
    ev.preventDefault();
}
// function called when the drag operation starts
function dragStart(ev) {
    ev.dataTransfer.setData('Text', ev.target.id);
}
// function called when the dragged element is dropped
function drop(ev, el) {
    ev.preventDefault();
    const drag_data = ev.dataTransfer.getData('Text');
    const dragstor = document.getElementById(drag_data);

    el.appendChild(dragstor);
}

p1.addEventListener('touchstart', (e) => {
    document.documentElement.style.overflow = 'hidden';
});
p2.addEventListener('touchstart', (e) => {
    document.documentElement.style.overflow = 'hidden';
});

document.addEventListener('touchend', (e) => {
    document.documentElement.style.overflow = 'auto';
});

// IE forEach fix
if (!NodeList.prototype.forEach) {
    Object.defineProperty(NodeList.prototype, "forEach", {
        value: Array.prototype.forEach,
        enumerable: true,
        configurable: true,
        writable: true
    });
}


