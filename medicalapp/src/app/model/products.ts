export interface Products {
    id: number;
    category:string;
    name: string;
    price: number;
    description: string;
    images?:string;
}
export const products = [
    {
        id: 1,
        category:'acid',
        name: 'Dexilent',
        price: 20,
        description: 'aaaa',
         images:'https://5.imimg.com/data5/SELLER/Default/2021/8/EF/ZO/WU/131552548/dexilant-500x500.jpg'
    },
    {
        id: 2,
        category:'acid',
        name: 'Digene',
        price: 20,
        description: 'aaaa',
        images:'../../assets/medicine variety/acidity.iamges/Digene.jpg'
    },
    {
        id: 3,
        category:'acid',
        name: 'Lomacide',
        price: 20,
        description: 'aaaa',
         images:'https://5.imimg.com/data5/XF/BY/HI/SELLER-88326738/gelusil-500x500.jpg'
    },
    {
        id: 4,
        category:'acid',
        name: 'Pan-D',
        price: 20,
        description: 'aaaa',
        images:'https://sulochanapharmacy.com/wp-content/uploads/2021/11/107_21464_c.webp'
    },
    {
        id: 5,
        category:'acid',
        name: 'Pantaprazole',
        price: 20,
        description: 'aaaa',
        images:'../../assets/medicine variety/acidity.iamges/protonix-pantoprazole-250x250.jpg'
    }

]

   