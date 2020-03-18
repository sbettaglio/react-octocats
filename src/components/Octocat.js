import React, { Component } from 'react'
import OctocatCard from './OctocatCard'
import Terrocottocat from '../images/Terracottocat_Single.png'
import Fintechtocat from '../images/Fintechtocat.png'
import Adacat from '../images/Adacats.png'
import Brennatocat from '../images/Brennatocat.png'
import Filmtocat from '../images/filmtocats.png'
import Sentrytocat from '../images/Sentrytocat_octodex.jpg'
import Umbrellatocat from '../images/puddle_jumper_octodex.jpg'
import Boxertocat from '../images/boxertocat_octodex.jpg'
import Surftocat from '../images/surftocat.png'
import Hulatocat from '../images/hula_loop_octodex03.gif'
import Scubatocat from '../images/scubatocat.png'
import Vinyltocat from '../images/vinyltocat.png'
import Tentocats from '../images/tentocats.jpg'
import Snowtocat from '../images/snowtocat_final.jpg'
import Justicetocat from '../images/justicetocat.jpg'
import Blacktocats from '../images/blacktocats.png'
import logo from '../images/chubmo.jpeg'

export class Octocat extends Component {
  render() {
    const octocats = [
      { name: '149: Terrocottocat', url: Terrocottocat, artistLogo: logo },
      { name: '147: Adacat', url: Adacat, artistLogo: logo },
      { name: '146: Fintechtocat', url: Fintechtocat, artistLogo: logo },
      { name: '145: Brennatocat', url: Brennatocat, artistLogo: logo },
      { name: '144: Filmtocats', url: Filmtocat, artistLogo: logo },
      { name: '143: Sentrytocat', url: Sentrytocat, artistLogo: logo },
      { name: '142: Umbrellatocat', url: Umbrellatocat, artistLogo: logo },
      { name: '141: Boxertocat', url: Boxertocat, artistLogo: logo },
      { name: '140: Surftocat', url: Surftocat, artistLogo: logo },
      { name: '139: Hulatocat', url: Hulatocat, artistLogo: logo },
      { name: '138: Scubatocat', url: Scubatocat, artistLogo: logo },
      { name: '137: Vinyltocat', url: Vinyltocat, artistLogo: logo },
      { name: '136: Tentocats', url: Tentocats, artistLogo: logo },
      { name: '135: Snowtocat', url: Snowtocat, artistLogo: logo },
      { name: '134: Justicetocat', url: Justicetocat, artistLogo: logo },
      { name: '133: Blacktocats', url: Blacktocats, artistLogo: logo },
    ]
    return (
      <>
        {octocats.map(cat => {
          return (
            <OctocatCard
              imageUrl={cat.url}
              name={cat.name}
              logo={cat.artistLogo}
            />
          )
        })}
      </>
    )
  }
}

export default Octocat
