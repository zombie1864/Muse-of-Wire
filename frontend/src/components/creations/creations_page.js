import React from 'react'; 
import ReactPlayer from 'react-player'

class CreationsPage extends React.Component {
    render() {
        return (
            <div>
                <p className = 'video-title'>Video Gallery</p>
            <div className = 'outter'>

                <div className = 'video-container'>
                    <ReactPlayer
                        className="react-player"
                        url="https://www.youtube.com/watch?v=EmMTKdUAokM"
                        width="500px"
                        height="240px"
                    />
                    
                    <ReactPlayer
                        className="react-player"
                        url="https://www.youtube.com/watch?v=PT14o5Wq7gE"
                        width="500px"
                        height="240px"
                    />
                        
                    <ReactPlayer
                        className="react-player"
                        url="https://www.youtube.com/watch?v=eVahCryUXw0"
                        width="500px"
                        height="240px"
                    />                    
                        
                    <ReactPlayer
                        className="react-player"
                        url="https://www.youtube.com/watch?v=gotEdEs0FC0"
                        width="500px"
                        height="240px"
                    />                    
                        
                    <ReactPlayer
                        className="react-player"
                        url="https://www.youtube.com/watch?v=0ymt_xfTn-8"
                        width="500px"
                        height="240px"
                    />
            </div>
                </div>
                <br></br>
                <p> Art Gallery</p>
                <img src='https://freeclassicimages.com/images/asian-art-japanese-art-0525.jpg' className = 'eastern-art'></img>
                <img src='https://freeclassicimages.com/images/alphonse_mucha_shop_greeting_card_zodiac_big.jpg' className='zodiac-art'></img>
                <img src='https://images.unsplash.com/photo-1550684848-86a5d8727436?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' className='abstract-art'></img>
                <img src='https://images.unsplash.com/photo-1576570591799-5fcbe0352ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1840&q=80' className='colonial-art'></img>
                <img src='https://images.unsplash.com/photo-1533972751724-9135a8410a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80' className='cyber-art'></img>
            </div>
        )
    }
}

export default CreationsPage
