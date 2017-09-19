import React, {Component} from 'react';
import EntryItem from './EntryItem';
export default class EntryList extends Component {
    render() {
        return (
            <section className="list">
                <header className="list__header">
                    <h2>Key</h2>
                    <h2>Value</h2>
                    <h2>Options</h2>
                </header>
                <div style={{width:"100%"}}>
                    {this.props.entries.map(entry => <EntryItem key={entry.id} entry={entry} {...this.props.actions} />)}
                </div>
            </section>
        );
    }
};
