// const a = (callBacka) =>{
//     let yas=40;
//     callBacka(yas);
// };
// a(function(value){
//     console.log(value);
// })

let ogrencilerim=['halil','ahmet','tuba','melike'];

ogrencilerim.forEach(function()
{
    console.log("Selam");
})

ogrencilerim.forEach(function(kişi,index)
{
    console.log(kişi,index);
})

const ogrenci = (kişi,index) =>
{
    console.log(`${index} - ${kişi}`);
}

ogrencilerim.forEach(ogrenci);