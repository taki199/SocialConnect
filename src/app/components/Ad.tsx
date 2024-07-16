import Image from "next/image"


const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* TOP */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* Bottom */}
      <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
        <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>

          <Image src="https://images.pexels.com/photos/27089756/pexels-photo-27089756/free-photo-of-romantic-scented-candle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="rounded-lg object-cover" />
        </div>
        <div className="flex items-center gap-4">
          <Image src="https://images.pexels.com/photos/27089756/pexels-photo-27089756/free-photo-of-romantic-scented-candle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={24} height={24} className="rounded-full w-6 h-6 object-cover" />
          <span className="text-orange-500 font-medium">BigChef Lounge</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm" ? "lorem ipsum dolor sit amet consecteur adipisicing elit." : size === "md" ? "lorem ipsum dolor sit amet consecteur adipisicing elit,lorem ipsum dolor sit amet consecteur adipisicing elit." : "lorem ipsum dolor sit amet consecteur adipisicing elit.lorem ipsum dolor sit amet consecteur adipisicing elit.lorem ipsum dolor sit amet consecteur adipisicing elit."}
        </p>
        <button className="rounded-lg text-xs p-2 bg-gray-200 text-gray-500">Learn More</button>
      </div>

    </div>

  )
}

export default Ad