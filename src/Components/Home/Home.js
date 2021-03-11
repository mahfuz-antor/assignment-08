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
    }, {})

    const imgStyle = {
        width: '1120px',
        height: '500px',

    }

    return (
        <div className="container">
            <img style={imgStyle} src={images}/>
            {
                teams.map(team => <Team team={team}></Team>)
            }

        </div>
    );
};

export default Home;