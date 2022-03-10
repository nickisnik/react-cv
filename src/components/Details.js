import React, { Component } from 'react';
import Text from './Text'

class Details extends Component {
    render() {
        return (
            <div className='preview-panel-details'>
                <span>Address</span>
                <Text type="input" className="preview-panel-details-text" defaultName="Flat 12, Stoke Guifford"/>
                <span>Phone</span>
                <Text type="input" className="preview-panel-details-text" defaultName="0785 874 8452"/>
                <span>Email</span>
                <Text type="input" className="preview-panel-details-text" defaultName="jbraun@gmail.com"/>
                <span>LinkedIn</span>
                <Text type="input" className="preview-panel-details-text" defaultName="linkedin.com/jackbraun"/>
            </div>
        );
    }
}

export default Details;