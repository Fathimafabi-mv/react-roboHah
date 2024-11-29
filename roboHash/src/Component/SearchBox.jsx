import React from 'react'

const SearchBox = ({searchFunction,classname,placeHolder}) => {
  return (
    <div>
    <input
    type="search"
     placeholder={placeHolder}
     className={classname}
     onChange={searchFunction}/>

    </div>
  )
}

export default SearchBox