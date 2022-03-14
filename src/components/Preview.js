import React, { Component } from 'react';
import './preview.css';
import Name from './Name';
import Details from './Details';
import Text from './Text';
import List from './List';

class Preview extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        return (
            <div className='Preview-box'>
                <div className='preview-panel'>
                    <Text type="input" defaultName="Jack" className='preview-panel-name' />
                    <Text type="input" defaultName="Braun"  className='preview-panel-name' />
                    <Details /> 
                    
                </div>

                <div className='preview-main'>
                    <span className='preview-main-title'>About Me</span>
                    <Text defaultName={lorem} type='textarea' className='preview-main-about' />
                    <span className='preview-main-title'>Education</span>
                    <List context="education" />
                    
                    <span className='preview-main-title'>Experience</span>
                    <List context="experience" />
                </div>
            </div>
        );
    }
}

export default Preview;