const site = [
    {
        name: "Google",
        count: "300%"
    },
    {
        name: "YouTube",
        count: "390%"
    },

    {
        name: "Instagram",
        count: "400%"
    },
    {
        name: "Facebook",
        count: "209%"
    },

    {
        name: "LinkedIn",
        count: "120%"
    },

]

const WebsiteTraffic = () => {
  return (
    <div className=' w-full lg:col-span-1 bg-gray-100 p-4 rounded-lg'>
        <h2 className="font-bold text-xl mt-2 mb-4 bg-gray-100">Traffic</h2>
        <div className="flex flex-col gap-8">
            {site.map((sit, index) =>(
                <div key={index} className="flex justify-between items-center">
                    <p>{sit.name}</p>
                    <p>{sit.count}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default WebsiteTraffic