import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-Download' id='app-Download'>
        <p>For Better Experience Download<br/> Weddings By Achira Bimal App</p>
        <div className="app-download-platform">
            <img src={assets.play_store} alt=''/>
            <img src={assets.app_store} alt=''/>
        </div>
    </div>
  )
}

export default AppDownload