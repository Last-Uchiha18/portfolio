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
                <img src="../public/cross.svg" alt="" className='cross' ref={crossRef} />
                <img src="../public/rectangle-6.svg" alt="" className='verticalLine' ref={lineRef} style={{
          width: '1px', height: '144px'}}/>

         
                <h1 className='techHeading'>A few technologies I have worked with</h1>
                <div className="tech">
                <div className="tray">
                    <img src="../public/javascript.svg" alt="" className='icon'/>
                    <img src="../public/react.svg" alt="" className='icon'/>
                    <img src="../public/node.js.svg" alt="" className='icon'/>
                    <img src="../public/html5.svg" alt="" className='icon'/>
                    <img src="../public/css.svg" alt="" className='icon'/>
                </div>
                <div className="tray">
                    <img src="../public/git.svg" alt="" className='icon'/>
                    <img src="../public/ios.svg" alt="" className='icon'/>
                    <img src="../public/python.svg" alt="" className='icon'/>
                    <img src="../public/salesforce.svg" alt="" className='icon'/>
                    <img src="../public/swift.svg" alt="" className='icon'/>
                </div>
                </div>

                <img src="../public/cross.svg" alt="" className='cross' ref={crossRef1}/>
                <img src="../public/rectangle-6.svg" alt="" className='verticalLine'  ref ={lineRef1} style={{
          width: '1px', height: '144px'}}/>
                
        </div>
    
    )
}

export default Tech;