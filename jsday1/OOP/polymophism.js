console.log('====== INI BAGIAN POLYMOPHISM ======');

// Polimorfisme merupakan salah satu konsep inti bahasa pemrograman berorientasi objek dimana poli berarti banyak dan morfisme berarti mengubah suatu bentuk menjadi bentuk lain . Polimorfisme berarti fungsi yang sama dengan tanda tangan berbeda dipanggil berkali-kali. Dalam kehidupan nyata, misalnya, anak laki-laki pada saat yang sama bisa menjadi siswa, pengawas kelas, dll. Jadi, anak laki-laki dapat melakukan operasi yang berbeda pada waktu yang sama. Ini disebut polimorfisme. 

// latihan basic 

class HitunganSatu {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    pertambahan() {
        this.variabelNew = Math.floor(Math.random() * 20);
        if (this.variabelNew <= 10) {
            console.log(`Variabel baru (HitunganSatu): ${this.variabelNew} kurang atau sama dengan 10`);
        } else {
            console.log(`Variabel baru (HitunganSatu): ${this.variabelNew} lebih dari 10`);
        }
    }
}

class HitunganDua extends HitunganSatu {
    constructor(x, y, z, p) {
        super(x, y, z);
        this.p = p;
    }
    pertambahan() {
        this.variabelNew = Math.floor(Math.random() * 20);
        if (this.variabelNew <= 10) {
            console.log(`Variabel baru (HitunganDua): ${this.variabelNew} kurang atau sama dengan 10`);
        } else {
            console.log(`Variabel baru (HitunganDua): ${this.variabelNew} lebih dari 10`);
        }
    }
}

// Contoh penggunaan
const obj1 = new HitunganSatu(1, 2, 3);
const obj2 = new HitunganDua(4, 5, 6, 7);

obj1.pertambahan(); 
obj2.pertambahan(); 
