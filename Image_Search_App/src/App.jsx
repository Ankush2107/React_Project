import React, { useRef }  from 'react'
import './App.css'
import { Form } from 'react-bootstrap'
function App() {
    const searchInput = useRef(null);

    const API_URL = "https://api.unsplash.com/search/photos";

    const handleSearch = () => {
      event.preventDefault();
      console.log(searchInput);
    }

    const handleSection = (seleection) => {
      searchInput.current.value = seleection
    }

  return (
    <div className='container'>
        <h1 className='title'>Image Search</h1>
        <div className='search-section'>
            <Form onSubmit={handleSearch}>
              <Form.Control 
                type='search'
                placeholder='Type something for search...'
                className='search-input'
                ref={searchInput}
              />
            </Form>
        </div>
        <div className='filters'>
                <div onClick={() => handleSection('nature')}>Nature</div>
                <div onClick={() => handleSection('birds')}>Birds</div>
                <div onClick={() => handleSection('cats')}>Cats</div>
                <div onClick={() => handleSection('shoes')}>Shoes</div>
        </div>
    </div>
  )
}

export default App
