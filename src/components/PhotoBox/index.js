import React from 'react';

import './styles.scss';

class PhotoBox extends React.Component {
    render() {
        return (
            <div className="photo-box">
                <img src={this.props.photo.url}/>
            </div>
        )
    }
}

export default PhotoBox;