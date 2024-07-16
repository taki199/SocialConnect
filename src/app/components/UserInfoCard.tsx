import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserInfoCard = ({ userId }: { userId: string }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">User Information</span>
                <Link href="/" className="text-orange-500 text-xs">See All</Link>
            </div>
            {/* Bottom */}
            <div className='flex flex-col gap-4 text-gray-500'>
                <div className='flex items-center gap-2'>
                    <span className='text-xl text-black'>Lloyd Fleming</span>
                    <span className='text-sm'>@Jonathan</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis magnam quidem sapiente odit aspernatur autem voluptas corrupti!
                </p>
                <div className='flex items-center gap-2'>
                    <Image src="/map.png" alt='' width={16} height={16} />
                    <span>Living in <b>Denver</b> </span>

                </div>
                <div className='flex items-center gap-2'>
                    <Image src="/school.png" alt='' width={16} height={16} />
                    <span>went to <b>Edgar High School</b> </span>

                </div>
                <div className='flex items-center gap-2'>
                    <Image src="/work.png" alt='' width={16} height={16} />
                    <span>works at <b>Apple Inc</b> </span>

                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-1 items-center'>
                        <Image src="/link.png" alt='' width={16} height={16} />
                        <Link href='/' className='text-orange-500 font-medium'>HoucineDev</Link>

                    </div>
                    <div className='flex gap-1 items-center'>
                        <Image src="/date.png" alt='' width={16} height={16} />
                        <span>Joined July 16</span>

                    </div>

                </div>
                <button className='rounded-md p-2 items-center bg-orange-500 text-sm gap-2 text-white'>Follow</button>
                <span className='text-red-400 self-end text-xs cursor-pointer'>Block User</span>



            </div>
        </div>
    )
}

export default UserInfoCard