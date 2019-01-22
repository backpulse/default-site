import React from 'react';

import client from 'services/client';

class Gallery extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            gallery: null
        }
    }

    fetchGallery = () => {
        client.get('/gallery/' + this.props.match.params.id).then(response => {
            const gallery = response.data.payload;
            this.setState({gallery});
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
            </div>
        )
    }
}

export default Gallery;