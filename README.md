
![image](https://github.com/user-attachments/assets/c3535870-cfe4-46dc-8cf2-eca7ceecc8b7)


# React Image Slider
----
This project is a simple **React Image Slider** using the `my-react-image-slider-jav` package.  
It displays product images in a slider format.

## Installation

First, install the required package using npm:

```sh
npm install my-react-image-slider-jav

Usage
Import and use the ImageSlider component in your React application:
import React from 'react'

import { ImageSlider } from 'my-react-image-slider-jav';

const App = () => {

  const productData = {

    name: "Nike Air Max",

    images: [

      "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg",

      "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg",

      "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg",

      "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg",

    ],

  };

  return (

    <div className="App">

      <ImageSlider images={productData.images} />

    
    </div>

  );

}


export default App;

Features
Simple and lightweight image slider
Easy integration with React
Supports multiple images
License
This project is licensed under the MIT License.


Author
JISHNU A VIJAYAN

---
