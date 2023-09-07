const yas = 20;

if(yas>18)
{
    console.log("18 yasindan büyüktür");
}

const adSoyad = ['can','tuce','elif'];

if(adSoyad.length > 2)
{
    console.log("işte benim öğrencilerim");
}

const sifre ="jakfvkafbkafb>jafva";

if(sifre.length >= 8)
{
    console.log("Şifre yeterincce uzun.");
}
else
{
    console.log("şifreyi yeniden giriniz.")
}

const yeniŞifre ="dasdasflbvsbvlsfbls";
if(yeniŞifre.length >=12)
{
    console.log("şifre yeterine güçlü");
}

else if(yeniŞifre.length >=8)
{
    console.log("şifre yeterli");
}

else
{
    console.log("Şifreyi Yeniden Giriniz")
}