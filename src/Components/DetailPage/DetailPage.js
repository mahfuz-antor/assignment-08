import React from 'react';
import images from '../../images/male.png';
import iconsTwr from '../../images/twitter-square-brands.svg';
import iconsFb from '../../images/facebook-brands.svg';
import iconsYtube from '../../images/youtube-brands.svg';



const DetailPage = (props) => {
    const { strTeam, strDescriptionEN, intFormedYear, strCountry, strGender, strTeamBadge, strTeamFanart1, strYoutube, strTwitter, strFacebook, } = props.teamData;

    const logoStyle = {
        width: '110px'
    }
    const containStyle = {
        backgroundColor: '#42e9f9',
        width: '90%',
        height: '330px',
        margin: '0 auto',
        marginTop: '20px',
        borderRadius: '10px'

    }
    const containImgStyle = {
        width: '300px',
        float: 'right',
        margin: '65px',
    }

    const descriptionStyle = {
        width: '90%',
        margin: '0 auto',
        marginTop: '20px'
    }

    return (

        <div className="container bg-info">
            {/* <h1>This is DetailPage</h1> */}
            <img style={{width: '1110px',height: '400px' }} src={strTeamFanart1} alt="" />
            <div style={containStyle}>
                <div style={{ float: 'left', margin: '15px' }}>
                    <img style={logoStyle} src={strTeamBadge} alt="" />
                    <h3 className=""> {strTeam}</h3>
                    <p>Founded: {intFormedYear}</p>
                    <p>Country: {strCountry}</p>
                    <p>Sport Type: Football</p>
                    <p>Gender: {strGender}</p>
                </div>
                <img style={containImgStyle} src={images} alt="" />
            </div>
            <div style={descriptionStyle}>
                <p>Description: {strDescriptionEN} </p>
                <div className="text-center p-5">
                    <a className="p-3 text-light" href={strTwitter}> <img style={{ width:'32px',height:'32'}} src={iconsTwr} alt=""/>  </a>
                    <a className="p-3 text-light" href={strYoutube}> <img style={{ width:'44px',height:'44'}} src={iconsYtube} alt=""/> </a>
                    <a className="p-3 text-light" href={strFacebook}> <img style={{ width:'32px',height:'32'}} src={iconsFb} alt=""/>
                    </a>
                </div>

            </div>

        </div>
    );
};

export default DetailPage;