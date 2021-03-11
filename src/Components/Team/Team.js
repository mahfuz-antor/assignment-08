import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Team = (props) => {
    const {strTeam, strAlternate, strTeamBadge, idTeam } = props.team;

    // const history = useHistory();

    // const handleClick = (teamId) => {
    //     const url = `/teamDetails/${teamId}`;
    //     history.push(url);
    // }

    const teamStyle = {
        border: '1px solid red',
        margin: '15px',
        padding: '15px',
        float: 'left',
        borderRadius: '10px',
        width: '330px',
        height: '360px',
    }

    return (
        <div className="container">
        <div  style={teamStyle}>
            <img style={{width:'150px', marginLeft:'25%'}}  className="d-flex justify-content-center" src={strTeamBadge}/>
            <h3 className="d-flex justify-content-center"> {strTeam}</h3>
            <p className="d-flex justify-content-center">Club: {strAlternate}</p>
            <p className="d-flex justify-content-center">Type of: Football</p>
            <Link className="d-flex justify-content-center bg-info text-light " style={{borderRadius:'7px'}} to={`/teamDetails/${idTeam}`}> Explore </Link>
            <br/>
            {/* <button onClick={() => handleClick(idTeam)}>Details</button> */}
        </div>
        </div>

    );
};

export default Team;