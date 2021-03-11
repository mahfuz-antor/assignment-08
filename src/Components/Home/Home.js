import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import images from '../../images/bg-banner.png';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeams(data.teams))
        console.log(setTeams);
    }, [])

    const imgStyle = {
        width: '1120px',
        height: '400px',

    }

    return (
        <div className="container">
            <div className=""
                style={{
                    background: `url(${images})`, width: '1120px', height: '400px'
                }}
            ><h2 className="text-center" style={{ padding: '200px', color: 'rgb(157, 245, 229)', fontSize: '50px' }}> Searching Team Details </h2></div>

            {
                teams.map(team => <Team team={team}></Team>)
            }


        </div >
    );
};

export default Home;