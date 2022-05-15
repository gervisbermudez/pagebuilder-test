import type { NextPage } from 'next'
import SettingsPanel from '../components/SettingsPanel/SettingsPanel'
import Toolbox from '../components/Toolbox/Toolbox'
import Topbar from '../components/Topbar/Topbar'

const Home: NextPage = () => {
  return (
    <div className='home'>
      <Topbar />
      <div className='editor-container'>
        <Toolbox></Toolbox>
        <div className='editor-content'>
          content
        </div>
        <SettingsPanel></SettingsPanel>
      </div>
    </div>
  )
}

export default Home
