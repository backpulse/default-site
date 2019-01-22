import React from 'react';

import client from 'services/client';

import './styles.scss';

class About extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            descriptions: [
                {
                    content: ""
                }
            ]
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
                <div className="about-content">
                    <h1>{this.state.name}</h1>
                    {this.state.descriptions[0].content.split('\n').map((block, i) => {
                        return (
                            <p key={i}>{block}</p>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}

export default About;