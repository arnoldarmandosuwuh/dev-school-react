import React, { Component } from 'react'
import '../App.css'
import Form from '../components/Redux/Form/Form'
import List from '../components/Redux/List/List'
import NotesList from '../components/Redux/List/NotesList'
import { Provider } from 'react-redux'
import store from '../store'

class ReduxCourse extends Component {

    render() {
        return (
            <Provider store={store}>
            <div className="App container">
                <Form/>
                <List/>
                <NotesList/>        
            </div>
            </Provider>
        );
    }
}

export default ReduxCourse