import {useGlobalContext} from '../context'
import {useState} from 'react'

const Search = () =>{
  const {setSearchTerm,fetchRandomMeal} = useGlobalContext();

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text) {
      setSearchTerm(text)
      // setText('') 
    }
  }

  const handleRandomMeal = () => {
    setSearchTerm("")
    setText('')
    fetchRandomMeal()
  }
  
  return <header className="search-container">
    <form onSubmit={handleSubmit}>
      <input className="form-input" type="text" placeholder="Your favorite meal" onChange={handleChange} value={text}/>
      <button className="btn" type="submit">Search</button>
      <button className="btn btn-hipster" type="btn" onClick={handleRandomMeal}>Surprise me!</button>
    </form>
  </header>
}
export default Search