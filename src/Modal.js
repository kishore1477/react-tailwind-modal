import React from 'react'

const Modal = (props) => {
  const {setChoice, setShow} = props
const handleCancel =()=>{
  setChoice(false)
  setShow(false)
}
const handleAccept =()=>{
  setShow(false)
  setChoice(true)
}
  return (
    <div className='bg-zinc-200 opacity-80 fixed inset-0 z-50'>
<div className='h-screen flex  justify-center  items-center'>
  <div className='  bg-white py-12 px-24 border-4 border-green-500 rounded-xl '>

  <div className='text-lg mb-10  text-zinc-600 '>Are you sure?</div>
<div className='flex'>
<button className='bg-blue-800 px-4 py-2 text-white rounded'onClick={handleCancel}>No</button>
<button className='bg-blue-800 px-4 py-2 text-white rounded ml-4 'onClick={handleAccept}>yes</button>
</div>

</div>
  </div>

    </div>


  )
}

export default Modal