import React, { Component, Fragment } from 'react';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header'
import Excerise from './components/Exercises';
// import './App.css';
import { muscles, exercises } from '../src/components/Store'

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       exercises
    }
  }
  
  getExercisesByMuscules = () => {
    return Object.entries( 
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise
        exercises[muscles] = exercises[muscles] ?
          [...exercises[muscles], exercise]
          : [exercise]
        return exercises
      }, {})
    )
  }

  render(){
    const exercises = this.getExercisesByMuscules() 
    return(
      <Fragment>
        <Header/>
          <Excerise 
            exercises = {exercises}
          />
        <Footer muscles={muscles}/>
      </Fragment>
    );
  }
}

export default App;
