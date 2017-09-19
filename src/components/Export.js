import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';



export default class Export extends Component {
    render() {
        return(
            <div  className="exchange__area">
                <textarea
                   readOnly={true} value={this.props.store}>
                </textarea>

                <FlatButton  label="Join" primary={true} disabled={true}/>
            </div>
        );
    }
}