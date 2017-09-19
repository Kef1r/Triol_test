import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import EntryList from './components/EntryList';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import EntryInput from './components/EntryInput';
import {bindActionCreators} from 'redux';
import * as EntryActions from './actions/entries';
import Exchange from "./components/Exchange";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

    componentDidMount() {
        this.props.actions.showAll(this.props.entries);
    }

    render() {
        return (
            <MuiThemeProvider>
            <div className="App">
                <EntryList entries={this.props.entries} actions={this.props.actions} className="entryList"/>
                <div className="app__wrapper">
                    <EntryInput actions={this.props.actions} isNew={true} className="entry"/>
                    <Exchange entries={this.props.entries} actions={this.props.actions}/>
                </div>
            </div>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    entries: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    entries: state.entries
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(EntryActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
