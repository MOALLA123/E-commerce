import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import mobile from "../../images/mobile.png";
import ImageGallery from "react-image-gallery";
import RightButton from "./RightButton";
import LeftButton from "./LeftButton";
const ProductGellery = ({ gallery }) => {
  const images = [
    {
      original: `${gallery}`,
    },
    {
      original: `${gallery}`,
    },
    {
      original: `${gallery}`,
    },
  ];
  console.log(gallery, "tttttjjjjjj");
  return (
    <div
      className="product-gallary-card d-flex justfiy-content-center  align-items-center
    pt-2"
    >
      <ImageGallery
        items={images}
        defaultImage={mobile}
        showFullscreenButton={false}
        isRTL={true}
        showPlayButton={false}
        showThumbnails={false}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
      />
    </div>
  );
};

export default ProductGellery;
