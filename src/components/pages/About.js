import React from 'react';
import Headshot from '../../assets/Headshot.jpg';

export default function About() {
  return (
    <main className='d-flex mainPage align-items-center justify-content-center'>
      <div className='content'>
        <div className='d-flex align-items-center mb-3'>
          <img src={Headshot} height='150px' id='aboutMeHead' ></img>
          <h1 id='aboutHeader'>About Me</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
          velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
          ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
          non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
          ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
          rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
          tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
          porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
          vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
          fames ac ante ipsum primis in faucibus.
        </p>
      </div>
    </main>
  );
}
