import React from 'react';

class Sat extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <div><center><h1><i><b>Dobrodošli!</b></i></h1></center></div>
         
          <h2>Trenutno vreme {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
export default Sat;  