import './App.css';
import Modal from './Modal';
import react ,{useState}from 'react'
function App() {
  const [choice, setChoice] = useState(false);
  const [show, setShow] = useState(false);
  const click = () => {
    // alert("Clicked")
    // logic for toggle mode
//     if(show){
//       setShow(false)

//     }else if(!show){
// setShow(true)
//     }

setShow(true)
}
  return (
    <>
   
     { choice ? <div className='mt-12 flex justify-center '>
<h5 className='w-1/3  text-center   bg-yellow-600 rounded-lg py-1 '>Welcome buddy</h5>
      </div>: <div className='flex justify-center'>

<div className='bg-slate-900  text-center cursor-pointer rounded  w-1/3 text-white ' onClick={click}>Click Me</div>
</div>}
      { show && <Modal setChoice={setChoice} setShow={setShow} />}
    </>
  );
}

export default App;
