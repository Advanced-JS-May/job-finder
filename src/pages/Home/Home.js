import React, { useState } from 'react';

import Bunner from '../../components/Bunner/Bunner'
import Footer from '../../components/Footer/Footer'
import StepperJob from '../../components/Stepper/Stepper'


function Home() {
  return (
  	<>
  		<Bunner />
  		<StepperJob />
  		<Footer />
  	</>
  );
}

export default Home;
