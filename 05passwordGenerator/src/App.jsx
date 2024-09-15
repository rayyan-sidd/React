import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+{}[]?/"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)


  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange()  (for specific selection)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-white bg-black'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
            value={password}
            className='outline-none w-full py-1 px-3 text-gray-900'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          
          className='bg-gray-900 px-2 shr hover:bg-gray-600'>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={8}
            max={15}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" id="NumberInput"
            defaultchecked={numAllowed}
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
            />
             <label htmlFor='NumberInput'>Number Input</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" id="CharInput"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            />
             <label htmlFor='CharInput'>Character Input</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
