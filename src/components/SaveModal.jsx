import React, { useState } from 'react'

const SaveModal = ({ openModal, closeModal, hour, min, sec }) => {

    const [details, setDetails] = useState({ title: "", description: ""  });

    const [time, setTime] = useState({ hr: hour, mins: min, seconds: sec});

    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    }


    const handleSave = (e) => {
        e.preventDefault();

        if (details) {

            let previousData = JSON.parse(localStorage.getItem('tasks'));

            if (!Array.isArray(previousData)) {
                previousData = []
            }

            let addMoreData =  { ...details, time };

            previousData.push(addMoreData);

            localStorage.setItem("tasks", JSON.stringify(previousData));


            setDetails({ title: "", description: "" })
            setTime({ hr: "", mins: "", seconds: ""});

            closeModal();


        }
    }



    return (
        <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
            <div className="relative p-4 w-full max-w-md max-h-full">

                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                           Add a Task Detail
                        </h3>
                        <button onClick={closeModal} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="p-4 md:p-5">
                        <form className="space-y-4" onSubmit={handleSave}>
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " name="title" value={details.title} onChange={handleChange} placeholder="Enter the title" required autoComplete="off" />
                            </div>

                            <div>
                                <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " name="description" value={details.description} onChange={handleChange} placeholder="Enter the Description" required autoComplete="off" />
                            </div>

                            <div className="flex items-center justify-between gap-x-3">
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save</button>

                                <button onClick={closeModal} className="w-full text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SaveModal