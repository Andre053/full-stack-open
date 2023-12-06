import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const title1 = "give feedback"
  const title2 = "statistics"

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
  }
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(updatedNeutral + good + bad)
  }
  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(updatedBad + neutral + good)
  }
  return (
    <div>
      <Header content={title1}/>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      <Header content={title2}/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

const Statistics = (props) => {
  console.log("Statistics props:", props)
  if (props.total == 0) {
    return (
      <div>No feedback given</div>
    )
  }
  let good = props.good, bad = props.bad, neutral = props.neutral, total = props.total

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={total}/>
        <StatisticLine text="average" value={(good - bad)/total}/>
        <StatisticLine text="positive" value={good/total*100 + " %"}/>
      </tbody>
   </table>
  )
}
const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}
const StatisticLine = ({text, value}) => (
  
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Header = ({ content }) => {
  return (<h1>{content}</h1>)
}

export default App