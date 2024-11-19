import React from 'react'
export default function MenuItem({item}) {
  return (
    <div>
        <div className='d-flex mb-4 align-items-center' style={{width:'275px' ,height:'47px'}}>
        <div style={{margin: 0}}>
        {item.icon}
        </div>
        <p style={{color:'white', marginLeft: 20, marginBottom: 0, fontSize: 19, fontWeight: 'bold'}}>{item.name}</p>
        </div>
        </div>
  )
}
