
const yuksekqiymet =document.getElementById('yuksekqiymet'); 
// const yuksekqiymetdeyeri =document.getElementById('yuksekqiymet2');
// const mehsuladi =document.getElementById('mehsuladi'); 
// const ortalama = document.getElementById('ortalama');
// const say = document.getElementById('saylari');
const nmbr = document.getElementById('number');








// fetch('https://northwind.vercel.app/api/products')
//     .then(res => res.json())
//     .then(data => {
//         let yuksekqiymet = 0;
//         let productWithYuksekqiymet = 0;

//         data.forEach(item => { 
//          if (item.unitPrice > yuksekqiymet) {
//             yuksekqiymet = item.unitPrice;
//             productWithYuksekqiymet = item;
//             }
//         });

//         yuksekqiymet2.textContent = `${yuksekqiymet}`; 
//         productName.textContent = productWithYuksekqiymet ? productWithYuksekqiymet.name : 'Mehsul tapilmadi';
//      });






// fetch('https://northwind.vercel.app/api/products')
//     .then(res => res.json())
//     .then(data => {
//         const stockk = data.map(product => product.unitsInStock); 
//         const total = stockk.reduce((total, stock) => total + stock, 0);
//         const ortalamaStock = total / stockk.length; 

//         ortalama.textContent= `${ortalamaStock}`

//     })





// C ILE BASLAYAN ADLARI GOSTER

// const names = document.getElementById('names')
// fetch('https://northwind.vercel.app/api/products')
//     .then(res => res.json())
//     .then(data => {
//         const adlar = data.map(product => product.name);
//         const adlarigoster = adlar.filter(name => name.startsWith('C'));
//         names.textContent=`${adlarigoster}`
//     })







// fetch('https://northwind.vercel.app/api/customers')
//     .then(res => res.json())
//     .then(data => {
//        const london = data.filter(item => item.address.city === "London");
//        london.forEach(item => {
//             console.log(item.contactName);
//        });
//     });









// fetch('https://northwind.vercel.app/api/customers')
//     .then(res => res.json())
//     .then(data => {
//         const sayi = data.filter(m=>m.address.region === "NULL")
//         saylari.textContent = umumi sayi:${sayi.length}
//     })




// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => {
//       const nmbr = data.filter(item => item.userId === 1)
//       number.textContect = `${nmbr.lenhth}`

//     })




