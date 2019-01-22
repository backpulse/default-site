import React from 'react';

import './styles.scss';

import {Link} from 'react-router-dom';

class GalleryBox extends React.Component {
    render() {
        return (
            <Link to={"/gallery/" + this.props.gallery.short_id}>
                <div className="gallery-box">
                    <img src={this.props.gallery.photos[0].url}/>
                </div>
            </Link>
        )
    }
}

export default GalleryBox;