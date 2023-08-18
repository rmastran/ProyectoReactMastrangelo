const pelotas = [
    { id: 1, category: 'antiguas', title: 'Pelota 1924', stock: 15, price: 5000, description:'Balón oficial del Campeonato del mundo jugado en Francia', img:'../img/pelota1924.png'},
    { id: 2, category: 'antiguas', title: 'Pelota 1928', stock: 30, price: 5500, description:'Balón oficial del Campeonato del mundo jugado en Holanda', img:'../img/pelota1928.png'},
    { id: 3, category: 'antiguas', title: 'Pelota 1930', stock: 50, price: 3000, description:'Balón oficial del Campeonato del mundo jugado en Uruguay', img:'../img/pelota1930.png'},
    { id: 4, category: 'antiguas', title: 'Pelota 1950', stock: 3, price: 10000, description:'Balón oficial del Campeonato del mundo jugado en Brasil', img:'../img/pelota1950.png'},
    { id: 5, category: 'antiguas', title: 'Pelota 1958', stock: 11, price: 6000, description:'Balón oficial del Campeonato del mundo jugado en Suecia', img:'../img/pelota1958.png'},
    { id: 6, category: 'antiguas', title: 'Pelota 1962', stock: 18, price: 7000, description:'Balón oficial del Campeonato del mundo jugado en Chile', img:'../img/pelota1962.png'},
    { id: 7, category: 'clasicas', title: 'Pelota 1970', stock: 10, price: 5000, description:'Balón oficial del Campeonato del mundo jugado en México', img:'../img/pelota1970.png'},
    { id: 8, category: 'clasicas', title: 'Pelota 1978', stock: 4, price: 25000, description:'Balón oficial del Campeonato del mundo jugado en Argentina', img:'../img/pelota1978.png'},
    { id: 9, category: 'clasicas', title: 'Pelota 1986', stock: 15, price: 3000, description:'Balón oficial del Campeonato del mundo jugado en México', img:'../img/pelota1986.png'},
    { id: 10, category: 'clasicas', title: 'Pelota 1994', stock: 6, price: 8000, description:'Balón oficial del Campeonato del mundo jugado en Estados Unidos', img:'../img/pelota1994.png'},
    { id: 11, category: 'nuevas', title: 'Pelota 2002', stock: 13, price: 3000, description:'Balón oficial del Campeonato del mundo jugado en Korea-Japón', img:'../img/pelota2002.png'},
    { id: 12, category: 'nuevas', title: 'Pelota 2022', stock: 50, price: 1000, description:'Balón oficial del Campeonato del mundo jugado en Qatar', img:'../img/pelota2023.png'},
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