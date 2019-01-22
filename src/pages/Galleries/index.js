import React from 'react';

import client from 'services/client';

class Galleries extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            galleries: []
        }
    }

    fetchGalleries = () => {
        client.get('/galleries').then(response => {
            const galleries = response.data.payload;
            this.setState({galleries});
        }).then(err => {
            if(err) throw err;
        });
    }

    componentWillMount() {
        this.fetchGalleries();
    }

    render() {
        return (
            <div className="page galleries">
            </div>
        )
    }
}

export default Galleries;