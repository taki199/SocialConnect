import prisma from "@/lib/client"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"


const ProfileCard = async () => {
  const {userId}=auth()

  if(!userId) return null;

  const user = await prisma.user.findFirst({
    where: {
      userId: userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
        <div className="h-20 relative">
            <Image src="https://images.pexels.com/photos/21908914/pexels-photo-21908914/free-photo-of-black-and-white-photography-of-a-man-surfing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="rounded-md object-cover"/>
            <Image src="https://images.pexels.com/photos/27084455/pexels-photo-27084455/free-photo-of-arara.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={48} height={48} alt=""  className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"/>
        </div>
        <div className="h-20 flex flex-col gap-2 items-center">
            <span className="font-semibold">Edward Gabriel May</span>
            <div className="flex items-center gap-3">
                <div className="flex">
                <Image src="https://images.pexels.com/photos/27084455/pexels-photo-27084455/free-photo-of-arara.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={12} height={12} alt=""  className="rounded-full object-cover w-3 h-3 "/>
                <Image src="https://images.pexels.com/photos/27084455/pexels-photo-27084455/free-photo-of-arara.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={12} height={12} alt=""  className="rounded-full object-cover w-3 h-3 "/>
                <Image src="https://images.pexels.com/photos/27084455/pexels-photo-27084455/free-photo-of-arara.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={12} height={12} alt=""  className="rounded-full object-cover w-3 h-3 "/>
                
                </div>
                <span className="text-xs text-gray-500">500 Followers</span>
            </div>
            <button className="rounded-md text-xs p-2 bg-orange-500 text-white hover:bg-orange-400">My Profile</button>
        </div>

    </div>
  )
}

export default ProfileCard