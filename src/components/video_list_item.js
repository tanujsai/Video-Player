import React from 'react';

const VideoListItem = (props) => {
    
    const video = props.video; //We can delete the props and {video} is good 
    const onVideoSelect1 = props.onVideoSelect;

    // we can delete above line
    console.log("video",video);

    const imagerUrl = video.snippet.thumbnails.default.url;
    

    return (
        <li onClick={() => onVideoSelect1(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imagerUrl}/></div> 
                 
                 <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>   
            </div>
        </li>
    );

};

export default VideoListItem;