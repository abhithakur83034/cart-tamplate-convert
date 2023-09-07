import React from 'react'
import Notfound from './component/Notfound'

const Requireaccess = (props) => {
    const user = JSON.parse(localStorage.getItem('usertoken'))
    const admin = JSON.parse(localStorage.getItem('admintoken'))

    if(user || admin){
        return <Notfound/>
    }
    

  return (
    <>
      {props.children}
    </>
  )
}

export default Requireaccess

