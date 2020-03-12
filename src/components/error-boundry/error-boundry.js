import React, {Component} from 'react';

import './error-boundry.css'; 
import ErrorIndicator from '../error-indicator/error-indicator';

export default class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }
  
    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        });
    }
  
    render() {
    
        if (this.state.hasError){
            return <ErrorIndicator/>
        }
    
        return this.props.children;
    }
} 