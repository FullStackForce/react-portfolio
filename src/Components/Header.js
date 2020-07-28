import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
       var name = this.props.data.name;
       var profilepic= "images/"+this.props.data.image;
       var occupation= this.props.data.occupation;
       var resumeDownload = this.props.data.resumedownload;
       var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
       var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>
      <div className="row banner">
             <div className="banner-text">
             <img className="profile-top three"  src={profilepic} alt="Manuel Ramirez" />
            <h1 className="responsive-headline">{name}</h1>
            <h3><span>{occupation}</span></h3>
                  <p className="address">
                  <h4><span>
						         {city} {state}, {zip}
                   </span></h4>
                   <h4><span>{phone}</span></h4>
                   <h4><span>{email}</span></h4>
					   </p>
                <div className="download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i> Download Resume</a>
                  </p>
               </div>
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

   </header>
    );
  }
}

export default Header;
