import React, { Component } from "react";
import {counterActions} from '../store/counter-slice'
import classes from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    return state.counter.counter;
  });
    const showCounter = useSelector(state =>{
        return state.counter.showCounter
    })
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decremendHandler = () => {
    dispatch(counterActions.decrement());
  };
    const increaseFiveHandler = () =>{
        dispatch(counterActions.increase(17))
    }

    const toggleCounterHandler = () => {
    dispatch(counterActions.toggleVisible());

    };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {showCounter && <div className={classes.value}>{counter}</div>}
      

      <div>
        <button className={classes.button} onClick={incrementHandler}>
          Increment
        </button>
        <button className={classes.button} onClick={decremendHandler}>
          Decrement
        </button>
        <button className={classes.button} onClick={increaseFiveHandler}>
          increase by 5
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//alternatively the class based component implementation would be as follows

//class Counter extends Component {
//    incrementHandler() {
//        this.props.increment()
//    }
//
//    decremendHandler() {
//        this.props.decrement()
//    }
//
//  toggleCounterHandler() {}
//
//  render() {
//    return (
//      <main className={classes.counter}>
//        <h1>Redux Counter</h1>
//        <div className={classes.value}>{this.props.counter}</div>
//
//        <div>
//          <button className={classes.button} onClick={this.incrementHandler.bind(this)}>
//            Increment
//          </button>
//          <button className={classes.button} onClick={this.decremendHandler.bind(this)}>
//            Decrement
//          </button>
//        </div>
//        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//      </main>
//    );
//  }
//}
//
//const mapStateToProps = (state) => {
//  return {
//    counter: state.count,
//  };
//};
//const mapDispatchToProps = (dispatch) => {
//  return {
//    increment: () =>
//      dispatch({
//        type: "increment",
//      }),
//    decrement: () =>
//      dispatch({
//        type: "decrement",
//      }),
//  };
//};
//
//export default connect(mapStateToProps, mapDispatchToProps)(Counter);
