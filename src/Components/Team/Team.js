import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLocationArrow } from '@fortawesome/free-solid-svg-icons'


const Team = (props) => {
    const { strTeam, strAlternate, strTeamBadge, idTeam } = props.team;

    // const history = useHistory();

    // const handleClick = (teamId) => {
    //     const url = `/teamDetails/${teamId}`;
    //     history.push(url);
    // }

    const teamStyle = {
        backgroundColor: '#9df5e5',
        margin: '15px',
        padding: '15px',
        float: 'left',
        borderRadius: '10px',
        width: '330px',
        height: '360px',
    }
    

    return (
        
            <div className="container bg-primary">
                <div className="shadow-lg" style={teamStyle}>
                    <img style={{ width: '150px', marginLeft: '25%' }} className="d-flex justify-content-center" src={strTeamBadge} alt="" />
                    <h3 className="d-flex justify-content-center"> {strTeam}</h3>
                    <p className="d-flex justify-content-center">Club: {strAlternate}</p>
                    <p className="d-flex justify-content-center">Type of: Football</p>
                    <Link className="d-flex justify-content-center bg-info text-light" style={{ borderRadius: '7px' }} to={`/teamDetails/${idTeam}`}>   Click to Show Details: <FontAwesomeIcon  icon={faLocationArrow} /> </Link> 
                </div>
            </div>
       
    );
};

export default Team;