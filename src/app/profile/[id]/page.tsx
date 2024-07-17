import Feed from "@/app/components/Feed"
import LeftMenu from "@/app/components/LeftMenu"
import RightMenu from "@/app/components/RightMenu"
import Image from "next/image"


const ProfilePage = () => {
  return (
    <div className='flex gap-6 pt-6'>
      <div className="hidden xl:block w-[20%]"><LeftMenu type="profile" /></div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className=" bg-slate-100   text-sm flex flex-col gap-6 mb-12">
            <div className="h-60 relative gap-2 ">
              <Image src="https://images.pexels.com/photos/21908914/pexels-photo-21908914/free-photo-of-black-and-white-photography-of-a-man-surfing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="rounded-md object-cover" />
              <Image src="https://images.pexels.com/photos/27084455/pexels-photo-27084455/free-photo-of-arara.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={112} height={112} alt="" className="rounded-full object-cover w-28 h-28 absolute left-0 right-0 m-auto -bottom-12 ring-4 ring-white z-10" />
            </div>
            <div className="h-20 flex flex-col gap-4 items-center ">
              <span className="font-semibold pt-10 text-2xl gap-4">Elva Weaver</span>
              <div className="flex items-center gap-5">
                <div className="flex gap-x-7 items-center ">
                  <div className="flex flex-col items-center ">
                    <span className="text-sm font-bold">142</span>
                    <span>Posts</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold">1.2K</span>
                    <span>Followers</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold">1.4K</span>
                    <span>Following</span>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test" />
      </div>

    </div>
  )
}

export default ProfilePage