class Manager extends React.Component {
  constructor(props){
    super(props);
    this.roll = this.roll.bind(this);
    // this.previousRolls = this.previousRolls.bind(this);
    this.state = {rolls: []}
  }
  roll(e){
    e.preventDefault();
    let newRoll = Math.floor(Math.random() * (parseInt(this.refs.diceSize.value) - 1) + 1)
    let rolls = this.state.rolls
    // debugger
    rolls.push(newRoll)
    this.setState({rolls})
  }

  render(){
    let previousRolls = this.state.rolls.map( roll => {
      return(<Roll rollTotal={roll} />)
    })
    return(
      <div>
        <form onSubmit={this.roll}>
          <label>Quantity</label>
          <input type='number' ref='diceQuantity'/>
          <label>Size</label>
          <input type='number' ref='diceSize'/>
          <button type='submit'>Roll!</button>
        </form>
        {previousRolls}
      </div>
    )
  }
}
