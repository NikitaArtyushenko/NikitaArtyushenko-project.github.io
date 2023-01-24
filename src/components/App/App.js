import { Component } from 'react'
import Helmet from "react-helmet"
import Navbar from './../Nav/navbar'
import Header from './../Head/header'
import Comps from './../Comps/Comps'
import Support from './../Support/Support'
import Expert from './../Expert/Expert'
import Tarrifs from './../Tariffs/Tariff'
import Case from './../Cases/Cases'
import Team from './../Squad/Squad'
import Feed from './../Feedback/Feedback'
import Partners from './../Partners/Partners'
import FAQ from './../FAQ/FAQ'
import Foot from './../Footer/Footer'
import './style.css'

class App extends Component { 

  render(){
    return (
      <div>

        <Helmet
        title='Drupal Coder - web development on drupal'
        meta={[
          {"name": "content", 'content': 'width=device-width, initial-scale=1.0'}
        ]}
        link={[
          {"rel": "preconnect", "href": "https://fonts.gstatic.com/"},
          {"rel": "stylesheet", "href": "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"},
          {"rel": "stylesheet", "type": "text/css", "href": "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"},
          {"rel": "stylesheet", "type": "text/css", "href": "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"},

          {"rel": "stylesheet", "href": "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"}
        ]}
        />
      

      <div id='main'>
      <Navbar />
      <div id="react-block"></div>
      <Header />
      <Comps />
      <Support /><br /><br /><br /><br /><br />
      <Expert />
      <Tarrifs />
      <Case />
      <Team />
      <Feed />
      <Partners />
      <FAQ />
      <Foot />
      </div>
      </div>
);
  }
  
}

export default App;
