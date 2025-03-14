import { useState } from "react";
import s1 from "../assets/img/slid1.jpg"
import s2 from "../assets/img/slide2.jpg"
import s3 from "../assets/img/slide3.jpg"
import s4 from "../assets/img/slide4.jpg"
import s5 from "../assets/img/slide5.jpg"
import s6 from "../assets/img/slide6.jpg"
import s7 from "../assets/img/slide7.jpg"
import s8 from "../assets/img/slide8.jpg"
import s9 from "../assets/img/slide9.jpg"
import s10 from "../assets/img/slide6.png"


export const GalaryPage = () => {
  const [activeTab, setActiveTab] = useState("html"); // Default tab
  const [selectedImage, setSelectedImage] = useState(null);

  const data = [
    {
      label: "All",
      value: "all",
      images: [
        s1,s2,s3,s4,s10,s6, s5,s6,s7,s8,s9
      ],
    },
    {
      label: "Drivers",
      value: "drivers",
      images: [
        s4,s1,s2,s3,s5,s9,s1
      ],
    },
    {
      label: "Passengers",
      value: "passengers",
      images: [
       s5,s6,s7,s8,s9,s1
      ],
    },
  ];

  return (
    <>
      <div className="gallery-container  mt-5">
        {/* Tabs Navigation */}
        <div className="tabs">
          {data.map(({ label, value }) => (
            <button
              key={value}
              className={`tab ${activeTab === value ? "active" : ""}`}
              onClick={() => setActiveTab(value)}
            >
              {label}
            </button>
          ))}
        </div>

        

        <div className="container">
          <div className="row">
            {data
              .find((category) => category.value === activeTab)
              ?.images.map((image, index) => (
                <div key={index} className="col-md-4 mb-3">
                  <div className="image-item">
                    <img
                      className="modal-fullscreen img-fluid rounded"
                      src={image}
                      alt="Gallery"
                      style={{ cursor: "pointer" }}
                      data-bs-toggle="modal"
                      data-bs-target="#imageModal"
                      onClick={() => setSelectedImage(image)}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="imageModal"
        tabIndex="-1"
        aria-labelledby="imageModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="imageModalLabel">
               Our Images Galary 
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="img-fluid rounded"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
