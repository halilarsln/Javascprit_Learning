const dersler=[
    {isim:'matematik',puan:90},
    {isim:'fizik',puan:80},
    {isim:'kimya',puan:85},
    

    

]



let ogrenci={
    ad:'halil',
    yas:21,
    email:'halilarslan.info@gmail.com',
    sinif:12,
    dersler:[
    {isim:'matematik',puan:90},
    {isim:'fizik',puan:80},
    {isim:'kimya',puan:85},
    ],
    login()
    {
        console.log('Ögrenci giriş yaptı');
    },
    logout()
    {
        console.log('Ögrenci çikiş yaptı');
    },
    printlessons()
    {
        console.log(this.dersler);
        //ogrenci.printlessons(this);
        this.dersler.forEach(a=>{
            console.log(a.isim,a.puan);
        })
    }


};
//console.log(this);
ogrenci.printlessons();
// ogrenci.login();
// ogrenci.logout();


