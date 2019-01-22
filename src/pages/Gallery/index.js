import React from 'react';

import client from 'services/client';

import './styles.scss';

import PhotoBox from 'components/PhotoBox';

class Gallery extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            photos: []
        }
    }

    fetchGallery = () => {
        client.get('/gallery/' + this.props.match.params.id).then(response => {
            const gallery = response.data.payload;
            gallery.photos = gallery.photos || [];
            this.setState({...gallery});
        }).then(err => {
            if(err) throw err;
        });
    }

    componentWillMount() {
        this.fetchGallery();
    }

    render() {
        return (
            <div className="page gallery">
                <div className="photos-container">
                    <h1>{this.state.title}</h1>
                    {this.state.photos.map((photo, i) => (
                        <PhotoBox photo={photo} key={i}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Gallery;