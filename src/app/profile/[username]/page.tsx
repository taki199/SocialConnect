import Feed from "@/app/components/Feed"
import LeftMenu from "@/app/components/LeftMenu"
import RightMenu from "@/app/components/RightMenu"
import prisma from "@/lib/client"
import { auth } from "@clerk/nextjs/server"

import Image from "next/image"
import { notFound } from "next/navigation"


const ProfilePage = async({params}:{params:{username:string}}) => {

  const username =params.username
  const user = await prisma.user.findFirst({
    where: {
      username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          posts: true,
        },
      },
    },
  });
  if (!user) return notFound();
  const { userId: currentUserId } = auth();

  let isBlocked;

  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: {
        blockerId: user.userId,
        blockedId: currentUserId,
      },
    });

    if (res) isBlocked = true;
  } else {
    isBlocked = false;
  }

  if (isBlocked) return notFound();
  return (
    <div className='flex gap-6 pt-6'>
      <div className="hidden xl:block w-[20%]"><LeftMenu type="profile" /></div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className=" bg-slate-100   text-sm flex flex-col gap-6 mb-12">
            <div className="h-60 relative gap-2 ">
              <Image src={user.cover||"./noCover.png"} alt="" fill className="rounded-md object-cover" />
              <Image src={user.avatar || "./noAvatar.png"} width={112} height={112} alt="" className="rounded-full object-cover w-28 h-28 absolute left-0 right-0 m-auto -bottom-12 ring-4 ring-white z-10" />
            </div>
            <div className="h-20 flex flex-col gap-4 items-center ">
              <span className="font-semibold pt-10 text-2xl gap-4">{(user.name && user.surname) ? user.name + " " +user.surname:user.username}</span>
              <div className="flex items-center gap-5">
                <div className="flex gap-x-7 items-center ">
                  <div className="flex flex-col items-center ">
                    <span className="text-sm font-bold">{user._count.posts}</span>
                    <span>Posts</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold">{user._count.followers}</span>
                    <span>Followers</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold">{user._count.followings}</span>
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