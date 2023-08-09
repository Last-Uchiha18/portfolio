import './tech.css'
import { useEffect, useRef } from 'react';
function Tech() {

const crossRef = useRef(null);
const crossRef1 = useRef(null);

const lineRef = useRef(null);
const lineRef1 = useRef(null);

useEffect(() => {
    const crossImg = crossRef.current;
    const crossImg1 = crossRef1.current;

    const lineImg = lineRef.current;
    const lineImg1 = lineRef1.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          crossImg.classList.add('rotateOnce');
        }
      });
    });

    const observer1 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            crossImg1.classList.add('rotateOnce');
          }
        });
      });

      const observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            lineImg.classList.add('translateOnce');
          }
        });
      });
  
      const observer3 = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              lineImg1.classList.add('translateOnce');
            }
          });
        });

    observer.observe(crossImg);
    observer1.observe(crossImg1);
    observer2.observe(lineImg);
    observer3.observe(lineImg1);

    return () => {
      observer.unobserve(crossImg);
      observer1.unobserve(crossImg1);
      observer2.unobserve(lineImg);
      observer3.unobserve(lineImg1);
    };
  }, []);
    return (
        
        <div className="tech">
                <img src="/portfolio/cross.svg" alt="" className='cross' ref={crossRef} />
                <img src="/portfolio/rectangle-6.svg" alt="" className='verticalLine' ref={lineRef} style={{
          width: '1px', height: '144px'}}/>

         
                <h1 className='techHeading'>A few technologies I have worked with</h1>
                <div className="tech">
                <div className="tray">
                    <img src="/portfolio/javascript.svg" alt="" className='icon'/>
                    <img src="/portfolio/react.svg" alt="" className='icon'/>
                    <img src="/portfolio/node.js.svg" alt="" className='icon'/>
                    <img src="/portfolio/html5.svg" alt="" className='icon'/>
                    <img src="/portfolio/css.svg" alt="" className='icon'/>
                </div>
                <div className="tray">
                    <img src="/portfolio/git.svg" alt="" className='icon'/>
                    <img src="/portfolio/ios.svg" alt="" className='icon'/>
                    <img src="/portfolio/python.svg" alt="" className='icon'/>
                    <img src="/portfolio/salesforce.svg" alt="" className='icon'/>
                    <img src="/portfolio/swift.svg" alt="" className='icon'/>
                </div>
                </div>

                <img src="/portfolio/cross.svg" alt="" className='cross' ref={crossRef1}/>
                <img src="/portfolio/rectangle-6.svg" alt="" className='verticalLine'  ref ={lineRef1} style={{
          width: '1px', height: '144px'}}/>
                
        </div>
    
    )
}

export default Tech;