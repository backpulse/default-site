import React from 'react';

import client from 'services/client';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            gallery: {
                photos: []
            }
        }
    }

    fetchGallery = () => {
        client.get('/galleries/home').then(response => {
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
            <div className="page home">
            </div>
        )
    }
}

export default Home;