class Rumah {
    constructor(lokasi, harga, jumlah) {
        this.lokasi = lokasi;
        this.harga = harga;
        this.jumlah = jumlah;
    }

    namaPerumahan() {
        console.log(`Lokasi: ${this.lokasi}, Harga: ${this.harga}`);
    }

    getJumlah() {
        return this.jumlah;
    }
}

class RumahMewah extends Rumah {
    constructor(lokasi, harga, jumlah, fasilitas) {
        super(lokasi, harga, jumlah);
        this.fasilitas = fasilitas;
    }

    getFasilitas() {
        return this.fasilitas;
    }
}

// Membuat objek dari kelas Rumah
const rumahSederhana = new Rumah('Jakarta', 500000000, 100);
rumahSederhana.namaPerumahan(); // Output: Lokasi: Jakarta, Harga: 500000000
console.log(`Jumlah: ${rumahSederhana.getJumlah()}`); // Output: Jumlah: 100

// Membuat objek dari kelas RumahMewah
const rumahMewah = new RumahMewah('Bali', 2000000000, 10, ['Kolam Renang', 'Garasi Besar', 'Taman']);
rumahMewah.namaPerumahan(); // Output: Lokasi: Bali, Harga: 2000000000
console.log(`Jumlah: ${rumahMewah.getJumlah()}`); // Output: Jumlah: 10
console.log(`Fasilitas: ${rumahMewah.getFasilitas().join(', ')}`); // Output: Fasilitas: Kolam Renang, Garasi Besar, Taman
