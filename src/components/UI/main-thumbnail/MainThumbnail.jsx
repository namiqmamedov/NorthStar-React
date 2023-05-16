import React from 'react'
import '../../../styles/discover.css'
import {NavLink, Link} from 'react-router-dom'


const mainData = [
    {
        title: 'PEACE OF MIND',
        desc: 'A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.'
    }, 
    {
        title: 'Buy 2 Get 1 Free',
        desc: 'End of season sale. Buy any 2 items of your choice and get 1 free.'
    }
]

const MainThumbnail = () => {
  return (
        <>
        {mainData.map((item,index) => (
          <div className="main__card" key={index}>
          <div className="main__body">
              <h2 className="main-title">
                  {item.title}
              </h2>
              <p className='description'>{item.desc}</p>
              <Link className='main-btn'>
                  BUY NOW
              </Link>
          </div>
          </div>
        ))}
        </>
  )
}

export default MainThumbnail