console.log('===== ini bagian inheritance =====');

// superb menganbil argumen dari constructor utama


class orang {
    constructor(nama, job, role) {
        this.nama = nama
        this.job = job
        this.role = role
    }

    nama_nama(randomNamaOrang, random, ...setName) {
        this.setName = ['azhar', 'hanvir'];
        random = Math.floor(Math.random() * this.setName.length);
        this.randomNamaOrang = randomNamaOrang;
        this.randomNamaOrang = this.setName[random];
        switch (this.randomNamaOrang) {
            case 'azhar':
                console.log('azhar');
            case 'hanvir':
                console.log('hanvir');
            default:
                console.log('tidak ada!');
        } 
        if (!this.randomNamaOrang) {
            console.log(`salah, coba lagi`);
            console.log(`${this.randomNamaOrang} ganteng`);
        } else {
            console.log(`anda benar`);
            console.log(`${this.randomNamaOrang} jelek`);
        }   
    }
}

class BiodataOrang extends orang {
  constructor(randomNamaOrang, random, tanggalLahir, rupaWajah, umur) {
    super(randomNamaOrang, random);
    (this.tanggalLahir = tanggalLahir), (this.rupaWajah = rupaWajah), (this.umur = umur);
  }

  orangPertama(x) {
    this.x = x;
    this.x = this.setName;
    if (this.randomNamaOrang) {
      console.log(this.nama_nama());
    }
    else {
       console.log(this.randomNamaOrang);
    }
  }
}

const ObjekOrang = new orang();
ObjekOrang.nama_nama("", "", [""]);
const ObjekKePertama = new BiodataOrang();
ObjekKePertama.orangPertama("");


