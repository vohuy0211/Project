const products = [
    {
        id : 1,
        name : "CARAMEL AND CHOCOLATE",
        price : 630000,
        avt_image : "./images_product/product_1.webp",
        incart : 0 ,
    },
    {
        id : 2,
        name : "CARAMEL CHOCOLATE CAKE",
        price : 360000,
        avt_image : "./images_product/product_2.webp",
        incart : 0 ,
    },
    {
        id : 3,
        name : "CARAMEL MOIST CHOCOLATE CAKE",
        price :330000,
        avt_image : "./images_product/product_3.webp",
        incart : 0 ,
    },
    {
        id : 4,
        name : "GREEN TEE CAKE",
        price : 660000,
        avt_image : "./images_product/product_4.webp",
        incart : 0 ,
    },
    {
        id : 5,
        name : "HAWAII MOUSSE",
        price : 353000,
        avt_image : "./images_product/product_5.webp",
        incart : 0 ,
    },
    {
        id : 6,
        name : "CARAMEL AND CHOCOLATE",
        price : 730000,
        avt_image : "./images_product/product_6.webp",
        incart : 0 ,
    },
    {
        id : 7,
        name : "PASSION FRUIT MOUSSE",
        price : 360000,
        avt_image : "./images_product/product_7.webp",
        incart : 0 ,
    },
    {
        id : 8,
        name : "PETIT",
        price : 514000,
        avt_image : "./images_product/product_8.webp",
        incart : 0 ,
    },
    {
        id : 9,
        name : "PETIT",
        price : 300000,
        avt_image : "./images_product/product_9.webp",
        incart : 0 ,
    }
]


if (!localStorage.getItem("product")) {
    localStorage.setItem('product',JSON.stringify(products));
    
}