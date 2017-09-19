import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


export default class EntryInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: '',
            value: ''
        }
    }

    componentDidMount() {
        if (!this.props.isNew) {
            this.setState({key: this.props.entry.entry.key, value: this.props.entry.entry.value})
        }
    }

    handleChange(e) {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        this.setState({[fieldName]: fieldValue});
    }

    handleAdd(e) {
        if (this.props.isNew) {
            this.props.actions.addEntry({key: this.state.key, value: this.state.value});
            this.state.key = "";
            this.state.value = "";
        } else {
            let id = this.props.entry.id;
            let payload = {key: this.state.key, value: this.state.value};
            this.props.editEntry(id, payload);

        }

    }

    render() {
        return (
            <div className="entryInput">
                <TextField floatingLabelText="Key" name="key" value={this.state.key} onChange={this.handleChange.bind(this)}/> <br/>
                <TextField floatingLabelText="Value" name="value" value={this.state.value} onChange={this.handleChange.bind(this)}/><br/>
                <FlatButton label="add" primary={true} onClick={this.handleAdd.bind(this)}/>
            </div>
        )
    }
}
