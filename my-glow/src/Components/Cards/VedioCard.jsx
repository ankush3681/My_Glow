import React from 'react'

const VedioCard = ({srcs}) => {
  return (
    <div style={{display:'flex'}}>
      <video style={{borderRadius:'20px'}} src={srcs}  width="320" height="240" controls autoPlay muted loop />
   </div>
  )
}

export default VedioCard

