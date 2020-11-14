import React, { Component } from "react";
import uniqid from "uniqid";

class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            skill: '',
            skills: [{id: 'sk0', skill: 'Can lift a car'},],
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
            skill: '',
            skills: this.state.skills.concat({
                skill: this.state.skill,
                id: 'sk' + this.state.skills.length,
            }),
            showEdit: this.state.showDisplay,
            showDisplay: this.state.showEdit,
        });
    }

    handleRemove = itemID => {
        const newList = this.state.skills.filter((item) => itemID != item.id);
        this.setState({
            skills: newList,
        });
    }

    render() {
        const { skill, skills, showDisplay, showEdit } = this.state;

        return (
            <div id="skills">
                <div id='skills-form' style={{display: showEdit}}>
                    <form id='skills-form' onSubmit={this.onAdd}>
                        <input type='text' id='skill-box' name='skill' onChange={this.handleChange} value={skill} placeholder='Enter Skill...'></input>
                        <button type='submit' id='skill-add-button'>Add Skill</button>
                        <button id='skill-cancel'>Cancel</button>
                    </form>
                </div>
                <div id='skills-display' style={{display: showDisplay, flexDirection: 'column'}}>
                    <ul id='skill-ul'>
                        {skills.map((val, idx) => {
                            return (
                                <div className="skill-item" key={'sk' + idx} id={'sk' + idx} style={{display: 'flex', flexDirection: 'row'}}>
                                    <li key={'sk' + idx} className='skills-list'>{val.skill}</li>
                                    <button className="buttons" id='skills-del-button' onClick={() => this.handleRemove('sk' + idx)}>x</button>
                                </div>
                            )
                        })}
                    </ul>
                    <div id="education-add">
                        <button className="buttons" id='skills-add-button' onClick={this.editOrDisplay}>Add Skill</button>
                    </div>
                </div>
            </div>
        );
    }
    
};

export default Skills;