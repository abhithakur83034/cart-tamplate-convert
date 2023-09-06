import React from 'react'
import Notfound from './component/Notfound'

const Requireauth = (props) => {
    const user = JSON.parse(localStorage.getItem('usertoken'))
    const admin = JSON.parse(localStorage.getItem('admintoken'))

    if(!user && !admin){
        return <Notfound/>
    }

  return (
    <>
      {props.children}
    </>
  )
}

export default Requireauth