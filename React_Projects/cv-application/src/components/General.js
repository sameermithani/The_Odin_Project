import React, { Component } from "react";

class General extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: "Clark Kent",
            address: "1234 DC Ave. | Metropolis, NY 98765",
            phone: "(123) 456-7890",
            email: "clark.kent@fakeemail.com",
            summary: "Excellent journalist with over 10 years of journalism experience. Totally does not do anything super in his free time...",
            editShow: 'none',
            contentShow: 'flex',
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    saveOrEdit = (e) => {
        e.preventDefault();
        this.setState({
            editShow: this.state.contentShow,
            contentShow: this.state.editShow,
        });
    }

    clearAll = (e) => {
        this.setState({
            name: "",
            address: "",
            phone: "",
            email: "",
            summary: "",
        });
    }

    render() {
        const { name, address, phone, email, summary, editShow, contentShow } = this.state;

        return (
            <div id="general">
                <div id="general-edit" style={{display: editShow, flexDirection: 'column'}}>
                    <form id="general-form" onSubmit={this.saveOrEdit}>
                        <input id="general-name" type="text" name="name" value={name} className="textboxes" onChange={this.handleChange} placeholder="Name..."></input>
                        <input id="general-address" type="text" name="address" value={address} className="textboxes" onChange={this.handleChange} placeholder="Address..."></input>
                        <input id="general-phone" type="text" name="phone" value={phone} className="textboxes" onChange={this.handleChange} placeholder="Phone Number..."></input>
                        <input id="general-email" type="text" name="email" value={email} className="textboxes" onChange={this.handleChange} placeholder="Email..."></input>
                        <h3>Summary</h3>
                        <hr className='h-line'></hr>
                        <textarea id="general-summary" type="text" name="summary" value={summary} className="textareas" onChange={this.handleChange} placeholder="Describe yourself..."></textarea>
                        <br></br>
                        <button type="submit" id="general-submit" className="buttons">Save Changes</button>
                    </form>
                    <button id="general-clear" className="buttons" onClick={this.clearAll}>Clear All Fields</button>
                </div>
                <div id="general-display" style={{display: contentShow, flexDirection: 'column'}}>
                    <h2 id="name-heading">{name}</h2>
                    <p id="address-text">{address}</p>
                    <p id="phone-email-text">{phone} | {email}</p>
                    <h3>Summary</h3>
                    <hr className='h-line'></hr>
                    <p id="summary-text" >{summary}</p>
                    <button className="buttons" onClick={this.saveOrEdit}>Edit General Section</button>
                </div>
            </div>
        );   
    }
    
};

export default General;

