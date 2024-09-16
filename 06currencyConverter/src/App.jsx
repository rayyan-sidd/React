import { useState } from 'react'
import {InputContainer} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  
  const [amount, setAmount] = useState('')
  const [from , setFrom] = useState("inr")
  const [to , setTo] = useState("usd")
  const [convertedAmt, setConvertedAmt] = useState()

  
  const currencyInfoFrom = useCurrencyInfo(from)
  const currencyInfoTo = useCurrencyInfo(to)

  const optionsFrom = Object.keys(currencyInfoFrom)
  const optionsTo = Object.keys(currencyInfoTo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmt(amount)
    setAmount(convertedAmt)
  }

  const convert = () => {
    setConvertedAmt(parseFloat(amount * currencyInfoFrom[to]).toFixed(2))
  }

  const handleAmountChange =(value) => {
    if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
      setAmount(value)
    }
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/7974687/pexels-photo-7974687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputContainer
                            label="From"
                            amount={amount}
                            currencyOptions = {optionsFrom}
                            selectCurrency = {from}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            onAmountChange={handleAmountChange}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputContainer
                            label="To"
                            amount={convertedAmt}
                            currencyOptions = {optionsTo}
                            selectCurrency = {to}
                            onCurrencyChange={(currency)=> setTo(currency)}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
