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
        const captionText = document.getElementById("caption");

        for (let i = 0; i < images.length; i++) {
            const img = images[i];
            img.onclick = function (e) {
                console.log(e);
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;

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
<div className = 'creations-page-body'>
                <p className = 'video-title'></p>
                <div id="slider">
                    <input type="radio" name="slider" id="slide3" checked/>
                    <input type="radio" name="slider" id="slide2" checked/>
                    <input type="radio" name="slider" id="slide4" checked/>
                    <input type="radio" name="slider" id="slide1" checked/>
                    {/* <input type="radio" name="slider" id="slide5" checked/> */}
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
                                            url="https://www.youtube.com/watch?v=0ymt_xfTn-8"
                                            width="850px"
                                            height="400px"
                                        />     
                                </div>
                                </div>                                
                                {/* <div class="slide slide_5">
                                <div class="slide-content">
                                        <ReactPlayer
                                            className="react-player"
                                            url="https://www.youtube.com/watch?v=gotEdEs0FC0"
                                            width="850px"
                                            height="400px"
                                        />     
                                </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div id="controls">
                        <label for="slide1"></label>
                        <label for="slide2"></label>
                        <label for="slide3"></label>
                        <label for="slide4"></label>                        
                        {/* <label for="slide5"></label> */}
                    </div>
                    <div id="bullets">
                        <label for="slide1"></label>
                        <label for="slide2"></label>
                        <label for="slide3"></label>
                        <label for="slide4"></label>
                        {/* <label for="slide5"></label> */}
                    </div>
                </div>
                <br></br>
                <div id="imgModal" className="modal">
                    <span className="close">x</span>
                    <img className="modal-content" id="modal-image" />
                    <div id="caption" ></div>
                </div>
</div>
                
                <div className = 'art-gallery-container'>
                <p className = 'art-gallery'> Art Gallery</p>
                <br></br>
                <p className = 'classical-art'> Classical Art </p>
                <div className = 'classical-art-container'>
                    <img src='https://freeclassicimages.com/images/asian-art-japanese-art-0525.jpg' className='images eastern-art' alt="Lorem Ipsum Caption" id='eastern-art'></img>
                    <img src='https://freeclassicimages.com/images/alphonse_mucha_shop_greeting_card_zodiac_big.jpg' className='images zodiac-art' alt="Lorem Ipsum Caption" id='zodiac-art'></img>
                    <img src='https://images.unsplash.com/photo-1576570591799-5fcbe0352ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1840&q=80' alt="Lorem Ipsum Caption" className='images colonial-art' id='colonial-art'></img>
                </div>
                <br/>
                <p className = 'modern-art'> Modern Art </p>
                <br/>
                <div className = 'modern-art-container'>
                    <img src='https://images.fineartamerica.com/images-medium-large-5/contemporary-modern-art-original-abstract-landscape-painting-blue-essence-by-megan-duncanson-megan-duncanson.jpg' className='images abstract-art' alt="Lorem Ipsum Caption" id='abstract-art'></img>
                    <img src='https://images.unsplash.com/photo-1533972751724-9135a8410a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80' className='images cyber-art' alt="Lorem Ipsum Caption" id='cyber-art'></img>                
                    <img src='https://lh5.googleusercontent.com/proxy/r2eHJhxQcWD0HJ2kdrOCGKykKkd8PKlI5n6gbEfrYrbX2PRaLsb5rXrSCKEZ6-Qnuzk0hpe0_iOyHc1u0otBVA4IdzkwlvxgsJrO76T3s1zh-B0tP93acH_dOAliee_03xpoTey9iJaBx8hJh3gim4w' className='images nude-art' alt="Lorem Ipsum Caption" id='nude-art'></img>
                </div>
                </div>

            </div>
        )
    }
}

export default CreationsPage
