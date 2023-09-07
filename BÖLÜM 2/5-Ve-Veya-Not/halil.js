//&& ||

const yeniŞifre ="dasda!fbls";
if(yeniŞifre.length >=12 && yeniŞifre.includes('!'))
{
    console.log("şifrem baya güçlü");
}

else if(yeniŞifre.length >=8)
{
    console.log("şifre yeterli");
}

else
{
    console.log("Şifreyi Yeniden Giriniz")
}

const control = false ;
if(!control)
{
    console.log('kontrol başarılı');
}