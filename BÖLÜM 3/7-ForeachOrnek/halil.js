const ulum=document.querySelector('.main');

let ogrencilerim = ['hakan','can','elif','tuba'];

let html =``;

ogrencilerim.forEach(ogrenci =>{
    html +=`<li>${ogrenci}</li>`
   
})


console.log(html);

ulum.innerHTML=html;