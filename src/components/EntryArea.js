import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';



export default class EntryArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    handleChange(e) {
        this.setState({data: e.target.value});

    }

    handleImport(e) {
        if (this.state.data) {
            let data = JSON.parse(this.state.data);
            data.forEach(entry => this.props.addEntry(entry));
            this.setState({data: ""});
        }
    }


    render() {
        return (
            <div className="exchange__area">
                <textarea
                    onChange={this.handleChange.bind(this)} value={this.state.data}>
                </textarea>

                <FlatButton label="join" primary={true} name="join" onClick={this.handleImport.bind(this)}/>
            </div>
        );
    }
}