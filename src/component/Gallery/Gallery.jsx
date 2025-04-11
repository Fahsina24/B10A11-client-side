import { Helmet } from "react-helmet-async";
import img1 from "../../assets/gallery/img1.jpg";
import img2 from "../../assets/gallery/img2.webp";
import img3 from "../../assets/gallery/img3.jpg";
import img4 from "../../assets/gallery/img4.jpg";
import img5 from "../../assets/gallery/img5.jpeg";
import img6 from "../../assets/gallery/img6.jpg";
import img7 from "../../assets/gallery/img7.jpg";
import img8 from "../../assets/gallery/img8.jpg";
import img9 from "../../assets/gallery/img9.jpeg";
import img10 from "../../assets/gallery/img10.jpg";
import "./Gallery.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import Download from "yet-another-react-lightbox/plugins/download";
import "yet-another-react-lightbox/plugins/counter.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Share from "yet-another-react-lightbox/plugins/share";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      title: "Classic Burger with Fries",
      image: img1,
      description: "A juicy beef burger served with crispy golden fries.",
    },
    {
      title: "Burger Meals",
      image: img2,
      description: "A delicious burger meal combo with sides and a drink.",
    },
    {
      title: "Large Fries",
      image: img3,
      description: "A generous portion of perfectly seasoned large fries.",
    },
    {
      title: "Egg Fried Rice",
      image: img4,
      description: "Rice is fried using eggs and with some fresh ingredients.",
    },
    {
      title: "Chocolate Vanilla IceCream",
      image: img5,
      description: "A creamy swirl of chocolate and vanilla ice cream.",
    },
    {
      title: "Bangladeshi Traditional Food Platter",
      image: img6,
      description: "A rich assortment of traditional Bangladeshi dishes.",
    },
    {
      title: "Egg Chow mein",
      image: img7,
      description: "Stir-fried noodles with vegetables and scrambled eggs.",
    },
    {
      title: "Fuchka",
      image: img8,
      description: "Crispy hollow shells filled with spicy and tangy fillings.",
    },
    {
      title: "Beef Biriyani",
      image: img9,
      description: "Aromatic rice cooked with tender spiced beef pieces.",
    },
    {
      title: "Chotpoti Fuchka Platter",
      image: img10,
      description: "A delightful mix of chotpoti and fuchka served together.",
    },
  ];
  return (
    <div>
      <Helmet>
        <title>DigiDINE | Gallery</title>
      </Helmet>
      <section className="flex text-center text-3xl  mt-6 mb-4 gap-4 justify-center items-center w-11/12 mx-auto">
        <section className="text-center mt-6 mb-8">
          <h2 className="text-4xl font-extrabold animate-bounce text-green-800">
            A Feast for the Eyes
          </h2>
          <p className="mt-2 w-3/4 mx-auto text-gray-600 text-sm md:text-lg lg:text-xl ">
            Discover the flavors, ambiance, and experience of our restaurant
            through a visual journey. Our gallery showcases the essence of our
            culinary artistry and welcoming atmosphere, bringing you closer to
            the heart of our dining experience.
          </p>
        </section>
      </section>
      <div className="mx-auto w-11/12">
        <div className="gallery grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-6 overflow-hidden mx-auto place-items-center gap-x-2 mb-4">
          {images.map((image, index) => (
            <img
              src={image.image}
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
              width="90%"
              height="auto"
            />
          ))}
        </div>
      </div>
      <Lightbox
        open={open}
        index={currentIndex}
        close={() => setOpen(false)}
        counter={{
          container: {
            style: {
              top: "unset",
              left: "unset",
              bottom: "0",
            },
          },
        }}
        slides={images.map((image) => ({
          src: image.image,
          title: image.title,
          description: image.description,
        }))}
        plugins={[
          Download,
          Counter,
          Captions,
          Fullscreen,
          Thumbnails,
          Slideshow,
          Share,
          Zoom,
        ]}
      />
    </div>
  );
};

export default Gallery;
