const shopData = {
    1: {
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: [
            {
                id: 2,
                name: 'Brown Brim',
                imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                price: 25,
            },
            {
                id: 3,
                name: 'Blue Beanie',
                imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
                price: 18,
            },
            {
                id: 4,
                name: 'Brown Cowboy',
                imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
                price: 35,
            },
            {
                id: 5,
                name: 'Grey Brim',
                imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
                price: 25,
            },
            {
                id: 6,
                name: 'Green Beanie',
                imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
                price: 18,
            },
            {
                id: 7,
                name: 'Palm Tree Cap',
                imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
                price: 14,
            },
            {
                id: 8,
                name: 'Red Beanie',
                imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
                price: 18,
            },
            {
                id: 9,
                name: 'Wolf Cap',
                imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
                price: 14,
            },
            {
                id: 10,
                name: 'Blue Snapback',
                imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
                price: 16,
            },
        ],
    },
    2: {
        id: 11,
        title: 'Sneakers',
        routeName: 'sneakers',
        items: [
            {
                id: 12,
                name: 'Adidas NMD',
                imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
                price: 220,
            },
            {
                id: 13,
                name: 'Adidas Yeezy',
                imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
                price: 280,
            },
            {
                id: 14,
                name: 'Black Converse',
                imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
                price: 110,
            },
            {
                id: 15,
                name: 'Nike White AirForce',
                imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
                price: 160,
            },
            {
                id: 16,
                name: 'Nike Red High Tops',
                imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
                price: 160,
            },
            {
                id: 17,
                name: 'Nike Brown High Tops',
                imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
                price: 160,
            },
            {
                id: 18,
                name: 'Air Jordan Limited',
                imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
                price: 190,
            },
            {
                id: 19,
                name: 'Timberlands',
                imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
                price: 200,
            },
        ],
    },
    3: {
        id: 20,
        title: 'Jackets',
        routeName: 'jackets',
        items: [
            {
                id: 21,
                name: 'Black Jean Shearling',
                imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
                price: 125,
            },
            {
                id: 22,
                name: 'Blue Jean Jacket',
                imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
                price: 90,
            },
            {
                id: 23,
                name: 'Grey Jean Jacket',
                imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
                price: 90,
            },
            {
                id: 24,
                name: 'Brown Shearling',
                imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
                price: 165,
            },
            {
                id: 25,
                name: 'Tan Trench',
                imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
                price: 185,
            },
        ],
    },
    4: {
        id: 26,
        title: 'Womens',
        routeName: 'womens',
        items: [
            {
                id: 27,
                name: 'Blue Tanktop',
                imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
                price: 25,
            },
            {
                id: 28,
                name: 'Floral Blouse',
                imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
                price: 20,
            },
            {
                id: 29,
                name: 'Floral Dress',
                imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
                price: 80,
            },
            {
                id: 30,
                name: 'Red Dots Dress',
                imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
                price: 80,
            },
            {
                id: 31,
                name: 'Striped Sweater',
                imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
                price: 45,
            },
            {
                id: 32,
                name: 'Yellow Track Suit',
                imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
                price: 135,
            },
            {
                id: 33,
                name: 'White Blouse',
                imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
                price: 20,
            },
        ],
    },
    5: {
        id: 34,
        title: 'Mens',
        routeName: 'mens',
        items: [
            {
                id: 35,
                name: 'Camo Down Vest',
                imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
                price: 325,
            },
            {
                id: 36,
                name: 'Floral T-shirt',
                imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
                price: 20,
            },
            {
                id: 37,
                name: 'Black & White Longsleeve',
                imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
                price: 25,
            },
            {
                id: 38,
                name: 'Pink T-shirt',
                imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
                price: 25,
            },
            {
                id: 39,
                name: 'Jean Long Sleeve',
                imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
                price: 40,
            },
            {
                id: 40,
                name: 'Burgundy T-shirt',
                imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
                price: 25,
            },
        ],
    },
};

export default shopData;

export const RouteNameMap = new Map([
    ['Hats', 'hats'],
    ['Sneakers', 'sneakers'],
    ['Womens', 'womens'],
    ['Mens', 'mens'],
    ['Jackets', 'jackets'],
]);
