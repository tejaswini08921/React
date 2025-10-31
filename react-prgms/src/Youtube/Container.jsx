import React from 'react'
import PrintThumbnail from './PrintThumbnail';
import VideoPlayer from './VideoPlayer';

const Container = ({ state, play, fun }) => {

    return (
        <div>
            <article>
                <aside>
                    <VideoPlayer play={play} />
                </aside>
                <aside className="thumbnails-container">
                    {state.map((lio, index) => (
                        <PrintThumbnail key={index} lio={lio} fun={fun} />
                    ))}
                </aside>
            </article>

        </div>
    )
}

export default Container