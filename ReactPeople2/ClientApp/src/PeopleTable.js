import React from "react";
import PersonForm from "./PersonForm";
import PersonRow from "./PersonRow";

class PeopleTable extends React.Component{
    state = {
        firstName: '',
        lastName: '',
        age: '',
        people: []
    }

    onFirstNameChange = e => {
        this.setState({ firstName: e.target.value });
    }

    onLastNameChange = e => {
        this.setState({ lastName: e.target.value });
    }

    onAgeChange = e => {
        this.setState({ age: e.target.value });
    }

    onAddClick = () => {
        const { people, firstName, lastName, age } = this.state;
        const person = {
            firstName,
            lastName,
            age
        }
        const peopleCopy = [...people, person];
        this.setState({ people: peopleCopy, firstName: '', lastName: '', age: '' });
    }

    onClearClick = () => {
        this.setState({ people: [] });
    }

    render(){
        return (
            <div className="container mt-5">
                <PersonForm 
                    onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick}
                    onFirstNameChange={this.onFirstNameChange}
                    onLastNameChange={this.onLastNameChange}
                    onAgeChange={this.onAgeChange}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    age={this.state.age} ></PersonForm>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>                        
                    </thead>
                    <tbody>    
                        {this.state.people.map(p => {
                            return <PersonRow 
                                firstName={p.firstName}
                                lastName={p.lastName}
                                age={p.age}></PersonRow>
                        })}                    
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PeopleTable;