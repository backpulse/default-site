import React from 'react';

import client from 'services/client';

import GalleryBox from 'components/GalleryBox';

import './styles.scss';

import strings from 'strings';

class Galleries extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            galleries: []
        }
    }

    fetchGalleries = () => {
        client.get('/galleries').then(response => {
            const galleries = response.data.payload || [];
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
                <div className="galleries-container">
                    <h1>
                        {strings.MENU_GALLERIES}
                    </h1>
                    {this.state.galleries.map((gallery, i) => (
                        <GalleryBox gallery={gallery} key={i}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Galleries;