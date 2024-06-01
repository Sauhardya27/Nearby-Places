"use client"
import React, { useState } from 'react'
import BusinessItem from './BusinessItem';

const BusinessList = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h2 className='text-[20px] my-3 font-bold flex justify-between items-center'>Top Nearby Places
				<span className='flex'>
					{count>0? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-10 h-10 p-2 text-gray-400 hover:text-purple-500 hover:bg-purple-100 cursor-pointer rounded-lg' onClick={()=>setCount(count-1)}>
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
					</svg>:null}

					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-10 h-10 p-2 text-gray-400 hover:text-purple-500 hover:bg-purple-100 cursor-pointer rounded-lg' onClick={()=>setCount(count+1)}>
						<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
					</svg>
				</span>
			</h2>
			<div>
				<BusinessItem />
			</div>
		</div>
	)
}

export default BusinessList