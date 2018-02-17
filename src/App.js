import React, { Component } from 'react';

import Header from './Header'
import Footer from './Footer'
import TodoInput from './TodoInput'
import CarList from './CarList'
import CarItem from './CarItem';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentTime:0,
      carItem:[]
    }
    this.handleFooterClick= this.handleFooterClick.bind(this)
    this.onAddCar = this.addCar.bind(this)
    this.addCar= this.addCar.bind(this)
  }
  handleFooterClick(time){
    this.setState({ currentTime: time})
  }

  addCar(newCar){
    this.setState({
      carItem: this.state.carItem.concat([newCar])
    })

  }


  render() {
    let { currentTime,carItem } =this.state
    return (
      <div>
        <hr/>
        Add My Car : 
        <br />
        <br />
        <TodoInput onAddCar= { this.addCar} />
        <CarList items={carItem} />

      <hr/>
        <Header currentUser="Sujin" isLoggedIn={true} />
        <div>currenttime : { currentTime }</div>
        <Footer onTimerClick={this.handleFooterClick}/>
      </div>
    );
  }
}

export default App;
