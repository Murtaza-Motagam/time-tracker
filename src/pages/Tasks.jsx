import React, { useEffect, useState } from 'react'

const Tasks = () => {

  const [data, setData] = useState([]);

  const fetchData = () => {
    const data = localStorage.getItem("tasks");
    const retrievedData = JSON.parse(data);

    setData(retrievedData);

  }

  useEffect(() => {
    fetchData();
  }, [])




  return (
    <div className="min-h-screen">
      <div className="max-w-full">
        <div className=" w-[80vw] h-[60vh] mx-auto my-10 rounded-xl py-7">
          <h1 className="lg:text-4xl xl:text-4xl md:text-4xl text-xl text-center text-blue-500 font-semibold">All Your Task</h1>
          <div className="flex justify-center items-start flex-col max-w-full mt-10">
            {data && Array.isArray(data) && data.length !== 0 ? (
              data.map((e, index) => (
                < div className="p-5 shadow-md shadow-gray-400 w-full mx-auto mb-2 rounded tasks flex gap-x-4 justify-between gap-y-5 items-start lg:flex-row xl:flex-row md:flex-row flex-col" key={index} >
                  <div className="flex flex-col gap-y-5">
                    <h1 className="lg:text-xl xl:text-xl md:lg:text-md text-sm font-medium"><strong className="mr-2">Title:</strong> {e.title}</h1>
                    <h1 className="lg:text-xl xl:text-xl md:lg:text-md text-sm font-medium"><strong className="mr-2">Description:</strong>{e.description}</h1>
                    <h1 className="lg:text-xl xl:text-xl md:lg:text-md text-sm font-medium"><strong className="mr-2">Time:</strong>{e.time.hr}:{e.time.mins}:{e.time.seconds}</h1>
                  </div>
                  <button
                    type="button"
                    className="focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 text-white bg-yellow-300 hover:bg-yellow-200 cursor-pointer">
                    Edit
                  </button>
                </ div >
              ))
            ) : (
             <div className="w-full flex justify-center items-center mt-32">
               <h1 className="lg:text-4xl xl:text-4xl md:text-4xl text-xl text-center text-red-500 font-semibold">Oops! There are no task available here!</h1>
             </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks

