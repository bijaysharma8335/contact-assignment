import React from 'react'

type Props = {}

const AddContact = (props: Props) => {
  return (
    <div className='bg-orange-50 w-full p-3'>
      <button type="button" className='bg-gray-200 border-gray-600 border-2  text-black text-xl font-bold my-5 p-3'>Create Contact</button>
    </div>
  )
}

export default AddContact