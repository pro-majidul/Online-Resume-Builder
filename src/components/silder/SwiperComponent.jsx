"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import CustomButton from "../shared/CustomButton";
import Link from "next/link";
import { useEffect, useState } from "react";


// Updated Resume Templates


const SwiperComponent = () => {
  const [selectedTemplate, setSelectedTemplate]= useState([])
  const fetchTemplate=async()=>{
    const res = await fetch("http://localhost:5000/api/template/template")
    const data = await res.json();
   setSelectedTemplate(data)
  };
  useEffect(()=>{
    fetchTemplate()
  },[])
  console.log(selectedTemplate)
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper h-[700px] gap-7"
      >
        {selectedTemplate.map((template) => (
         <SwiperSlide key={template.id}>
         <div className="relative group overflow-hidden shadow-xl  
                       transition-all duration-300 ease-in-out transform 
                       hover:scale-105 hover:shadow-[#F9F51A] hover:border-[#F9F51A] hover:shadow-2xl">
           <div className="p-4 bg-gray-50">
             {/* Template Preview */}
             <div dangerouslySetInnerHTML={{ __html: template.layout }} />
           </div>
           <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
             <div className="flex justify-center my-5">
               <Link href={`resume-tampalate/${template._id}`}>
                 <CustomButton
                   title={"Use Template"}
                   onClick={() => setSelectedTemplate(template)}
                 />
               </Link>
             </div>
           </div>
         </div>
       </SwiperSlide>
       
        
        ))}
      </Swiper>     
    </>
  );
};

export default SwiperComponent;