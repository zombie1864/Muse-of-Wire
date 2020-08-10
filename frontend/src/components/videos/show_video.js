import React from 'react'; 
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';


class ShowVideo extends React.Component {    
    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.id);
    }    

    render() {
        const video = this.props.video 
        if ( !video ) {
            return null; 
        } 
        return (
            <div>
                <ReactPlayer
                className='react-player'
                url={video.video_url}
                width='50%'
                height='50%'
                />
                <div className = 'show-container'>
                    <p className = 'show-title'>
                        {video.title}
                    </p>
                    <p className = 'show-description'>
                        {video.description}
                    </p>
                </div>
            </div>
        )
    }
}

export default ShowVideo
