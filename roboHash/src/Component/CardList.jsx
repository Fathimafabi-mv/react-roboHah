import React from 'react'

const CardList = ({filter}) => {
  return (
    <div>
       <div className='card-list'>
      {filter.map((data)=>(
        <div className='card-container'>
          <h1>{data.name}</h1>
          <img alt="" src={`https://robohash.org/${data.id}1?set=set4`}/>
        </div>
      ))}
     </div>

    </div>
  )
}

export default CardList