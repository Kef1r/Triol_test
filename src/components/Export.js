import React, {Component} from 'react';

export default class Export extends Component {
    render() {
        return(
            <div  className="exchange__area">
                <textarea readOnly={true} value={this.props.store}>

            </textarea>
                <button disabled="disabled">Join</button>
            </div>
        );
    }
}