import React from 'react'; 
import ReactPlayer from 'react-player'

class StudentsCreationsPage extends React.Component {
    render() {
        return (
            <div>
                <p>Video Gallery</p>
                    <ReactPlayer
                        className="react-player"
                        url="https://www.youtube.com/watch?v=EmMTKdUAokM"
                        width="520px"
                        height="260px"
                        />
                    
                        <ReactPlayer
                        className="react-player"
                        url="https://www.youtube.com/watch?v=PT14o5Wq7gE"
                        width="520px"
                        height="260px"
                        />
                        
                        <ReactPlayer
                        className="react-player"
                        url="https://www.youtube.com/watch?v=eVahCryUXw0"
                        width="520px"
                        height="260px"
                        />                    
                        
                        <ReactPlayer
                        className="react-player"
                        url="https://www.youtube.com/watch?v=gotEdEs0FC0"
                        width="520px"
                        height="260px"
                        />                    
                <p> Art Gallery</p>
                    <img src='https://freeclassicimages.com/images/asian-art-japanese-art-0525.jpg' ></img>
                    <img src='https://freeclassicimages.com/images/alphonse_mucha_shop_greeting_card_zodiac_big.jpg'></img>
                    <img src='https://images.unsplash.com/photo-1550684848-86a5d8727436?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'></img>
                    <img src='https://images.unsplash.com/photo-1576570591799-5fcbe0352ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1840&q=80'></img>
            </div>
        )
    }
}

export default StudentsCreationsPage
