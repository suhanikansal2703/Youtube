import React, { useContext, useEffect, useState } from 'react'
import { bhaktiSongs, bollywoodSongs, hipHopSongs, hollywoodSongs, lofiSongs, punjabiSongs } from './list'
import { songContext } from './YoutubeContext'


const SongRow = () => {
    const { subscriptions } = useContext(songContext);
    const [songList, setSongList] = useState(lofiSongs);
    useEffect(() => {

        if (subscriptions[0]) {
            setSongList(() => (bollywoodSongs))
        }
        else if (subscriptions[1]) {
            setSongList(() => (hollywoodSongs))
        }
        else if (subscriptions[2]) {
            setSongList(() => (bhaktiSongs))
        }
        else if (subscriptions[3]) {
            setSongList(() => (punjabiSongs))
        }
        else if (subscriptions[4]) {
            setSongList(() => (hipHopSongs))
        }
        else {
            setSongList(() => (lofiSongs))
        }
    })

    const handlePlaySong=(id)=>{
        document.getElementById(id).play();
    }
    const handlePauseSong=(id)=>{
        document.getElementById(id).pause();
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Image</th>
                        <th>Song Name</th>
                        <th>Options</th>
                    </tr>

                    {songList.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td><img src={item.img} width='50px' height='50px' /></td>
                                <td><h2>{item.name}</h2></td>
                                <td>
                                    <button onClick={()=>handlePlaySong(item.id)}>Play</button>
                                    <button onClick={()=>handlePauseSong(item.id)}>Pause</button>
                                </td>
                                <audio src={item.audio} id={item.id} ></audio>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
}

export default SongRow