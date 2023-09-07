console.log("Merhaba Dünya");

let email ="halilarslan.info@gmail.com";
console.log(email);

//Birleştirme

let ad = "Halil";
let soyad ="Arslan";
let adSoyad = ad+" "+soyad;
console.log(adSoyad);

//Karakterleri Çekme

console.log(adSoyad[1]);

//Kaç Karakter

console.log(adSoyad.length);

//Methodlar

console.log(adSoyad.toLocaleUpperCase());
let kucukadsoyad=adSoyad.toLocaleUpperCase();
console.log(kucukadsoyad);
console.log(adSoyad);


let index=adSoyad.indexOf("l");
console.log("B'nin bulundugu index="+index);