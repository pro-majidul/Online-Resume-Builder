

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

import img1 from "../../../public/picture/1.jpg";
import img2 from "../../../public/picture/review1.jpg";
import img3 from "../../../public/picture/review2.jpg";
import img4 from "../../../public/picture/review3.jpg";
import img5 from "../../../public/picture/Image.png";
import { useState } from "react";

const reviews = [
  {
    name: "Jessica Lee",
    image: img1,
    review: "This is one of the best resume builders I’ve used. The ability to create, edit, and manage multiple resumes is super helpful.",
    rating: 3,
    date: "3-1-2025",
  },
  {
    name: "David Miller",
    image: img2,
    review: "As someone who struggles with formatting resumes, this platform was a lifesaver! The version control feature ensures I never lose track of my edits.",
    rating: 5,
    date: "10-1-2025",
  },
  {
    name: "Emily Carter",
    image: img3,
    review: "The AI-powered suggestions are super helpful, and the UI is clean and modern. However, I’d love to see more design templates for different industries.",
    rating: 4,
    date: "19-1-2025",
  },
  {
    name: "Michael Roberts",
    image: img4,
    review: "Resume Maker has completely transformed the way I create resumes. The AI-powered suggestions helped me craft a professional CV in minutes.",
    rating: 4,
    date: "19-1-2025",
  },
  {
    name: "Sarah Johnson",
    image: img5,
    review: "I love how easy it is to use this platform! The drag-and-drop customization and real-time editing make it so much better than traditional resume builders.",
    rating: 4,
    date: "19-1-2025",
  },
];

const ReviewSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{ delay: 5000 }}
      navigation={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
      className="mySwiper lg:h-[300px] lg:container mx-auto"
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <div
            className={`review-card border h-full p-4 shadow-md rounded-md text-center transition-all duration-300 ease-in-out ${
              activeIndex === index ? "bg-[#FEDBFF] scale-105" : "bg-gray-200"
            }`}
          >
            <Image
              src={review.image}
              width={1000}
              height={300}
              alt="review"
              className="review-img mx-auto mb-3 rounded-full w-20 h-20 object-cover"
            />
            <h3 className="review-name text-xs lg:text-lg text-[#181A1B] font-semibold">{review.name}</h3>
            <p className="review-opinion text-xs lg:text-sm text-gray-800">{review.review}</p>
            <div className="review-rating text-yellow-500">
              {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
            </div>
            <p className="review-date text-xs text-gray-500">{review.date}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSlider;

