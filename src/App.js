import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';
import HomePage from './components/home-page.component';

import UsersList from './components/user-list.component';

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br />
        <Route path='/' exact component={HomePage} />
        <Route path='/exercises' exact component={ExercisesList} />
        <Route path='/exercises/edit/:id' exact component={EditExercise} />
        <Route path='/exercises/add' exact component={CreateExercise} />
        <Route path='/users/add' exact component={CreateUser} />
        <Route path='/users' exact component={UsersList} />
      </div>
    </Router>
  );
}

export default App;
