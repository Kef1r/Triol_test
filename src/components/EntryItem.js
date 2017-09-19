import React, {Component} from 'react';
import EntryInput from './EntryInput';

export default class EntryItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditable: false
        };
    }

    handleDelete() {
        this.props.deleteEntry(this.props.entry.id);
    }

    handleDoubleClick() {
        this.setState({isEditable: !this.state.isEditable});
    }

    render() {
        let element;
        if (this.state.isEditable) {
            element = (<EntryInput entry={this.props.entry} isNew={false} editEntry={this.props.editEntry}
                                   state={this.props.isEditable}/>);
        } else {
            element = (<div className="list__body">

                <div className="item">{this.props.entry.entry.key}</div>
                <div className="item">{this.props.entry.entry.value}</div>
                <button className="item" onClick={this.handleDelete.bind(this)}>X</button>

            </div>)

        }
        return (
            <div onDoubleClick={this.handleDoubleClick.bind(this)}>
                {element}
            </div>
        );
    }
};
