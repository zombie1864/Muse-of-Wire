import React from 'react';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';

class MainSplashPage extends React.Component {

  render() {
    return(
      <div>
        <div className = 'home-page-title'>Muse of Wire</div>
        <p>
          Keeping people plugged-in to the Arts
        </p>
          <Link to='/hello'>    
          <img src='https://images.pexels.com/photos/1781710/pexels-photo-1781710.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' width = '630' height = '420'/>
          </Link>
                <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=2LNiJK3rK9s'
                width='720px'
                height='460px'
                />

      </div>
    )
  }

}

export default MainSplashPage;