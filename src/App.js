import React,{Component} from 'react';
import {increment,decrement,incrementAsync} from "./redux/actions"
import {connect} from 'react-redux'

 class App extends Component {

    constructor(props){
        super(props)
        this.selRef=React.createRef()
    }


    
    increment=()=>{
        const selNum=this.selRef.current.value*1
        this.props.increment(selNum)
    }

    decrement=()=>{
        const selNum=this.selRef.current.value*1
        this.props.increment(selNum)
    }

    incrementOdd=()=>{
        const selNum=this.selRef.current.value*1
        if(this.props.num % 2 ===0){
            this.props.increment(selNum)
        }
    }

    incrementAsync=()=>{
        const selNum=this.selRef.current.value*1
        this.props.incrementAsync(selNum)
    }

    componentWillUnmount() {

    }

     render() {
        return (
            <div>
                <p>{this.props.num}</p>
                <p>
                    <select ref={this.selRef}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </p>
                <p>
                    <button onClick={this.increment}>增加</button>
                    <button onClick={this.decrement}>减少</button>
                    <button onClick={this.incrementOdd}>偶数增加</button>
                    <button onClick={this.incrementAsync}>异步增加</button>
                </p>
            </div>
        )
    }
}

/*const mapStateToProps=(state)=>{
    return ({
        num:state
    })
}

const mapDispatchToProps=(dispatch)=>{
    return {
        increment:(num)=>dispatch(increment(num)),
        decrement:(num)=>dispatch(decrement(num))
    }
}*/

export default connect(
    state=>({num:state}),
    {
        increment,
        decrement,
        incrementAsync
    }
)(App)