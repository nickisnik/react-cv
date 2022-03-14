import React, { Component } from 'react';
import Text from './Text';

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [1],
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteBtn = this.deleteBtn.bind(this);
        this.insertDefault = this.insertDefault.bind(this);

        this.educationDefault = ['2017-2020', 'BSc Chemistry,', 'University of Manchester']
        this.experienceDefault = ['2021-2022', 'Forensic Scientist,', 'Scotland Yard']
    }

    insertDefault(index) {
        if (this.props.context === 'education') {
            return this.educationDefault[index]
        }
        return this.experienceDefault[index]
    }

    deleteItem(e) {
        const elementNum = parseInt(e.target.parentElement.dataset.num);
        this.setState({
            list: [...this.state.list].filter(item => {
                return item !== elementNum;
            })
        })
    }

    addItem() {
        const lastItem = this.state.list.slice(-1)[0];
        this.setState({
            list: [...this.state.list, lastItem + 1] //(lastItem + 1)
        });
    }
    showList() {
        console.log(this.state.list);
    }

    deleteBtn(index) {
        if (index === 0) { // change to 0 to not show on first item
            return <button className='list-button' onClick={this.addItem}>+</button>
        }
        return <button className='list-button' onClick={this.deleteItem}>-</button>
    }

    render() {
        const listArray = this.state.list.map((number, index) => {
            return <div key={number.toString()} data-num={this.state.list[index]} className='preview-main-education'>
            <Text defaultName={this.insertDefault(0)} type='input' className="preview-main-education-year" />
            <Text defaultName={this.insertDefault(1)} type='input' className="preview-main-education-course" />
            <Text defaultName={this.insertDefault(2)} type='input' className="preview-main-education-name" />
            {this.deleteBtn(index)}
        </div>
        });
        return (
            <>
            {listArray}
            </>
        );
    }
}

export default List;