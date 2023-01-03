import { useRef, useState } from "react"
import useCounter from "../hooks/useCounter"
import { Button, Input, InputCont, Reset, SVG, Count, Counter, Head, Body, Svgbtn } from '../styles/styles'
import { Helmet } from "react-helmet-async";

export default function UseCounterCounter() {

  const firstInput = useRef(null)
  const secondInput = useRef(null)

  const [initialCount, setInitialCount] = useState(0)
  const [countBy, setCountBy] = useState(1)
  const [error, setError] = useState('')

  const { value, increment, decrement, reset } = useCounter(initialCount, countBy)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (firstInput.current.value === '' || secondInput.current.value === '') {
      setError('*Please fill both fields to set counter')
      return
    }

    if (firstInput.current.value < 0) {
      setError('*Start value cannot be set as negative value')
      return
    }
    if (secondInput.current.value < 0) {
      setError('*Count by cannot be set as negative value')
      return
    }
    if (secondInput.current.value == 0) {
      setError('*Count by cannot be set as ZERO')
      return
    }

    setInitialCount(Number(firstInput.current.value))
    setCountBy(Number(secondInput.current.value))
    setError('')
  }

  const disableDecrement = value - countBy < 0;


  return (
    <>
      <Helmet>
        <title>useCounter Counter App - AltSchool Africa Second Semester Examination</title>
        <meta name="description" content=" Setup a custom counter hook with increment, decrement, reset, setValue functions with a valid UI " />
        <link rel="canonical" href="https://counter-app-alpha-one.vercel.app/counter1" />
      </Helmet>

      <Body>
        <Head>useCounter Counter</Head>

        <Counter>
          <Count>
            <Svgbtn>
              <SVG className={disableDecrement ? 'disable' : 'hover'} onClick={decrement} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </SVG>
            </Svgbtn>
            <div>{value}</div>
            <Svgbtn>
              <SVG onClick={increment} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="hover">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </SVG>
            </Svgbtn>
          </Count>
          <Svgbtn>
            <Reset onClick={reset} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="hover">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </Reset>
          </Svgbtn>
        </Counter>

        <div>
          <form onSubmit={handleSubmit}>
            <div>{error}</div>
            <InputCont>
              <label>Start Value:</label>
              <Input type="number" placeholder="0" ref={firstInput} />
            </InputCont>
            <InputCont>
              <label>Count by:</label>
              <Input type="number" placeholder="1" ref={secondInput} />
            </InputCont>
            <Button>Set</Button>
          </form>
        </div>
      </Body>
    </>

  )
}


