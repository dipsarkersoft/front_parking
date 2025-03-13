import React, { useState } from 'react';

export const GalaryPage = () => {
  const [modalImage, setModalImage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  // Image categories
  const images = {
    all: [
      { id: 1, src: 'https://picsum.photos/400/250?image=122', alt: 'Image 1' },
      { id: 2, src: 'https://picsum.photos/400/250?image=526', alt: 'Image 2' },
      { id: 3, src: 'https://picsum.photos/400/250?image=626', alt: 'Image 3' },
      { id: 4, src: 'https://picsum.photos/400/250?image=846', alt: 'Image 4' },
    ],
    category1: [
      { id: 1, src: 'https://picsum.photos/400/250?image=122', alt: 'Image 1' },
      { id: 2, src: 'https://picsum.photos/400/250?image=526', alt: 'Image 2' },
    ],
    category2: [
      { id: 3, src: 'https://picsum.photos/400/250?image=626', alt: 'Image 3' },
      { id: 4, src: 'https://picsum.photos/400/250?image=846', alt: 'Image 4' },
    ],
  };

  const handleImageClick = (src) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Image Gallery</h1>

      {/* Tab navigation */}
      <ul className="nav nav-tabs justify-content-center border-0">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'all' ? 'active' : ''} border-0`}
            onClick={() => handleTabClick('all')}
          >
            All
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'category1' ? 'active' : ''} border-0`}
            onClick={() => handleTabClick('category1')}
          >
            Category 1
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'category2' ? 'active' : ''} border-0`}
            onClick={() => handleTabClick('category2')}
          >
            Category 2
          </button>
        </li>
      </ul>

      {/* Gallery content based on active tab */}
      <div className="row justify-content-center mt-3">
        {images[activeTab].map((image) => (
          <div className="col-md-3 mb-4" key={image.id}>
            <div
              className="gallery-item"
              onClick={() => handleImageClick(image.src)}
              style={{ cursor: 'pointer' }}
            >
              <img src={image.src} alt={image.alt} className="img-fluid rounded-3" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {isModalOpen && (
        <div
          className="modal fade show"
          style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={handleCloseModal}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <img src={modalImage} alt="Enlarged" className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
