// const pdegeri=document.querySelector('p');
// console.log(pdegeri.innerText);

// pdegeri.innerText='Halil Arslan Fullstack Developer';

// const pdegeri=document.querySelectorAll('p');

// pdegeri.forEach(a=>{
//     console.log(a.innerText);
//     pdegeri.innerText += 'yeni alan';
// })

const icerik=document.querySelector('.icerik');
console.log(icerik.innerHTML);

icerik.innerHTML='<h2> Vue JS,React JS ,Angular JS</h2>';

const ogrenciler=['can','tuba','elif','can'];
ogrenciler.forEach(ogrenci=>{
    icerik.innerHTML +=`<p>${ogrenci} </p>`
})
