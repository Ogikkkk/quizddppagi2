const prompt = require('prompt-sync')();

let score = 0;
let jawaban_benar = 0;
let jawaban_salah = 0;
let point_per_soal = 1;

let soal = [
    {
        "q": "Yang merupakan member JKT 48?",
        "o": [
            'Jokowi',
            'Freya',
            'Nadin Amizah',
            'Igun Mama Takut',
        ],
        "a": 1 
    },
    {
        "q": "Nama kakak Upin dan Ipin adalah...",
        "o": [
            'Kak Rose',
            'Kak Jeane',
            'Monkey D. Luffy',
            'Igun Mama Takut',
        ],
        "a": 0 
    },
    {
        "q": " Negara tercinta kita adalah...",
        "o": [
            'USA',
            'Brazil',
            'Indoneia',
            'Jepang',
        ],
        "a": 2
    },
    {
        "q": "Makanan khas Bali adalah...",
        "o": [
            'Kerak telor',
            'Ayam Betutu',
            'Martabak telur',
            'Rumput laut',
        ],
        "a": 1
    },
    {
        "q": " Kartun jepang yang populer adalah...",
        "o": [
            'Naruto',
            'Upin dan Ipin',
            'Bima Sakti',
            'Boboiboy',
        ],
        "a": 0
    },
    
]

let nama = prompt('Input nama: ')

// Ulangi pada setiap pertanyaan yang akan ada
for (let soal = 0; soal < soal.length; i++) {
    console.log('\nSoal ' + (soal + 1) + ': ' + soal[i].q);
    
    // Menampilkan pilihan jawaban yang di pilih
    for (let j = 0; j < soal[i].o.length; j++) {
        console.log(j + '. ' + soal[i].o[j]);
    }

    // Menginput atau meminta jawaban pada si pengguna tergantung jawaban yang di pilih
    let jawaban = prompt('Jawaban Anda (0,1,2,3): ');

    // Mengecek jika jawabannya benar, poin akan bertambah begitu juga sebaliknya
    if (parseInt(jawaban) === soal[i].a) {
        console.log('Jawaban Anda benar!');
        score += point_per_soal;
        jawaban_benar++;
    } else {
        console.log('Jawaban Anda salah. Jawaban yang benar adalah: ' + soal[i].o[soal[i].a]);
        jawaban_salah++;
    }
}

console.log("Kuis selesai")
console.log("\n")
console.log("Statistic Kuis")
console.log('Nama\t\t:',nama)
console.log('Score\t\t:',score)
console.log('Jawaban benar\t:',jawaban_benar)
console.log('Jawaban salah\t:',jawaban_salah) 