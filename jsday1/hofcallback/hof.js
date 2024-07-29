const angka_gaes = [1, 2, 4, 5, 6];

for (let Index = 0; Index < angka_gaes.length; Index++) {
    console.log(`hitung ${angka_gaes[Index]}`);
}

// map
const newAngkaGaes = angka_gaes.map((angkaAja, Index) => {
    try {
        if(angkaAja) {
            return angkaAja * 2;
        }
    } catch (err) {
        console.log('map tidak berfungsi');
    }
})

console.log(newAngkaGaes);

// filter 

let angka = [];
let inisialisasi_angka = {
    angkaPertama: [1, 5, 9],
    angkaKedua: 2,
    angkaKetika: 3
}

angka.push(inisialisasi_angka);
const join_angka = ', '.join(angka);
console.log(join_angka);