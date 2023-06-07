import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  handleClick = value => {
    this.setState(prevValue => ({balance: prevValue.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sara Williams'
    const proname = name.slice(0, 1)

    return (
      <div className="main-container">
        <div className="card-container">
          <div className="profile">
            <h3 className="icon">{proname}</h3>
            <h1 className="title">{name}</h1>
          </div>
          <div className="second-sec">
            <h2>Your Balance</h2>
            <h3>{balance}</h3>
          </div>
          <div className="third-sec">
            <h1>Withdraw</h1>
            <p>Choose sum in (rupees)</p>
            <ul className="ul-list">
              {denominationsList.map(each => (
                <DenominationItem
                  each={each}
                  key={each.id}
                  handleClick={this.handleClick}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
