export const pelotas = [
    {category: 'antiguas', title: 'Pelota 1928', stock: 30, price: 5500, description:'Balón oficial del Campeonato del Mundo jugado en Holanda', img:'../img/pelota1928.png'},
    {category: 'antiguas', title: 'Pelota 1930', stock: 50, price: 3000, description:'Balón oficial del Campeonato del Mundo jugado en Uruguay', img:'../img/pelota1930.png'},
    {category: 'antiguas', title: 'Pelota 1950', stock: 3, price: 10000, description:'Balón oficial del Campeonato del Mundo jugado en Brasil', img:'../img/pelota1950.png'},
    {category: 'antiguas', title: 'Pelota 1958', stock: 11, price: 6000, description:'Balón oficial del Campeonato del Mundo jugado en Suecia', img:'../img/pelota1958.png'},
    {category: 'antiguas', title: 'Pelota 1962', stock: 18, price: 7000, description:'Balón oficial del Campeonato del Mundo jugado en Chile', img:'../img/pelota1962.png'},
    {category: 'clasicas', title: 'Pelota 1970', stock: 10, price: 5000, description:'Balón oficial del Campeonato del Mundo jugado en México', img:'../img/pelota1970.png'},
    {category: 'clasicas', title: 'Pelota 1978', stock: 4, price: 25000, description:'Balón oficial del Campeonato del Mundo jugado en Argentina', img:'../img/pelota1978.png'},
    {category: 'clasicas', title: 'Pelota 1986', stock: 15, price: 3000, description:'Balón oficial del Campeonato del Mundo jugado en México', img:'../img/pelota1986.png'},
    {category: 'clasicas', title: 'Pelota 1994', stock: 6, price: 8000, description:'Balón oficial del Campeonato del Mundo jugado en Estados Unidos', img:'../img/pelota1994.png'},
    {category: 'nuevas', title: 'Pelota 2002', stock: 13, price: 3000, description:'Balón oficial del Campeonato del Mundo jugado en Korea-Japón', img:'../img/pelota2002.png'},
    {category: 'nuevas', title: 'Pelota 2022', stock: 50, price: 1000, description:'Balón oficial del Campeonato del Mundo jugado en Qatar', img:'../img/pelota2023.png'},
];

export const getDataPelotas = new Promise (resolve => {
    setTimeout(() => {
        resolve(pelotas);
    }, 2000);
});

export const getItemPelota = (id) => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(pelotas.find((dataPelota)=> dataPelota.id === id));
        }, 2000);
    });
}