import React, { useState } from 'react'


function Personal({data}) {
    const [psn,setPsn] = useState([data])
    const [value,setValue] = useState(0)

    const [{me}] =  psn[value]
  return (
    <div className='text-white mt-5 flex flex-col font-sans p-3'>
       {
        me.map((item,i) =>{
            return (
              <>
                <div className=" ">
                  <p className="sm:text-md p-3 ">{item.about}</p>
                </div>
                <div className="flex flex-col mt-6 p-6 space-y-6">
                  <div className="flex sm:space-x-20 ">
                    <p>Name</p>
                    <p className="px-2">{item.name}</p>
                  </div>
                  <div className="flex sm:space-x-20 ">
                    <p>Age</p>
                    <p className="px-7">{item.age}</p>
                  </div>
                  <div className="flex space-x-20 ">
                    <p>Address</p>
                    <p className="px-1">{item.address}</p>
                  </div>
                  <div className="flex space-x-8 ">
                    <p>Phone Number</p>
                    <p>{item.phone}</p>
                  </div><div className="flex space-x-8 ">
                    <p className="">Personality</p>
                    <p className="px-9">
                      loyal, Generous, Diligent, understanding, flexible, patient
                    </p>
                  </div>
                  <div className="flex space-x-8 ">
                    <p>Language</p>
                    <p className="px-9">{item.language1} (native)</p>
                  </div>
                  <div className="flex space-x-8 ">
                    <p className="text-black">Language</p>
                    <p className="px-9">{item.language2} (Immediate)</p>
                  </div>
                  
                </div>

                
              </>
            );
        })
       }
    </div>
  )
}

export default Personal