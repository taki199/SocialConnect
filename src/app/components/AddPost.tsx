import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image"


const AddPost = () => {

  const{userId}=auth()
  
  const testAction =async(formData:FormData)=>{
    "use server"

    if(!userId) return;
    const desc=formData.get("desc") as string;
    try {
     const res= await prisma.post.create({
        data:{
          userId:userId,
          desc:desc,
        }
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
   
  }
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex gap-4 justify-between text-sm">
        {/* AVATAR */}
        <Image src="https://images.pexels.com/photos/8259263/pexels-photo-8259263.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={48} height={48} alt="" className="w-12 h-12 object-cover rounded-full"/>
          {/* Post */}
          <div className="flex-1">
            {/* Text Input */}
            <form action="" className="flex gap-4">
             <textarea placeholder="what's on your mind?" className="bg-slate-100 flex-1 rounded-lg p-2" name="desc"></textarea>
             <Image src="/emoji.png" width={20} height={20} alt="" className="w-5 h-5 cursor-pointer self-end"/>
             <button>Send</button>
             </form>
            {/* POST OPTIONS */}
            <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                <div className="flex items-center gap-2 cursor-pointer ">
                <Image src="/addimage.png" width={20} height={20} alt="" />
                Photo
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                <Image src="/addvideo.png" width={20} height={20} alt="" />
                video
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                <Image src="/poll.png" width={20} height={20} alt="" />
                Poll
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                <Image src="/addevent.png" width={20} height={20} alt="" />
                Event
                </div>
                
            </div>
         </div>

    </div>
  )
}

export default AddPost