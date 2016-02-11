class Roll extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h3>{this.props.rollTotal}</h3>
      </div>
    )
  }
}
