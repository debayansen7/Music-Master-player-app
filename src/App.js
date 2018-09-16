import React, {Component} from 'react';
import './App.css';
import {Form, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchedArtist: '',
    };
  }

  onValueChange = (e) => {
    console.log(e.target.value);
    this.setState({searchedArtist: e.target.value});
  }

  searchArtist = () => {

  }

  render(){
    return(
      <div className='App'>
        <div className='App-header'>
          <div className='App-title'>Master music player from App</div>
          <Form className='App-Form'>
            <InputGroup>
              <FormControl placeholder='Searh your artist' onChange={(e) => this.onValueChange(e)}/>
              <InputGroup.Addon>
                <Glyphicon glyph='search' onClick={this.searchArtist}></Glyphicon>
              </InputGroup.Addon>
            </InputGroup>
          </Form>
        </div>
        <div className='App-body'>
          <div className='artistProfile'>
            <div className='artistPicture'>picture</div>
            <div className='artistname'>name</div>
          </div>
          <div className='artistTrackList'></div>
        </div>
      </div>

    )
  }
}

export default App;