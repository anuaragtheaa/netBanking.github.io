import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import Authentication from './Authentication';
import Dashboard from './Dashboard';
import Header from './Header';
import Footer from './Footer';
import history from '../history';
import { fetchLoginStatus } from '../actions';

class App extends React.Component{
    componentDidMount() {
        this.props.fetchLoginStatus()
    }
    
    render() {
        return (
            <div className="container">
                <Router history={history}>
                    <div>
                        <Header />
                        <Route path="/" exact component={Home} />
                        <Route path="/home" exact component={Home} />
                        <Route path="/auth/:type" exact component={Authentication} />
                        <Route path="/dashboard" exact component={Dashboard} />
                        <Footer />
                    </div>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        test: 'demo'
    }
}

export default connect( mapStateToProps, { fetchLoginStatus } )(App);