import prisma from '@/lib/client'
import { auth } from '@clerk/nextjs/server'
import { User } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import UserInfoCardInteraction from './UserInfoCardInteraction'
import UpdateUser from './UpdateUser'

const UserInfoCard = async ({ user }: { user: User }) => {
    const createdAtDate = new Date(user.createdAt)
    const formattedDate=createdAtDate.toLocaleDateString("en-US",{
        year:"numeric",
        month:"long",
        day:"numeric"
    })

    let isUserBlocked=false
    let isFollowing=false
    let isFollowingSent=false

    const {userId:currentUserId}=auth()

    if(currentUserId){
        const blockRes = await prisma.block.findFirst({
            where:{
                blockerId:currentUserId,
                blockedId:user.userId
            }
        })
        blockRes ? isUserBlocked= true : isUserBlocked
        const followRes = await prisma.follower.findFirst({
            where: {
              followerId: currentUserId,
              followingId: user.userId,
            },
          });
      
          followRes ? (isFollowing = true) : (isFollowing = false);
          const followReqRes = await prisma.followRequest.findFirst({
            where: {
              senderId: currentUserId,
              receiverId: user.userId
            },
          });
      
          followReqRes ? (isFollowingSent = true) : (isFollowingSent = false);
    }
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">User Information</span>
               {currentUserId === user.userId ? (<UpdateUser user={user}/>) : (<Link href="/" className="text-orange-500 text-xs">See All</Link>)}
            </div>
            {/* Bottom */}
            <div className='flex flex-col gap-4 text-gray-500'>
                <div className='flex items-center justify-between gap-2'>
                    <span className='text-xl text-black'>{(user.name && user.surname) ? user.name + " " + user.surname : user.username}</span>
                    <span className='text-sm'><b>@{user.username}</b></span>
                </div>
                {user.desc && <p>{user.desc}</p>}
                {user.city && (
          <div className="flex items-center gap-2">
            <Image src="/map.png" alt="" width={16} height={16} />
            <span>
              Living in <b>{user.city}</b>
            </span>
          </div>
        )}
                 {user.school && (
          <div className="flex items-center gap-2">
            <Image src="/school.png" alt="" width={16} height={16} />
            <span>
              Went to <b>{user.school}</b>
            </span>
          </div>
        )}
               {user.work && (
          <div className="flex items-center gap-2">
            <Image src="/work.png" alt="" width={16} height={16} />
            <span>
              Works at <b>{user.work}</b>
            </span>
          </div>
        )}
                 <div className="flex items-center justify-between">
          {user.website && (
            <div className="flex gap-1 items-center">
              <Image src="/link.png" alt="" width={16} height={16} />
              <Link href={user.website} className="text-blue-500 font-medium">
                {user.website}
              </Link>
            </div>
          )}
                    <div className='flex gap-1 items-center'>
                        <Image src="/date.png" alt='' width={16} height={16} />
                        <span>Joined {formattedDate}</span>

                    </div>

                </div>
                {currentUserId && currentUserId !== user.userId && (
          <UserInfoCardInteraction
            userId={user.userId}
            isUserBlocked={isUserBlocked}
            isFollowing={isFollowing}
            isFollowingSent={isFollowingSent}
          />
        )}

            </div>
        </div>
    )
}

export default UserInfoCard