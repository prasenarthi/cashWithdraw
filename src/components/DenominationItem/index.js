import './index.css'

const DenominationItem = props => {
  const {each, handleClick} = props
  const {value} = each

  const handleValue = () => {
    handleClick(value)
  }

  return (
    <li className="fourth-sec" onClick={handleValue}>
      {each.value}
    </li>
  )
}

export default DenominationItem
