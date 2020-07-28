import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="five columns">
            <img className="profile-pic"  src={profilepic} alt="Manuel Ramirez" />
         </div>
         <div className="seven columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>

                  
              
         </div>
      </div>

   </section>
    );
  }
}

export default About;
