import React from 'react'

const SecondaryFooter = () => {
  return (
    <div className=" text-gray-100 text-sm py-8  border-t-[0.1px]">
           
           <div className='w-10/12  mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
           <div>
           <p>© 2022 Xampro</p>
           </div>
            
            <div className='flex gap-4 md:gap-6'>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Refund Policy</p>
            <p>FAQ</p>
            </div>
           </div>
          </div>
  )
}

export default SecondaryFooter