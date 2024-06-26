import Image from "next/image"
import Comments from "./Comments"


const Post = () => {
  return (
    <div className="flex flex-col gap-4">
        {/* USER */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/21945949/pexels-photo-21945949/free-photo-of-a-woman-looking-out-the-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" height={40} width={40} alt="" className="w-10 h-10 rounded-full"/>
                <span className="font-medium">Angela Bride</span>
            </div>
            <Image src="/more.png" height={16} width={16} alt="" />
        </div>
        {/* DESCRIPTION */}
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
            <Image src="https://images.pexels.com/photos/23638650/pexels-photo-23638650/free-photo-of-default.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
            fill
            className="object-cover rounded-md" alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem soluta nam repellat ea, placeat nihil inventore quam autem? Quidem est vero ea debitis tempora labore reiciendis eum laudantium? Incidunt, dignissimos.</p>
        </div>
        {/* iNTERACTION */}
        <div className="flex items-center justify-between text-sm my-4">
            <div className="flex gap-8">
             <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                <Image src="/like.png" 
            height={16}
            width={16}
            className="cursor-pointer" alt="" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">123<span className="hidden md:inline"> Likes</span></span>
                </div>
            <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                <Image src="/comment.png" 
            height={16}
            width={16}
            className="cursor-pointer" alt="" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">123<span className="hidden md:inline"> Comments</span></span>
                </div>
            </div>
            <div className="">
            <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                <Image src="/share.png" 
            height={16}
            width={16}
            className="cursor-pointer" alt="" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">123<span className="hidden md:inline"> Share</span></span>
                </div>
            </div>
        </div>
    <Comments/>
    </div>
  )
}

export default Post