import { useState, useEffect } from 'react'
import './About.css'
import axios from 'axios'


/**
 * A React component that represents one Message in the list of messages.
 * @param {*} param0 an object holding any props and a few function definitions passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  const [error, setError] = useState('')
  const [Image, setImage] = useState('')
  const [text, setText] = useState('')

  const fetchAbout = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
      .then(response => {
        const text = response.data.txt
        const imageUrl = response.data.img
        setText(text)
        setImage(imageUrl)
      })
      .catch(err => {
        setError(err)
      })
  }

  useEffect(() => {
    fetchAbout()
  }, []) 

  return (
    <>
      <h1>About Me</h1>
      <img src={Image} alt='' style={{maxHeight:"250px", width:"auto"}}/>
      <p>
        {text}
      </p>

    </>
  )
}

export default About