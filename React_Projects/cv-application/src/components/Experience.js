import React, { Component } from "react";

class Experience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employer: '',
            title: '',
            locationCity: '',
            locationState: '',
            locationCountry: '',
            startM: '',
            startY: '',
            endM: '',
            endY: '',
            check: 'unchecked',
            description: '',
            jobs: [{id: 'job0', employer: 'Daily Planet', title: 'Senior Reporter', location: 'Metropolis, NY', start: '06/1938', end: 'Current', 
                    description: '- Reported major news stories regarding rising crime in the city of Metropolis\n- Took exclusive pictures of Superman for the Daily Planet'},],
            showEdit: 'none',
            showDisplay: 'flex',
        }
    }

    editOrDisplay = (e) => {
        e.preventDefault();
        this.setState({
            showEdit: this.state.showDisplay,
            showDisplay: this.state.showEdit,
        });
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onAdd = (e) => {
        e.preventDefault();
        this.setState({
            employer: '',
            title: '',
            locationCity: '',
            locationState: '',
            locationCountry: '',
            startM: '',
            startY: '',
            endM: '',
            endY: '',
            check: 'unchecked',
            description: '',
            jobs: this.state.jobs.concat({
                id: 'job' + this.state.jobs.length,
                start: this.state.startM + '/' + this.state.startY,
                end: (this.state.check == 'checked') ? 'Current' : this.state.endM + '/' + this.state.endY,
                employer: this.state.employer,
                title: this.state.title,
                location:  this.state.locationCity + ', ' + this.state.locationState + ', ' + this.state.locationCountry, 
                description: this.state.description,
            }),
            showEdit: this.state.showDisplay,
            showDisplay: this.state.showEdit,
        });
    }

    handleRemove = itemID => {
        const newList = this.state.jobs.filter((item) => itemID != item.id);
        this.setState({
            jobs: newList,
        });
    }


    render() {
        const { employer, title, locationCity, locationState, locationCountry, startM, startY, endM, endY, description, showEdit, showDisplay, jobs, } = this.state;

        return (
            <div id="experience">
                <div id='experience-edit' style={{display: showEdit}}>
                    <form id='experience-form' onSubmit={this.onAdd}>
                        <input type="text" id="employer" name="employer" placeholder="Enter Employer..." className="textboxes" onChange={this.handleChange} value={employer}></input>
                        <br></br>
                        <input type="text" id="title" name="title" placeholder="Enter Title..." className="textboxes" onChange={this.handleChange} value={title}></input>
                        <br></br>
                        <div id="location" style={{display: 'flex', flexDirection: 'row'}}>
                            <input type="text" id="location-city" name="locationCity" placeholder="City..." className="textboxes" onChange={this.handleChange} value={locationCity}></input>
                            <input type="text" id="location-state" name="locationState" placeholder="State/Province..." className="textboxes" onChange={this.handleChange} value={locationState}></input>
                            <input type="text" id="location-country" name="locationCountry" placeholder="Country..." className="textboxes" onChange={this.handleChange} value={locationCountry}></input>
                        </div>
                        <br></br>
                        <label htmlFor="work-start">Start Date: </label>
                        <div id="work-start" style={{display: 'flex', flexDirection: "row"}}>
                            <input type="text" id="start-month" name="startM" placeholder="MM" onChange={this.handleChange} value={startM}></input>
                            <p id="experience-date-split">/</p>
                            <input type="text" id="start-year" name="startY" placeholder="YYYY" onChange={this.handleChange} value={startY}></input>
                        </div>
                        <br></br>
                        <label htmlFor="work-end">End Date: </label>
                        <div id="work-end" style={{display: 'flex', flexDirection: "row"}}>
                            <input type="text" id="end-month" name="endM" placeholder="MM" onChange={this.handleChange} value={endM}></input>
                            <p id="experience-date-split">/</p>
                            <input type="text" id="end-year" name="endY" placeholder="YYYY" onChange={this.handleChange} value={endY}></input>
                            <label htmlFor='end-month-check'>Current: </label>
                            <input type='checkbox' id='end-month-check' name='check' value='checked' onChange={this.handleChange}></input>
                        </div>
                        <br></br>
                        <textarea type="text" id="description" name="description" placeholder="Description" className="textareas" onChange={this.handleChange} value={description}></textarea>
                        <br></br>
                        <button type="submit" className='buttons'>Add Experience</button>
                        <button className='buttons' id='experience-cancel' onClick={this.editOrDisplay}>Cancel</button>
                    </form>
                </div>
                <div id='experience-display'>
                    {jobs.map((val, idx) => {
                        return (
                            <div className="experience-item" key={'job' + idx} id={'job' + idx}>
                                <div className="experience-info" style={{display: 'flex', flexDirection: 'row'}}>
                                    <h4>{val.title}, {val.employer} - </h4>
                                    <p className='experience-location-display'>{val.location}</p>
                                    <p className='experience-date-display'>{val.start} - {val.end}</p>
                                </div>
                                <p style={{whiteSpace: 'pre-wrap', marginTop: '-20px'}}>{val.description}</p>
                                <button className="buttons" id='education-del-button' onClick={() => this.handleRemove('job' + idx)}>Delete Item</button>
                            </div>
                        )
                    })}
                    <div id="education-add">
                        <button className="buttons" id='experience-add-button' onClick={this.editOrDisplay}>Add Experience</button>
                    </div>
                </div>
            </div>
        );
    }
    
};

export default Experience;