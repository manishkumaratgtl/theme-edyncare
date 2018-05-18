import React, { Component } from 'react';
import TeamMember from './team_member';
import '../../../../scss/custom/basic.css';

export default class OurTeamSS extends Component {
    render() {
        return (
            <div className="styled-background">
                <div className="row text-center p-4 px-5">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <h2>Our team</h2>

                        <p>We’re building an amazing team to transform the care industry.
                            We all bring something different to the table, but are united in our commitment
                            to delivering an unparalleled experience for our clients and having a positive
                            impact on our communities.</p>

                        <div className="row no-gutters" >
                            <div className="col-sm">
                                <TeamMember name="Jonny Bottomley" title="CEO" quote="Hey, I'm Jonny" />
                            </div>
                            <div className="col-sm">
                                <TeamMember name="Oliver Ross" title="COO" quote="Hey, I'm Oli" />
                            </div>
                            <div className="col-sm">
                                <TeamMember name="James Shields" title="CTO" quote="We are a tech company" />
                            </div>
                            <div className="col-sm">
                                <TeamMember name="Hannah Morgon" title="HoC" quote="Im the haed of care" />
                            </div>
                            <div className="col-sm">
                                <TeamMember name="Jamie Colvin" title="Junior Dev" quote="Im the head junior dev" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


// class OurTeam extends Component {
//     render() {
//         return (

// <div className= "p-5 m-auto color0" style= {{position: "relative"}}>
// <div style= {{ zIndex: "-1"}}>
// </div>
//     <div className="row no-gutter justify-content-center">
//         <div className="col-md-9 m-auto no-gutter text-center"> 
//             <h1 className="pt-4 pb-4 text-center">Our team</h1>
//             <h3>We’re building an amazing team to transform the care industry.
//                 We all bring something different to the table, but are united in our commitment
//                 to delivering an unparalleled experience for our clients and having a positive
//                 impact on our communities.</h3>
//             <div className="row justify-content-around text-center">
//                 <div className="col-6 col-md-2">
//                     <img alt='Facebook' style= {{ maxWidth: 120}} src={require('../../../../images/designAssets/textures/public/ourStory/s3_profile.png')} className="img img-responsive imageSizeAvatar"/>
//                     <h2>Jonny<br/> Bottomly</h2>
//                     <p>CEO</p>
//                     <p>"Quote"</p>
//                 </div>
//                 <div className="col-6 col-md-2">
//                 <img alt='Facebook' style= {{ maxWidth: 120}} src={require('../../../../images/designAssets/textures/public/ourStory/s3_profile.png')} className="img img-responsive imageSizeAvatar" />
//                     <h2>Oliver<br/>Ross</h2>
//                     <p>COO</p>
//                     <p>"Quotes"</p>
//                 </div>
//                 <div className="col-6 col-md-2">
//                 <img alt='Facebook' style= {{ maxWidth: 120}} src={require('../../../../images/designAssets/textures/public/ourStory/s3_profile.png')} className="img img-responsive imageSizeAvatar" />
//                     <h2>James<br/> Shields</h2>
//                     <p>CTO</p>
//                     <p>"Quotes"</p>
//                 </div>
//                 <div className="col-6 col-md-2">
//                 <img alt='Facebook' style= {{ maxWidth: 120}} src={require('../../../../images/designAssets/textures/public/ourStory/s3_profile.png')} className="img img-responsive imageSizeAvatar" />
//                     <h2>Rita<br/> Malone</h2>
//                     <p>Head of Care</p>
//                     <p>"Quotes"</p>
//                 </div>
//                 <div className="col-6 col-md-2">
//                 <img alt='Facebook' style= {{ maxWidth: 120}} src={require('../../../../images/designAssets/textures/public/ourStory/s3_profile.png')} className="img img-responsive imageSizeAvatar" />
//                     <h2>Jamie<br/> Colvin</h2>
//                     <p>Head of Design</p>
//                     <p>"Quotes"</p>
//                 </div>
//             </div>      
//         </div>
//     </div> 
// </div>
//         )
//     }
// }

