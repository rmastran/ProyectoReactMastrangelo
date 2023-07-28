const pelotas = [
    { id: 1, category: 'antiguas', title: 'Pelota 1', stock: 10, price: 5000, description:'lorem', img:'../img/pelota1930.png'},
    { id: 2, category: 'clasicas', title: 'Pelota 2', stock: 15, price: 3000, description:'lorem', img:'../img/pelota1978.png'},
    { id: 3, category: 'clasicas', title: 'Pelota 3', stock: 6, price: 8000, description:'lorem', img:'../img/pelota1994.png'},
    { id: 4, category: 'clasicas', title: 'Pelota 4', stock: 13, price: 3000, description:'lorem', img:'../img/pelota2002.png'},
    { id: 5, category: 'nuevas', title: 'Pelota 5', stock: 50, price: 1000, description:'lorem', img:'../img/pelota2023.png'},
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