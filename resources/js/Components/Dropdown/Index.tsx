import React, { ReactElement, useState } from 'react';
interface DropDownProps {
  children: ReactElement[];
}


export default function DropDown({children}: DropDownProps) {
  const [mobileToggle, setMobileToggle] = useState(false);

  return (
    <div onMouseEnter={() => setMobileToggle(true)} onMouseLeave={() => setMobileToggle(false)} className="relative cursor-pointer">
      {children[0]}
      <div className='pt-2 '>
        <div className={`absolute left-0  w-48 rounded-md shadow-lg bg-white ring-2 ring-black ring-opacity-5 ${mobileToggle?"":"hidden"}`}>
          {children[1]}
        </div>
      </div>
    </div>
  )
}