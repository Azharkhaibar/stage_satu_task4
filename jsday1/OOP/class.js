class Dog {
    // properties
    nama = "";
    length = 0;
    weight = 0;
    total = 0;

    // special method
    constructor(nama, length, weight) {
        this.nama = nama;
        this.length = length;
        this.weight = weight;
    }

    sit() {
        return `si ${this.nama} Tingginya ${this.length} beratnya ${this.weight}`;
    }

    tinggiKurangBerat() {
        this.total = this.length - this.weight;
        console.log(`hasil pengurangan : ${this.total}`);
    }

    conditional(x) {
        if (x > 0) {
            this.x = this.total < 100;
            if (!this.x) {
                console.log(`object sit : ${this.sit()}`); // Correctly call sit() method
            }
        } else {
            console.log('tidak ada hasil');
        }
    }

    conditional2(y) {
        this.y = y
        if (this.y != this.x) {
            if (!this.y) {
                console.log(`conditional2 salah : ${this.conditional2}`);
            } else {
                console.log(`object benar`);
            }
        }
    }
}

const setLatihan = new Dog("Udin", 170, 58);
console.log(setLatihan);

// Eksekusi
setLatihan.sit(); // Output: si Udin Tingginya 170 beratnya 58
setLatihan.tinggiKurangBerat(); // Output: hasil pengurangan : 112
setLatihan.conditional(1); // Output: si Udin Tingginya 170 beratnya 58
setLatihan.conditional2(1)
