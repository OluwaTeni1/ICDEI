import React, { useState } from "react";

// Import your images (replace with actual paths)
import galleryImg1 from "../assets/img/gallery-1.jpg";
import galleryImg2 from "../assets/img/gallery-2.jpg";
import galleryImg3 from "../assets/img/gallery-4.jpg";
import galleryImg4 from "../assets/img/gallery-5.jpg";
import galleryImg5 from "../assets/img/gallery-6.jpg";
import galleryImg6 from "../assets/img/gallery-7.jpg";
import galleryImg7 from "../assets/img/gallery-8.jpg";
import galleryImg8 from "../assets/img/gallery-9.jpg";
import galleryImg9 from "../assets/img/gallery-10.jpg";
import galleryImg10 from "../assets/img/gallery-11.jpg";
import galleryImg11 from "../assets/img/gallery-12.jpg";
import galleryImg12 from "../assets/img/gallery-13.jpg";
import galleryImg13 from "../assets/img/gallery-14.jpg";
import galleryImg14 from "../assets/img/gallery-15.jpg";
import galleryImg15 from "../assets/img/gallery-16.jpg";
import galleryImg16 from "../assets/img/gallery30.jpg";

const galleryData = [
  {
    id: 1,
    image: galleryImg1,
    title: "Educational Support Program",
    description:
      "Providing school supplies and learning materials to underprivileged children",
    category: "Education",
    date: "2024",
  },
  {
    id: 2,
    image: galleryImg2,
    title: "Medical Camp Outreach",
    description: "Free health check-ups and medicines for rural communities",
    category: "Healthcare",
    date: "2024",
  },
  {
    id: 3,
    image: galleryImg3,
    title: "Food Distribution Drive",
    description: "Providing nutritious meals to families in need",
    category: "Food Security",
    date: "2024",
  },
  {
    id: 4,
    image: galleryImg4,
    title: "Children's Skill Workshop",
    description: "Teaching vocational skills to empower young minds",
    category: "Skill Development",
    date: "2023",
  },
  {
    id: 5,
    image: galleryImg5,
    title: "Clean Water Initiative",
    description: "Installing water purification systems in villages",
    category: "Infrastructure",
    date: "2023",
  },
  {
    id: 6,
    image: galleryImg6,
    title: "Women Empowerment Program",
    description: "Self-help groups and entrepreneurship training for women",
    category: "Empowerment",
    date: "2024",
  },
  {
    id: 7,
    image: galleryImg7,
    title: "Environmental Awareness Campaign",
    description: "Tree plantation and plastic-free drive",
    category: "Environment",
    date: "2023",
  },
  {
    id: 8,
    image: galleryImg8,
    title: "Disaster Relief Efforts",
    description: "Emergency support and rehabilitation for affected families",
    category: "Relief",
    date: "2024",
  },
  {
    id: 9,
    image: galleryImg9,
    title: "Literacy Classes",
    description: "Evening schools for working children",
    category: "Education",
    date: "2024",
  },
  {
    id: 10,
    image: galleryImg10,
    title: "Health Awareness Session",
    description: "Educating communities about hygiene and disease prevention",
    category: "Healthcare",
    date: "2023",
  },
  {
    id: 11,
    image: galleryImg11,
    title: "Health Awareness Session",
    description: "Educating communities about hygiene and disease prevention",
    category: "Healthcare",
    date: "2023",
  },
  {
    id: 12,
    image: galleryImg12,
    title: "Health Awareness Session",
    description: "Educating communities about hygiene and disease prevention",
    category: "Healthcare",
    date: "2023",
  },
  {
    id: 13,
    image: galleryImg13,
    title: "Health Awareness Session",
    description: "Educating communities about hygiene and disease prevention",
    category: "Healthcare",
    date: "2023",
  },
  {
    id: 14,
    image: galleryImg14,
    title: "Health Awareness Session",
    description: "Educating communities about hygiene and disease prevention",
    category: "Healthcare",
    date: "2023",
  },
  {
    id: 15,
    image: galleryImg15,
    title: "Health Awareness Session",
    description: "Educating communities about hygiene and disease prevention",
    category: "Healthcare",
    date: "2023",
  },
  {
    id: 16,
    image: galleryImg16,
    title: "Health Awareness Session",
    description: "Educating communities about hygiene and disease prevention",
    category: "Healthcare",
    date: "2023",
  },
];

export const GallerySection = () => {
  const [visibleCount, setVisibleCount] = useState(8); // Show 8 images initially (2 rows × 4 columns)
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const visibleImages = galleryData.slice(0, visibleCount);
  const hasMore = visibleCount < galleryData.length;

  const handleSeeMore = () => {
    setVisibleCount(galleryData.length);
  };

  const handleSeeLess = () => {
    setVisibleCount(8);
    // Smooth scroll back to gallery top
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  // Handle keyboard escape key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && lightboxOpen) {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-badge">Our Gallery</span>
          <h2 className="section-title">Moments That Matter</h2>
          <p className="section-subtitle">
            Capturing the impact of our work and the smiles we create together
          </p>
        </div>

        {/* Gallery Grid - 4 columns */}
        <div className="gallery-grid">
          {visibleImages.map((item) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => openLightbox(item)}
            >
              <div className="gallery-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <i className="fas fa-search-plus"></i>
                    <h4>{item.title}</h4>
                    <span className="gallery-category">{item.category}</span>
                  </div>
                </div>
              </div>
              <div className="gallery-caption">
                <h3 className="gallery-caption-title">{item.title}</h3>
                <p className="gallery-caption-text">{item.description}</p>
                <span className="gallery-caption-date">
                  <i className="far fa-calendar-alt"></i> {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* See More / See Less Button */}
        <div className="gallery-actions text-center">
          {hasMore ? (
            <button
              className="gallery-btn see-more-btn"
              onClick={handleSeeMore}
            >
              See More <i className="fas fa-arrow-down ms-2"></i>
            </button>
          ) : (
            <button
              className="gallery-btn see-less-btn"
              onClick={handleSeeLess}
            >
              See Less <i className="fas fa-arrow-up ms-2"></i>
            </button>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && selectedImage && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="fas fa-times"></i>
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="lightbox-image"
            />
            <div className="lightbox-info">
              <h3 className="lightbox-title">{selectedImage.title}</h3>
              <p className="lightbox-description">
                {selectedImage.description}
              </p>
              <div className="lightbox-meta">
                <span className="lightbox-category">
                  <i className="fas fa-tag"></i> {selectedImage.category}
                </span>
                <span className="lightbox-date">
                  <i className="far fa-calendar-alt"></i> {selectedImage.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
