import React from 'react';


class PersonForm extends React.Component {
    
    render(){
        const {onAddClick, onClearClick, onFirstNameChange, onLastNameChange, onAgeChange, firstName, lastName, age} = this.props;

        return(
                <div className='jumbotron row'>
                    <div className='col md-3'>
                        <input placeholder='First Name' value={firstName} className='form-control' onChange={onFirstNameChange}></input>
                    </div>
                    <div className='col md-3'>
                        <input placeholder='Last Name' value={lastName} className='form-control' onChange={onLastNameChange}></input>
                    </div>
                    <div className='col md-3'>
                        <input placeholder='Age' value={age} className='form-control' onChange={onAgeChange}></input>
                    </div>
                    <div className='col md-3'>
                        <button className='btn btn-primary' onClick={onAddClick}>Add</button>
                        <button className='btn btn-warning ml-3' onClick={onClearClick}>Clear All</button>
                    </div>
                </div>                      
        )
    }
}

export default PersonForm;