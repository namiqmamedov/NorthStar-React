import React from 'react'
import Product1 from '../assets/product/Product1.png'
import Product2 from '../assets/product/Product2.png'
import Product3 from '../assets/product/Product3.png'
import Product4 from '../assets/product/Product4.png'
import Product5 from '../assets/product/Product5.png'
import Product6 from '../assets/product/Product6.png'
import Product7 from '../assets/product/Product7.png'
import Product8 from '../assets/product/Product8.png'
import Product9 from '../assets/product/Product9.png'
import Product10 from '../assets/product/Product10.png'
import Product11 from '../assets/product/Product11.png'
import Product12 from '../assets/product/Product12.png'

const products = [
    {
        id: "01",
        title: "Plain White Shirt",
        price: 29.0,
        image: Product1,
        category: "Women",
        size: ["Small", "Medium", "Large", "Extra Large"],
        desc: "A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications. Users with access to the Internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through Digital communications it creates a Multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are.[28] Social segregation plays no part through social mediums due to lack of face to face communication and information being wide spread instead to a selective audience. ",
      },
      {
        id: "02",
        title: "Denim Jacket",
        price: 69.0,
        image: Product2,
        category: "Men",
        size: ["Small", "Medium", "Large", "Extra Large"],
        desc: "A classic t-shirt never goes out of style. This is our most premium collection of shirt. This plain white shirt is made up of pure cotton and has a premium finish.",
      },
      {
        id: "03",
        title: "Black Polo Shirt",
        price: 49.0,
        image: Product3,
        category: "Men",
        size: ["Small", "Medium", "Large", "Extra Large"],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
      },
      {
        id: "04",
        title: "Blue Sweatshirt",
        price: 79.0,
        image: Product4,
        category: "Burger",
        size: ["Small", "Medium", "Large", "Extra Large"],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
      },
      {
        id: "05",
        title: "Blue Plain Shirt",
        price: 49.0,
        image: Product5,
        category: "Burger",
        size: ["Small", "Medium", "Large", "Extra Large"],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
      },
      {
        id: "06",
        title: "Dark Blue Shirt",
        price: 89.0,
        image: Product6,
        category: "Burger",
        size: ["Small", "Medium", "Large", "Extra Large"],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
      },
      {
        id: "07",
        title: "Outcast T Shirt",
        price: 19.0,
        image: Product7,
        category: "Burger",
        size: ["Small", "Medium", "Large", "Extra Large"],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
      },
      {
        id: "08",
        title: "Polo Plain Shirt",
        price: 29.0,
        image: Product8,
        category: "Burger",
        size: ["Small", "Medium", "Large", "Extra Large"],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
      },
      {
        id: "09",
        title: "Gray Polo Shirt",
        price: 49.0,
        image: Product9,
        category: "Burger",
        size: ["Small", "Medium", "Large", "Extra Large"],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
      },
      {
        id: "10",
        title: "Red Shirt",
        price: 69.0,
        image: Product10,
        category: "Burger",
        size: ["Small", "Medium", "Large", "Extra Large"],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
      },
      {
        id: "11",
        title: "Polo White Shirt",
        price: 29.0,
        image: Product11,
        category: "Burger",
        size: ["Small", "Medium", "Large", "Extra Large"],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
      },
      {
        id: "12",
        title: "Pink Casual Shirt",
        price: 39.0,
        image: Product12,
        category: "Burger",
        size: ["Small", "Medium", "Large", "Extra Large"],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
      },
      
]

export default products