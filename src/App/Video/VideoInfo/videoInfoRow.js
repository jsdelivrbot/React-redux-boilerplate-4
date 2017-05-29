import React from 'react'

const videoInfoRow = (key, value) => {
  return (
     <div key={key}>
        {key} :
        {value}
     </div>
  )
}

export default videoInfoRow
