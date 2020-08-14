import React from 'react'; 
import ReactPlayer from 'react-player'

class CreationsPage extends React.Component {
    constructor(props) {
        super(props)
        this.renderModal = this.renderModal.bind(this);
    }

    componentDidMount() {
        this.renderModal();
    }

    renderModal() {
        const modal = document.getElementById('imgModal');
        const images = document.getElementsByClassName('images');
        const modalImg = document.getElementById("modal-image");

        for (let i = 0; i < images.length; i++) {
            const img = images[i];
            img.onclick = function (e) {
                console.log(e);
                modal.style.display = "block";
                modalImg.src = this.src;

                document.body.style.overflow = "hidden";
                document.body.style.height = "100%";
            }
        }

        const span = document.getElementsByClassName("close")[0];

        span.onclick = function () {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
            document.body.style.height = "auto";
        }

        modalImg.onclick = function () {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
            document.body.style.height = "auto";
        }
    }

    render() {
        return (
            <div>
                <p className = 'video-title'>Video Gallery</p>

                <div id="slider">
                    <input type="radio" name="slider" id="slide1" checked/>
                    <input type="radio" name="slider" id="slide2" checked/>
                    <input type="radio" name="slider" id="slide3" checked/>
                    <input type="radio" name="slider" id="slide4" checked/>
                    <div id="slides">
                        <div id="overflow">
                            <div class="inner">
                                <div class="slide slide_1">
                                <div class="slide-content">
                                        <ReactPlayer
                                            className="react-player"
                                            url="https://www.youtube.com/watch?v=EmMTKdUAokM"
                                            width="850px"
                                            height="400px"
                                        />
                                </div>
                                </div>
                                <div class="slide slide_2">
                                <div class="slide-content">
                                        <ReactPlayer
                                            className="react-player"
                                            url="https://www.youtube.com/watch?v=PT14o5Wq7gE"
                                            width="850px"
                                            height="400px"
                                        />
                                </div>
                                </div>
                                <div class="slide slide_3">
                                <div class="slide-content">
                                        <ReactPlayer
                                            className="react-player"
                                            url="https://www.youtube.com/watch?v=eVahCryUXw0"
                                            width="850px"
                                            height="400px"
                                        />  
                                </div>
                                </div>
                                <div class="slide slide_4">
                                <div class="slide-content">
                                        <ReactPlayer
                                            className="react-player"
                                            url="https://www.youtube.com/watch?v=gotEdEs0FC0"
                                            width="850px"
                                            height="400px"
                                        />     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="controls">
                        <label for="slide1"></label>
                        <label for="slide2"></label>
                        <label for="slide3"></label>
                        <label for="slide4"></label>
                    </div>
                    <div id="bullets">
                        <label for="slide1"></label>
                        <label for="slide2"></label>
                        <label for="slide3"></label>
                        <label for="slide4"></label>
                    </div>
                </div>
                <br></br>
                <p> Art Gallery</p>
                <img src='https://freeclassicimages.com/images/asian-art-japanese-art-0525.jpg' className= 'images eastern-art'></img>
                <img src='https://freeclassicimages.com/images/alphonse_mucha_shop_greeting_card_zodiac_big.jpg' className='images zodiac-art'></img>
                <img src='https://images.unsplash.com/photo-1576570591799-5fcbe0352ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1840&q=80' className='images colonial-art'></img>
                <img src='https://images.unsplash.com/photo-1550684848-86a5d8727436?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' className='images abstract-art'></img>
                <img src='https://images.unsplash.com/photo-1533972751724-9135a8410a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80' className='images cyber-art'></img>
                <div id="imgModal" className="modal">
                    <span className="close">x</span>
                    <img className="modal-content" id="modal-image" />
                </div>
            
            </div>
        )
    }
}

export default CreationsPage
