"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
// import CustomButton from "../shared/CustomButton";
// import { Link } from "lucide-react";


const ResumeTemplate = () => {
  const {id} = useParams()
  console.log(id)
   const [selectedTemplate, setSelectedTemplate]= useState({})
    const fetchTemplate=async()=>{
      // const res = await fetch(`https://resume-builder-website-server-side.vercel.app/api/template/template/${id}`)
      const res = await fetch(`http://localhost:5000/api/template/template/${id}`)
      const data = await res.json();
     setSelectedTemplate(data)
    };
    useEffect(()=>{
      fetchTemplate()
    },[])
    console.log(selectedTemplate)
  return (
    <>
    <div className="relative w-3xl mx-auto  group overflow-hidden shadow-xl  
                       transition-all duration-300 ease-in-out transform 
                       hover:scale-105 hover:shadow-[#F9F51A] hover:border-[#F9F51A] hover:shadow-2xl">
           <div className="p-4 bg-gray-50">
             {/* Template Preview */}
             <div dangerouslySetInnerHTML={{ __html: selectedTemplate.layout }} />
           </div>
           <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
             <div className="flex justify-center my-5">
               {/* <Link href={`resume-tampalate/${template._id}`}>
                 <CustomButton
                   title={"Use Template"}
                   onClick={() => setSelectedTemplate(template)}
                 />
               </Link> */}
             </div>
           </div>
         </div>
    </>
   
  );
};

export default ResumeTemplate;
