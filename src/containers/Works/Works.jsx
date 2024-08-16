import React from 'react'

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Works.css';
import { works01, works02, works03, works04, works05 } from '../../constants/images';

const worksSamples = [ works01, works02, works03, works04, works05 ]

function Works() {

  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === 'left'){
      current.scrollLeft -= 500;
    }
    else {
      current.scrollLeft += 500;
    }
  }

  return (
    <div className="app__works flex__center section__padding" id="works">
      <div className="app__works-title">
        <h2 className="p__saira">SAMPLE WORKS</h2>
        <p className="p__comfortaa">UI DESIGN IN MULTIPLE</p>
        <p className="p__comfortaa">DEVICES USING REACT.JS</p>
      </div>
      <div className="app__works-samples">
        <div className="app__works-samples_container" ref={scrollRef}>
          {worksSamples.map((image, index) => (
            <div className="app__works-samples_card flex__start" key={`works_samples-${index + 1}`}>
              <img src={image} alt="samples"/>
            </div>
          ))}
        </div>
        <div className="app__works-samples_arrows">
          <BsArrowLeftShort className="works__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="works__arrow-icon" onClick={() => scroll('right')} />
        </div>
        <div className="app__works-devices">
          <p className="p__comfortaa">iPhone 12 Pro</p>
          <p className="p__comfortaa">Nest Hub</p>
          <p className="p__comfortaa">iPad Pro</p>
        </div>
      </div>

    </div>
  )
}

export default Works
