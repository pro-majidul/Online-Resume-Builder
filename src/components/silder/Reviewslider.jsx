// "use client";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import { EffectCoverflow, Pagination, Autoplay , Navigation} from 'swiper/modules';
// import img1 from '../../../public/picture/1.jpg'
// import img2 from '../../../public/picture/review1.jpg'
// import img3 from '../../../public/picture/review2.jpg'
// import img4 from '../../../public/picture/review3.jpg'
// import img5 from '../../../public/picture/Image.png'


// import Image from 'next/image';


// const ReviewSlider = () => {
//     return (
//         <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={3}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         autoplay={{ delay: 5000, reverseDirection:true}}
//         navigation={true}
//         modules={[EffectCoverflow, Navigation ,Autoplay, Pagination]}
//         className="mySwiper lg:h-[300px] lg:w-[1200px]  mx-auto"
//       >
//         <SwiperSlide >
//         <div className="review-card border h-full p-4 bg-gray-200 shadow-md rounded-md text-center">
//               <Image
//                 src={img1}
//                 width={1000}
//                 height={300}
//                 alt="review"
//                 className="review-img mx-auto mb-3  rounded-full w-20 h-20 object-cover"
//               />
//               <h3 className="review-name text-xs lg:text-lg text-gray-800 font-semibold">Jessica Lee</h3>
//               <p className="review-opinion text-xs lg:text-sm text-gray-800"> "This is one of the best resume builders I’ve used. The ability to create, edit, and manage multiple resumes is super helpful. If it had LinkedIn integration for easy profile imports, it would be unbeatable!"</p>
//               <div className="review-rating text-yellow-500">
//                 {"★".repeat(3) + "☆".repeat(5-3)}
//               </div>
//               <p className="review-date text-xs text-gray-500">3-1-2025</p>
//             </div>
//           </SwiperSlide>
//         <SwiperSlide >
//         <div className="review-card border h-full p-4 bg-gray-200 shadow-md rounded-md text-center">
//               <Image
//                 src={img2}
//                 width={1000}
//                 height={300}
//                 alt="review"
//                 className="review-img mx-auto mb-3  rounded-full w-24 h-24 object-cover"
//               />
//               <h3 className="review-name text-xs lg:text-lg text-gray-800 font-semibold">David Miller</h3>
//               <p className="review-opinion text-xs lg:text-sm text-gray-800">"As someone who struggles with formatting resumes, this platform was a lifesaver! The version control feature ensures I never lose track of my edits, and the export options are a big plus. Definitely a must-try!"</p>
//               <div className="review-rating text-yellow-500">
//                 {"★".repeat(5) + "☆".repeat(5-5)}
//               </div>
//               <p className="review-date text-xs text-gray-500">10-1-2025</p>
//             </div>
//           </SwiperSlide>
//         <SwiperSlide >
//         <div className="review-card border h-full p-4 bg-gray-200 shadow-md rounded-md text-center">
//               <Image
//                 src={img3}
//                 width={1000}
//                 height={300}
//                 alt="review"
//                 className="review-img mx-auto mb-3  rounded-full w-24 h-24 object-cover"
//               />
//               <h3 className="review-name text-xs lg:text-lg text-gray-800 font-semibold">Emily Carter</h3>
//               <p className="review-opinion text-xs lg:text-sm text-gray-800">"The AI-powered suggestions are super helpful, and the UI is clean and modern. However, I’d love to see more design templates for different industries. Overall, a great tool!"</p>
//               <div className="review-rating text-yellow-500">
//                 {"★".repeat(4) + "☆".repeat(5-4)}
//               </div>
//               <p className="review-date text-xs text-gray-500">19-1-2025</p>
//             </div>
//           </SwiperSlide>
//         <SwiperSlide >
//         <div className="review-card border h-full p-4 bg-gray-200 shadow-md rounded-md text-center">
//               <Image
//                 src={img4}
//                 width={1000}
//                 height={300}
//                 alt="review"
//                 className="review-img mx-auto mb-3  rounded-full w-24 h-24 object-cover"
//               />
//               <h3 className="review-name text-xs lg:text-lg text-gray-800 font-semibold"> Michael Roberts</h3>
//               <p className="review-opinion text-xs lg:text-sm text-gray-800">"Resume Maker has completely transformed the way I create resumes. The AI-powered suggestions helped me craft a professional CV in minutes."</p>
//               <div className="review-rating text-yellow-500">
//                 {"★".repeat(4) + "☆".repeat(5-4)}
//               </div>
//               <p className="review-date text-xs text-gray-500">19-1-2025</p>
//             </div>
//           </SwiperSlide>
//         <SwiperSlide >
//         <div className="review-card border h-full p-4 bg-gray-200 shadow-md rounded-md text-center">
//               <Image
//                 src={img5}
//                 width={1000}
//                 height={300}
//                 alt="review"
//                 className="review-img mx-auto mb-3  rounded-full w-24 h-24 object-cover"
//               />
//               <h3 className="review-name text-xs lg:text-lg text-gray-800 font-semibold">ESarah Johnson</h3>
//               <p className="review-opinion text-xs lg:text-sm text-gray-800">"I love how easy it is to use this platform! The drag-and-drop customization and real-time editing make it so much better than traditional resume builders. Highly recommend it to anyone looking for a quick yet professional resume solution."</p>
//               <div className="review-rating text-yellow-500">
//                 {"★".repeat(4) + "☆".repeat(5-4)}
//               </div>
//               <p className="review-date text-xs text-gray-500">19-1-2025</p>
//             </div>
//           </SwiperSlide>
//       </Swiper>

    
//     );
// };

// export default ReviewSlider;

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
      autoplay={{ delay: 5000, reverseDirection: true }}
      navigation={true}
      modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
      className="mySwiper lg:h-[300px] lg:w-[1200px] mx-auto"
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

