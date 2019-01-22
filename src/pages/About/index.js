import React from 'react';

import client from 'services/client';

class About extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    fetchAbout = () => {
        client.get('/about').then(response => {
            const about = response.data.payload;
            this.setState({...about});
        }).then(err => {
            if(err) throw err;
        });
    }

    componentWillMount() {
        this.fetchAbout();
    }

    render() {
        return (
            <div className="page about">
            about
            </div>
        )
    }
}

export default About;