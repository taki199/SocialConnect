"use client"

const UserInfoCardInteraction = ({
    userId,
    isUserBlocked,
    isUserFollowing,
    currentUserId,
    isFollowingSent,
    isFollowing,
}: {
    userId: String;
    currentUserId: boolean;
    isUserFollowing: boolean;
    isFollowingSent: boolean;
    isFollowing: boolean;
    isUserBlocked: boolean;


}) => {
    return (
        <div>
            <>
                <form action="">
                    <button className=' w-full rounded-md p-2 bg-orange-500 text-sm  text-white'>
                        {isFollowing
                            ? "Following"
                            : isFollowingSent
                                ? "Friend request Sent"
                                : "Follow"

                        }
                    </button>
                </form>
                <form action="" className="self-end">
                    <span className='text-red-400  text-xs cursor-pointer '>
                        Block User
                    </span>
                </form>
            </>
        </div>

    )
}

export default UserInfoCardInteraction