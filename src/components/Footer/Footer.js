import React, { useState } from 'react';
import './Footer.css'

function Footer() {
  return (<>
  	<div className="footer">
  		<div className="footer__main-column">
  			<h2>Logo</h2>
  			<adress>
  				 24 Azatutyan Ave, Yerevan, Armenia <br />
 				+374 11 900 901 <br />
				 hello@staff.am 
  			</adress>
  			<ul className="footer__social-container">
  				<li><a></a></li>
  				<li><a></a></li>
  				<li><a></a></li>
  				<li><a></a></li>
  				<li><a></a></li>
  				<li><a></a></li>
  			</ul>
  		</div>
  		<div className="footer__link-column">
  			<h3>ABOUT</h3>
  			<ul>
  				<li><a href='#'>Our mission</a></li>
  				<li><a href='#'>How we work</a></li>
  				<li><a href='#'>StaffMedia</a></li>
  				<li><a href='#'>Privacy policy</a></li>                          
  				<li><a href='#'>Terms of use</a></li>
  			</ul>
  		</div>
  		<div className="footer__link-column">
  			<h3>INDIVIDUALS</h3>
  			<ul>
  				<li><a href='#'>Create online CV</a></li>
  				<li><a href='#'>View all jobs</a></li>
  				<li><a href='#'>View all companies</a></li>
  				<li><a href='#'>View all trainings</a></li>
  			</ul>
  		</div>
  		<div className="footer__link-column">
  			<h3>COMPANIES</h3>
  			<ul>
  				<li><a href='#'>Register as employer</a></li>
  				<li><a href='#'>View job packages</a></li>
  				<li><a href='#'>View training packages</a></li>
  				<li><a href='#'>View all companies</a></li>

  			</ul>
  		</div>
  		<div className="copyright-part">
  		<p>(c) COPYRIGHT 2020 IDK. ALL RIGHTS RESERVED.</p>
  	</div>
  	</div>
  	
  </>);
}

export default Footer;
