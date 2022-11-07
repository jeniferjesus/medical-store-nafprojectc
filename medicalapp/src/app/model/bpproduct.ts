export interface Bpproduct {
    id: number;
    category:string;
    name: string;
    price: number;
    description: string;
    images?:string;
}
export const Bpproducts = [
    {
        id: 11,
        category:'BP',
        name: 'Atacand',
        price: 20,
        description: 'aaaa',
         images:'https://drmint.care/wp-content/uploads/2020/08/ATACAND-32-25MG-14TAB..jpg'
    },
    {
        id: 2,
        category:'Bp',
        name: 'Catapres',
        price: 20,
        description: 'aaaa',
        images:'https://5.imimg.com/data5/NA/BC/MY-8612369/catapres-medicine-500x500.jpg'
    },
    {
        id: 3,
        category:'Bp',
        name: 'Enalapril',
        price: 20,
        description: 'aaaa',
         images:'http://mcareexports.com/wp-content/uploads/2021/06/Enace-2.5mg-tablet.jpg'
    },
    {
        id: 4,
        category:'Bp',
        name: 'Ramipril',
        price: 20,
        description: 'aaaa',
        images:'https://www.simplymedsonline.co.uk/storage/products/5823/images/ramipril-capsules-es-741654607937.png'
    },
    {
        id: 5,
        category:'Bp',
        name: 'Nebilong',
        price: 20,
        description: 'aaaa',
        images:'https://www.practostatic.com/practopedia-images/v3/res-750/nebilong-5mg-tablet-10-s_f8f3501a-2d86-4279-ac40-e4193e976c39.JPG'
    }

]
