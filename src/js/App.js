import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from "./components/About";
import NoMatch from './components/NoMatch'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:null,
        };
    }

    componentDidMount() {
        fetch(
            "https://sheets.googleapis.com/v4/spreadsheets/1lRxN4IaaZhrqfaZDTbLdhe0l6iagYi8pa-bGkUddjdI/values/Sheet1!A1:D5?key=AIzaSyAZbYrD8zX1Tqz6LRf2CVjJihJVK9T6RaM"
        ).then(
            res=>res.json()
        ).then(
            (out)=> {this.setState({data: out.values})}
        ).catch(
            err=>{throw err}
        )
    }


    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" component={() => <Home  content={this.state.data}/>} />
                        <Route exact path="/about" component={() => <About  content={this.state.data}/>} />
                        <Route component={() => <NoMatch />} />
                    </Switch>
                </Router>
            </React.Fragment>
        )
    }
}

export default App;