import React from 'react';

import client from 'services/client';

import './styles.scss';

class Contact extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            address: "",
            email: "",
            facebook_url: "",
            instagram_url: "",
            twitter_url: ""
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
                <div className="contact-content">
                    <h1>{this.state.name}</h1>
                    <p className="address">{this.state.address}</p>
                    <p className="phone">{this.state.phone}</p>
                    <p className="email">{this.state.email}</p>
                    
                </div>
            </div>
        )
    }
}

export default Contact;