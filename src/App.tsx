import { useZK } from './hooks/useZK'
import { useState } from 'react'
import { Field } from 'o1js'
import './App.css'

function App() {
  const zk = useZK()

  const [toHash, setToHash] = useState<number>(0)
  const [hashed, setHashed] = useState<string>('')

  const correctValue = Field(1)
  const incorrectValue = Field(2)

  console.log(zk.hash(correctValue).toString())
  console.log(zk.hash(incorrectValue).toString())

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col">
        <div>Get a hash value of a number</div>
        <input
          type="number"
          onChange={e => {
            setToHash(parseInt(e.target.value))
          }}
        />
        <button
          onClick={() => {
            setHashed(zk.hash(new Field(toHash)).toString())
          }}
        >
          Get
        </button>
        {hashed}
      </div>
    </div>
  )
}

export default App
