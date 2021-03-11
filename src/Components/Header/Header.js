import React from 'react';

const Header = (props) => {
    console.log(props.teamData.strCountry)
    const {} = props.teamData;
    
    return (
        <div>
            {/* <h2>This is Header Page {teamData.strCountry}</h2> */}
        </div>
    );
};

export default Header;