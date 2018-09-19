import React, {Component} from 'react';
import './App.css';
import {Form, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Profile from './Profile';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchedArtist: '',
      artistData: {},
    };
  }

  onValueChange = (e) => {
    console.log(e.target.value);
    this.setState({searchedArtist: e.target.value});
  }

  searchArtist = () => {
    console.log(this.state.searchedArtist);
    const BASE_URL=`https://api.spotify.com/v1/search`;
    const FETCH_URL = `${BASE_URL}q=${this.state.searchedArtist}&type=artist&limit=1`;
    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      console.log('json: ',json);
      this.setState({artistData: json});
    });
  }

  render(){
    return(
      <div className='App'>
        <div className='App-header'>
          <div className='App-title'>Master music player from App</div>
          <Form className='App-Form'>
            <InputGroup>
              <FormControl
                type='text'
                placeholder='Searh your artist' 
                value={this.state.searchedArtist}
                onChange={e => this.onValueChange(e)}
                onKeyPress={e => {
                  if(e.key === 'Enter'){
                    this.searchArtist();
                  }
                }}
              />
              <InputGroup.Addon 
                onClick={() => this.searchArtist()}>
                <Glyphicon glyph='search'></Glyphicon>
              </InputGroup.Addon>
            </InputGroup>
          </Form>
        </div>
        <div className='App-body'>
          <Profile artistData={this.state.artistData}/>
          <div className='artistTrackList'></div>
        </div>
      </div>

    )
  }
}

export default App;