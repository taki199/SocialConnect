"use client"

import { switchFollow } from "@/lib/actions";
import { useState } from "react";

const UserInfoCardInteraction = ({
    userId,
    isUserBlocked,
    isUserFollowing,
    currentUserId,
    isFollowingSent,
    isFollowing,
}: {
    userId:string;
    currentUserId: boolean;
    isUserFollowing: boolean;
    isFollowingSent: boolean;
    isFollowing: boolean;
    isUserBlocked: boolean;


}) => {
    const [userState,setUserState]=useState({
        following:isFollowing,
        blocked:isUserBlocked,
        followingRequestSent:isFollowingSent,

    })

    const  follow = async()=>{
        try {
            await switchFollow(userId);
            setUserState(prev=>({
                ...prev,
                following:prev.following && false,
                followingRequestSent:!prev.following && !prev.followingRequestSent ? true :false,
            }))
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <>
                <form action={follow}>
                    <button className=' w-full rounded-md p-2 bg-orange-500 text-sm  text-white'>
                        {userState.following
                            ? "Following"
                            : userState.followingRequestSent
                                ? "Friend request Sent"
                                : "Follow"

                        }
                    </button>
                </form>
                <form action="" className="self-end">
                    <span className='text-red-400  text-xs cursor-pointer '>
                        {userState.blocked ? "Unblock User" :"Block User"}
                    </span>
                </form>
            </>
        </div>

    )
}

export default UserInfoCardInteraction