import React from 'react'
import { Button } from '../Button'
import { Link } from 'react-router-dom'
import './ProdsNServsComp.css'
 
function ProdsNServsComp({
    lightBg, topLine, lightText, lightTextDesc, headline, description,
    buttonLabel, img, alt, imgStart
}) {
  return (
    <>
    <div className={lightBg ? 'prodsNServs_Section' : 'prodsNServs_Section darkBg'}
    >
        <div className='container'>
            <div className='row prodsNServs_Row'
             style={{display: 'flex', flexDirection: imgStart==='start' ? 'row-reverse' : 'row'}}>
                <div className='col'>
                    <div className='prodsNServs_TextWrapper'>
                        <div className='top_Line'>{topLine}</div>
                    
                    <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                    <p className={lightTextDesc ? 'prodsNServs_Subtitle' : 'prodsNServs_Subtitle dark'}>{description}</p>
                    <Link to="/">
                        <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                    </Link>
                    </div>
                </div>
                <div className='col'>
                    <div className='prodsNServs_ImgWrapper'>
                        <img src={img} className='prodsNServs_Img' alt={alt}></img>
                    </div>
                </div>
             </div>
        </div>
    </div>
    
    </>
  )
}

export default ProdsNServsComp