import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import leftangle from '../img/left-angle.png';

let sopno = "sopno";



const api_url = `https://barikoi.xyz/v1/api/search/autocomplete/MzE0NDo1MldXU0pZSE9Q/place?q=${sopno}`;


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DetailsLoaded: false
    };
  }
  componentDidMount() {
    fetch(api_url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }
  
  render() {
    const top100Films = []
    return (
      <div className='search-section'>
        <div className='brand-name'>
          <a href='/'>
            <span className='dark-text'>Bari</span><span>Koi</span>
          </a>
          <span className='brand-arrow'>
            <img src={leftangle} alt="left angle" />
          </span>
        </div>
        <div>{console.log(this.state.items.places)}</div>
        <Autocomplete
          className='auto-complete'
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Search Here" />}
        />
      </div>
    )
  }
}
export default Search;