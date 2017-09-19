import React, {Component} from 'react';
import EntryArea from "./EntryArea";
import Export from "./Export";
import FlatButton from 'material-ui/FlatButton';


export default class Exchange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: "export"
        }

    }

    handelSubmit(e) {
        let modeName = e.target.name;
        this.setState({mode: modeName})
    }

    render() {
        let element;
        if (this.state.mode === 'import') {
            element = (<EntryArea mode={this.state.mode} {...this.props.actions} />);
        }
        else if (this.state.mode === 'export') {
            let entry = [];
            this.props.entries.forEach((el, i) => (entry.push(el.entry)));
            element = (<Export store={JSON.stringify(entry)}/>);
        }

        return (
            <div className="exchange">
                <div className="exchange__wrapper">
                    <button label="import"  name="import" className="btn" onClick={this.handelSubmit.bind(this)}>import</button>
                    <button label="export"  name="export" className="btn" onClick={this.handelSubmit.bind(this)}>export</button>
                </div>
                {element}
            </div>
        )
    }
}