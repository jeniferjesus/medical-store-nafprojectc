export interface Vitamin {
    id: number;
    category:string;
    name: string;
    price: number;
    description: string;
    images?:string;
}
export const Vitaminproduct = [
    {
        id: 1,
        category:'Vitamin',
        name: 'Beplex-Forte',
        price: 20,
        description: 'aaaa',
         images:'https://www.emedbucket.com/emedpro_img/uploads/product/main/epharma_admin/1628320892_134419_0.jpg'
    },
    {
        id: 2,
        category:'Vitamin',
        name: 'Dexorange-Syrup',
        price: 20,
        description: 'aaaa',
        images:'../../assets/medicine variety/iron.images/dexorange-syrup_.jpg'
    },
    {
        id: 3,
        category:'Vitamin',
        name: 'Ironox',
        price: 20,
        description: 'aaaa',
         images:'https://newassets.apollo247.com/pub/media/catalog/product/i/r/iro0150_1.jpg'
    }
]
