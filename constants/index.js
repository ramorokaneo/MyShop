export const categories = [
    "Oranges",
    "Banana",
    "Apple",
    "Cherry",
];
export const FreaturedHomeware = [
    {
        name: 'Australian Oranges',
        price: "13.99",
        stars: 4,
        desc: 'Sweet and juicy',
        shadow: 'orange',
        image: require('../assets/Orange-Fruit.png'),
        color: opacity => 'rgba(251, 216, 14+, ${opacity})'
    },
    {
        name: 'Black Grapes',
        price:  "23.99",
        stars: 4,
        desc: 'Sweet and juicy',
        shadow: 'purple',
        image: require('../assets/Black-Grapes.png'),
        color: opacity => 'rgba(214, 195, 246, ${opacity}'
    },
    {
        name: 'Green Apple',
        price: "19.99",
        stars: 4,
        desc: 'Sweet and juicy',
        shadow: 'green',
        image: require('../assets/Apple.png'),
        color: opacity => 'rgba(139, 243, 139, ${opacity}'
    },
]
