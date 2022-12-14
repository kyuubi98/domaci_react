import React from 'react';
/* import axios from 'axios'; */

class KontaktForma extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }


    resetForm() {
        this.setState({ name: '', email: '', message: '' })
    }

    render() {
        return (
            <div className="App">
                <form id="contact-form" >
                    <div className="form-group">
                        <label htmlFor="name">Ime</label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email adresa</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Poruka</label>
                        <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <div className="form-group">
                    <button type="submit" className="btn btn-primary" onClick={() => alert('Poruka je poslata. Ime: ' + this.state.name + '. Email: ' + this.state.email + ', poruka: ' + this.state.message )}> Pošalji </button>
                    </div>
                </form>
            
            </div>
        );
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }
}

export default KontaktForma;

