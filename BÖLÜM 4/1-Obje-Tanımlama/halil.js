let ogrenci={
    ad:'halil',
    yas:21,
    email:'halilarslan.info@gmail.com',
    sinif:12,
    dersler:['matematik','fizik','kimya']

};

console.log(ogrenci);
console.log(ogrenci.yas);

ogrenci.yas=20;
console.log(ogrenci.yas);
console.log(ogrenci['ad']);
ogrenci['ad']='Hakan';
console.log(ogrenci['ad']);

console.log(typeof ogrenci);



