import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DetailPage from '../DetailPage/DetailPage';
import Header from '../Header/Header';

const TeamDetails = () => {
    const { teamId } = useParams();
    const [teamDetail, setTeamDetail] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetail(data.teams));

    }, [])
    console.log(setTeamDetail);
    console.log(teamDetail);

    return (
        <div>
            {
              teamDetail.map(teamData => <DetailPage teamData={teamData}></DetailPage>)
            }
            {
              teamDetail.map(teamData => <Header teamData={teamData}></Header>)
            }
        </div>
    );
};

export default TeamDetails;