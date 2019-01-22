import React from 'react';

import client from 'services/client';

class Contact extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    fetchContact = () => {
        client.get('/contact').then(response => {
            const contact = response.data.payload;
            this.setState({...contact});
        }).then(err => {
            if(err) throw err;
        });
    }

    componentWillMount() {
        this.fetchContact();
    }

    render() {
        return (
            <div className="page contact">
            </div>
        )
    }
}

export default Contact;