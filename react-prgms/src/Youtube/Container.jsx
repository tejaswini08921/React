import React from 'react'
import PrintThumbnail from './PrintThumbnail';
import VideoPlayer from './VideoPlayer';

const Container = ({state,play,fun}) => {
    
  return (
    <div>
        
        <article>
            <aside>
                <VideoPlayer play={play}></VideoPlayer>
            </aside>
{/* ---------------------------------------------------------------------------------------------------------- */}
            <aside>
                {
                    state.map((lio)=>{
                        console.log(lio);

                        return <PrintThumbnail lio={lio} fun={fun}></PrintThumbnail>
                        
                    })
                }
            </aside>
        </article>

    </div>
  )
}

export default Container