import React from 'react'
import { THREEDOTSWHITE_SVG } from '../images/index'
export default function TrendsForYou(props) {
    const {category, content, tweets} = props;
  return (
    <div className='w-100' style={{backgroundColor: '#15181C'}}>
        
        <div style={{padding: '7px 0 15px 15px', borderBottom: '1px solid #2F3336'}}>
        <div className='d-flex justify-content-between'>
        <p className='m-0' style={{color:'#6E767D', fontSize: 13}}>{category}</p>
        <div style={{marginRight: 10}}>{THREEDOTSWHITE_SVG}</div>
        </div>
        <p className='m-0 text-white' style={{fontSize: 15}}>{content}</p>
        <p className='m-0' style={{color:'#6E767D', fontSize: 15}}>{tweets}</p>
        </div>
    </div>
  )
}
