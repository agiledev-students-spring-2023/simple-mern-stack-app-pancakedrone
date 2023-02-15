import axios from 'axios'
import { useEffect, useState } from 'react'

const About = props => {
  const [texts, setText] = useState([])
    const fetchAbout = () => {
        axios
          .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
          .then(response => {
            const text = response.data.text
            setText(text)
          })
          .catch(err => {
            console.log(err);
          })
    }

    useEffect (() => {
      fetchAbout()
    })


    return (
      <>
          <p>{texts}</p>
      </>
    )
  }

export default About