import React, { Component } from 'react';


class Text extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editMode: false,
            name: props.defaultName,
            nameTemp: props.defaultName,
            // MIGHT DELETE nameTemp and use name only
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
       
    }

    handleClick() {
        this.setState({editMode: true})
    }

    handleChange(e) {
        let nameTempValue = e.target.value;
        this.setState({nameTemp: nameTempValue})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({name: this.state.nameTemp, editMode: false});
    }
    render() {
        let edit;
        if (this.state.editMode === true) {
            if (this.props.type === 'textarea') {
                edit = <form action="" onSubmit={this.handleSubmit}><textarea className={this.props.className + "-edit"} onChange={this.handleChange} onBlur={this.handleSubmit} defaultValue={this.state.name} onClick={this.handleClick.bind(this)}></textarea></form>;
            } else if (this.props.type === 'input') {
                edit = <form action="" onSubmit={this.handleSubmit}><input className={this.props.className + "-edit"} type="text" onChange={this.handleChange} onBlur={this.handleSubmit} defaultValue={this.state.name} onClick={this.handleClick.bind(this)}></input></form>;
            } else {throw('Element type prop not specified!')}
        } else {
            edit = <p className={this.props.className} onClick={this.handleClick}>{this.state.name}</p>;
        }
        //const temp = React.createElement(this.props.type, {className: "span-text"}, 'hey there!')
        
        return (
            <div className={this.props.className + "-box"}>
                {edit}
            </div>
        );
    }
}

export default Text;