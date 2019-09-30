import React from 'react';

class AddTodo extends React.Component{
    state = {
        title: ''
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ''
        });
    }
    render(){
        return(
            <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                <input 
                    style={{flex: '10', padding: '5px'}}
                    type="text" 
                    value={this.state.title}
                    name="title" 
                    placeholder="Add to-do item..."
                    autoComplete="off"
                    onChange={this.onChange}/>
                <input 
                    type="submit" 
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}/>    
            </form>
        )
    }
}

export default AddTodo;