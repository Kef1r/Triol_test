import React, {Component} from 'react';
import EntryInput from './EntryInput';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


export default class EntryItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            isEditable: false,
            key: props.entry.entry.key,
            value: props.entry.entry.value

        };
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleDelete() {
        this.props.deleteEntry(this.props.entry.id);
    }

    // handleDoubleClick() {
    //     this.setState({isEditable: !this.state.isEditable});
    // }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    handleChange(e) {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        this.setState({[fieldName]: fieldValue});


    }

    validate() {
        if (this.state.key !== "" && this.state.value !== "") {
            this.setState({isEditable: true});
        }
    }

    handleEdit() {
        let id = this.props.entry.id;
        let payload = {key: this.state.key, value: this.state.value};
        this.props.editEntry(id, payload);
        this.setState({open: false})
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={this.state.isEditable}
                onClick={this.handleEdit.bind(this)}
            />,
        ];
        let element;
        // if (this.state.isEditable) {
        //     element = (<EntryInput entry={this.props.entry} isNew={false} editEntry={this.props.editEntry}
        //                            state={this.props.isEditable}/>);
        // } else {
        element = (<div className="list__body">

            <div className="item">{this.props.entry.entry.key}</div>
            <div className="item">{this.props.entry.entry.value}</div>
            <div className="btn__wrapper">
                <FlatButton label="X" primary={true} style={{"minWidth": '45px'}} className="item" onClick={this.handleDelete.bind(this)}/>
                <FlatButton label="Edit" primary={true} style={{"minWidth": '45px'}} onClick={this.handleOpen}/>
            </div>
        </div>);


        return (
            <div>
                {element}
                <Dialog
                    title="Change it"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >

                    <TextField name="key" type="text" value={this.state.key} onChange={this.handleChange.bind(this)}
                           required={true}/>
                    <TextField name="value" type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
                </Dialog>
            </div>
        );
    }
};
