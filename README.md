
![image](https://github.com/user-attachments/assets/c3535870-cfe4-46dc-8cf2-eca7ceecc8b7)


# React Media Slider – Display Images and Videos in a Single Slider

A lightweight and customizable React media slider for displaying **images and videos together in a single, responsive slider**.

Perfect for product galleries, portfolios, e-commerce websites, promotional content, media showcases, and modern React applications.
[Live Demo] [GitHub] [npm]

       ┌──────────────────────────┐
       │                          │
       │      IMAGE / VIDEO       │
       │                          │
       └──────────────────────────┘

       ◀   ● ● ● ● ●   ▶

**npm install my-react-image-slider-jav**


## ✨ Features

- 🖼️ Display images and videos in a single slider
- 🎥 Native HTML5 video support
- 🔄 Smooth previous/next navigation
- 📱 Fully responsive layout
- 👆 Touch and swipe friendly
- ⚡ Lightweight and easy to integrate
- 🎨 Fully customizable with CSS
- 🧩 Simple and clean API
- 🖱️ Previous and next navigation controls
- 📦 Supports mixed media items
- ⚛️ Works with modern React applications
- 🚀 Simple installation and setup

## 📦 Installation

Install the package using npm:

```bash
npm install my-react-image-slider-jav
```

Or using Yarn:

```bash
yarn add my-react-image-slider-jav
```

## 🚀 Basic Usage

Import the `ImageSlider` component into your React application:

```jsx
import React from "react";
import { ImageSlider } from "my-react-image-slider-jav";

const App = () => {
  const media = [
    {
      type: "image",
      src: "https://picsum.photos/id/1015/1200/800",
      alt: "Mountain View",
    },
    {
      type: "image",
      src: "https://picsum.photos/id/1016/1200/800",
      alt: "Landscape",
    },
    {
      type: "video",
      src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      poster: "https://picsum.photos/id/1025/1200/800",
    },
  ];

  return (
    <div className="App">
      <ImageSlider media={media} />
    </div>
  );
};

export default App;
```

## 🧩 Media Object Structure

Each media item accepts a `type` and `src`.

### 🖼️ Image

```js
{
  type: "image",
  src: "https://example.com/image.jpg",
  alt: "Beautiful landscape"
}
```

### 🎥 Video

```js
{
  type: "video",
  src: "https://example.com/video.mp4",
  poster: "https://example.com/poster.jpg"
}
```

### Supported Properties

| Property | Type | Required | Description |
|---|---|---|---|
| `type` | `"image" \| "video"` | Yes | Defines the media type |
| `src` | `string` | Yes | Image or video URL |
| `alt` | `string` | No | Alternative text for images |
| `poster` | `string` | No | Poster image displayed before video playback |

## 🎬 Mixed Media Example

The slider can display **images and videos together**:

```jsx
import React from "react";
import { ImageSlider } from "my-react-image-slider-jav";

const media = [
  {
    type: "image",
    src: "https://picsum.photos/id/1015/1200/800",
    alt: "Mountain View",
  },
  {
    type: "image",
    src: "https://picsum.photos/id/1016/1200/800",
    alt: "Landscape",
  },
  {
    type: "video",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster: "https://picsum.photos/id/1025/1200/800",
  },
];

const App = () => {
  return <ImageSlider media={media} />;
};

export default App;
```

### Result

The slider seamlessly displays mixed media content:

**Image → Image → Video → Image → Video**
<img width="800" height="533" alt="https___dev-to-uploads s3 us-east-2 amazonaws com_uploads_articles_7dffa00pfbvoj2w06zp4" src="https://github.com/user-attachments/assets/e9e3f1fe-c334-48dc-8b06-924b0cee0130" />


This makes it suitable for product galleries, portfolios, e-commerce pages, promotional content, and media-rich websites.

## 💡 Use Cases

- 🛍️ Product galleries
- 🛒 E-commerce websites
- 💼 Portfolio websites
- 📸 Photography showcases
- 📝 Travel blogs
- 🏢 Real estate listings
- 🎓 Educational content
- 🎮 Event galleries
- 📢 Marketing landing pages
- 🏷️ Company presentations
- 📱 Social-media-style media galleries

## 🤔 Why `my-react-image-slider-jav`?

- ⚡ Lightweight
- 🎯 Easy integration
- 🖼️ Supports images and videos
- 📱 Responsive layout
- 🧩 Simple API
- 🎨 Easy customization
- ⚛️ React-friendly
- 🚀 Minimal setup
- 📦 Suitable for personal and commercial projects

## 🛠️ Customization

The slider can be customized using CSS to match the design of your application.

You can customize:

- Slider dimensions
- Navigation controls
- Thumbnail appearance
- Spacing
- Borders
- Media presentation
- Responsive behavior

## 🤝 Contributing

Contributions, bug reports, feature requests, and improvements are welcome.

If you would like to contribute:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## 📦 npm Package

You can find the package on npm:

**my-react-image-slider-jav**

## ⭐ Support the Project

If you find this package useful, consider giving it a ⭐ on GitHub and sharing it with other React developers.

Your feedback and suggestions are welcome!

## 📄 License

This project is licensed under the **MIT License**.

## 👨‍💻 Author

**JISHNU A VIJAYAN**

----
