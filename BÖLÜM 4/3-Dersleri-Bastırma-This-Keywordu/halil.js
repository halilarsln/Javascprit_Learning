let ogrenci={
    ad:'halil',
    yas:21,
    email:'halilarslan.info@gmail.com',
    sinif:12,
    dersler:['matematik','fizik','kimya'],
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
        this.dersler.forEach(ders=>{
            console.log(ders);
        })
    }


};
//console.log(this);
ogrenci.printlessons();
// ogrenci.login();
// ogrenci.logout();


