import React from 'react'
import './Widget.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widget() {
    const newsArticle= (heading, subtitle) =>(
        <div className='widget__article'>
            <div className='widget__articleleft'>
                <FiberManualRecordIcon/>
            </div>
            <div className='widget__articleright'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
      <div className='widget__header'> 
      <h2>Linkedin News</h2>
      <InfoIcon/>
      </div>
      {newsArticle("PAPA react",'Top News - 100055 readers')}
      {newsArticle("Hakim Is Gay",'Top News - 18546666 readers')}

    </div>
  )
}

export default Widget
