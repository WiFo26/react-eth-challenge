import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import NavBar from '../components/NavBar';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Academic from '../components/Academic';
import Interest from '../components/Interest';
import Language from '../components/Language';
import '../styles/components/App.styl';
import getData from '../utils/getData';

const API_URL = 'https://raw.githubusercontent.com/WiFo26/react-eth-challenge/main/data.json'

const App = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    getData(API_URL)
      .then(response => setData(response.data))
  }, [])

  return (
    <>
      <NavBar />
      <Header
        avatar={data.avatar}
        fullname={data.name}
      >
        <About
          address={data.address}
          email={data.email}
          github={data.github}
          linkedin={data.linkedin}
          phone={data.phone}
          profession={data.profession}
          website={data.website}
        />
      </Header>
      <Profile
        description={data.description}
      />
      <Skills
        skills={data.skills}
      />
      <Experience
        experiences={data.experience}
      />
      <Academic
        academics={data.academic}
      />
      <Interest
        interests={data.interest}
      />
      <Language
        languages={data.languages}
      />
    </>
  )
  // return (
  //   <>
  //     <Header>
  //       <About />
  //     </Header>
  //     <Profile />
  //     <Experience />
  //     <Academic />
  //     <Skills />
  //     <Interest />
  //     <Languages />
  //   </>
  // )
};

export default App;
