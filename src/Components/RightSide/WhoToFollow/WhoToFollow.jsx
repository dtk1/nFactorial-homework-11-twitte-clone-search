import React from 'react'
import NFACTORIAL_PNG from '../../CentralSide/images/nFactorial.png'
import { ABSTRACT_SVG, GENERICPERSON_SVG, GROUP_SVG } from '../images'
export default function WhoToFollow() {
  return (
    <div className="mt-4" style={{borderRadius: '25px 25px 0 0', backgroundColor:'#15181C'}}>
      <p style={{fontSize: 16, color:'white', padding: '20px 29px 26px 23px'}}>Who to Follow</p>
      <div className='w-100 d-flex flex-row align-items-center justify-content-around'> 
      <div>
     {ABSTRACT_SVG}
      </div>
      <div>

      <p style={{color:'white', margin: 0, fontSize: 17}}>HistoryEnthusiast</p>
     <p style={{color:'gray', margin: 0,  fontSize: 17}}>@HistoryEnthusiast</p>

      </div>
      <div>
        <button style={{border:'none', borderRadius: 25, padding:'5px 15px', fontWeight: 'bold'}}>Follow</button>
      </div>
      </div>
      <div className='w-100 d-flex flex-row align-items-center justify-content-around mt-3 pb-4'> 
      <div>
     {GENERICPERSON_SVG}
      </div>
      <div>

      <p style={{color:'white', margin: 0, fontSize: 17}}>PhylosophyGuru{GROUP_SVG}</p>
     <p style={{color:'gray', margin: 0,  fontSize: 17}}>@PhylosophyGuru</p>

      </div>
      <div>
        <button style={{border:'none', borderRadius: 25, padding:'5px 15px', fontWeight: 'bold'}}>Follow</button>
      </div>
      </div>
    </div>

  )
}
