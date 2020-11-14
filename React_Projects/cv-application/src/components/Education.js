import { render } from "@testing-library/react";
import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            degree: '',
            school: '',
            major: '',
            startM: '',
            startY: '',
            endM: '',
            endY: '',
            editShow: 'none',
            displayShow: 'flex',
            education: [{id: 'ed0', start:"08/2016", end:"05/2020", degree:"Bachelor of Science", school:"University of Metropolis", major:"Journalism"}],
        };
    }

    editOrDisplay = (e) => {
        e.preventDefault();
        this.setState({
            editShow: this.state.displayShow,
            displayShow: this.state.editShow,
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
            degree: '',
            school: '',
            major: '',
            startM: '',
            startY: '',
            endM: '',
            endY: '',
            education: this.state.education.concat({
                id: 'ed' + this.state.education.length,
                start: this.state.startM + '/' + this.state.startY,
                end: this.state.endM + '/' + this.state.endY,
                degree: this.state.degree,
                school: this.state.school,
                major: this.state.major
            }),
            editShow: this.state.displayShow,
            displayShow: this.state.editShow,
        });
    }

    handleRemove = itemID => {
        const newList = this.state.education.filter((item) => itemID != item.id);
        this.setState({
            education: newList,
        });
    }

    render() {
        const { editShow, displayShow, education, degree, school, major, startM, startY, endM, endY, } = this.state;

        return (
            <div id="education">
                <div id="education-edit" style={{display: editShow}}>
                    <form id="education-form" onSubmit={this.onAdd}>
                        <label htmlFor="degree">Degree/Diploma: </label>
                        <select id="degree" name="degree" onChange={this.handleChange}>
                            <option value="High School Diploma/GED">High School Diploma/GED</option>
                            <option value="Associates Degree">Associates Degree</option>
                            <option value="Bachelor of Science">Bachelor of Science</option>
                            <option value="Bachelor of Arts">Bachelor of Arts</option>
                            <option value="Master of Science">Master of Science</option>
                            <option value="Phd">Phd</option>
                        </select>
                        <br></br>
                        <label htmlFor="school">School: </label>
                        <input type="text" id="school" name="school" placeholder="Enter School Name..." className="textboxes" onChange={this.handleChange} value={school}></input>
                        <br></br>
                        <label htmlFor="major">Major: </label>
                        <input type="text" id="major" name="major" placeholder="Enter Major..." className="textboxes" onChange={this.handleChange} value={major}></input>
                        <br></br>
                        <label htmlFor="school-start">Start Date: </label>
                        <div id="school-start" style={{display: 'flex', flexDirection: "row"}}>
                            <input type="text" id="start-month" name="startM" placeholder="MM" onChange={this.handleChange} value={startM}></input>
                            <p id="education-date-split">/</p>
                            <input type="text" id="start-year" name="startY" placeholder="YYYY" onChange={this.handleChange} value={startY}></input>
                        </div>
                        <br></br>
                        <label htmlFor="school-end">Graduation Date (Expected if not yet graduated): </label>
                        <div id="school-end" style={{display: 'flex', flexDirection: "row"}}>
                            <input type="text" id="end-month" name="endM" placeholder="MM" onChange={this.handleChange} value={endM}></input>
                            <p id="education-date-split">/</p>
                            <input type="text" id="end-year" name="endY" placeholder="YYYY" onChange={this.handleChange} value={endY}></input>
                        </div>
                        <br></br>
                        <button type="submit" className='buttons'>Add Education</button>
                        <button className='buttons' id='education-cancel' onClick={this.editOrDisplay}>Cancel</button>
                    </form>
                        
                </div>
                <div id="education-display" style={{display: displayShow, flexDirection: 'column'}}>
                    {education.map((val, idx) => {
                        return (
                            <div className="education-item" key={'ed' + idx} id={'ed' + idx}>
                                <div className="education-info">
                                    <div className='school-info' style={{display: 'flex'}}>
                                        <h4 className="school-name">{val.school}</h4>
                                        <p className="school-dates">{val.start} - {val.end}</p>
                                    </div>
                                    <p className="degree-info">{val.degree} in {val.major}</p>
                                </div>
                                <button className="buttons" id='education-del-button' onClick={() => this.handleRemove('ed' + idx)}>Delete Item</button>
                            </div>
                        )
                    })}
                    <div id="education-add">
                        <button className="buttons" id='education-add-button' onClick={this.editOrDisplay}>Add Education</button>
                    </div>
                </div>
            </div>
        );
    }
    
};


export default Education;