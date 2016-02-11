class Manager extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  roll(e){
    e.preventDefault();
    
  }
  previousRolls(){

  }
  render(){
    return(
      <div>
        <form onSubmit={this.roll}>
          <label>Quantity</label>
          <input type='number' ref='diceQuantity'/>
          <label>Size</label>
          <input type='number' ref='diceSize'/>
          <button type='submit'>Roll!</button>
        </form>
        {this.previousRolls}
      </div>
    )
  }
}
