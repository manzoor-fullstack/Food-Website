import React, { useEffect, useState,useRef  } from 'react'
import '../style/section4Style.css';
function Section4() {

  const[count, setCount] = useState(0);
  const[newCount, setNewCount] = useState(0);
  const[count3, setCount3] = useState(0);
  const[count4, setCount4] = useState(0);

  const sectionRef = useRef(null);

  useEffect(() => {
      const observer = new IntersectionObserver(
          (entries) => {
              const entry = entries[0];
              if (entry.isIntersecting) {
                  const interval = setInterval(() => {
                      setCount(prevCount => {
                          if (prevCount < 50) {
                              return prevCount + 1;
                          } else {
                              clearInterval(interval);
                              return prevCount;
                          }
                      });
                  }, 50);

                  const interval2 = setInterval(() => {
                    setNewCount(prevCount =>{
                      if(prevCount < 70){
                        return prevCount + 1;
                      }else{
                        clearInterval(interval2);
                        return prevCount;
                      }
                    })
                  }, 50);

                  const interval3 = setInterval(() => {
                    setCount3(prevCount =>{
                      if(prevCount < 100){
                        return prevCount + 1;
                      }else{
                        clearInterval(interval3);
                        return prevCount;
                      }
                    })
                  }, 50);

                  const interval4 = setInterval(() => {
                    setCount4(prevCount =>{
                      if(prevCount < 120){
                        return prevCount + 1;
                      }else{
                        clearInterval(interval4);
                        return prevCount;
                      }
                    })
                  }, 50);
              }
          },
          {
              threshold: 1, // 50% of the section should be visible to start counting
          }
      );

      if (sectionRef.current) {
          observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
  }, []);

  return (
    <section className='bg_img_section'>
    <div className="container cont">
        <div className="row rw text-center justify-content-center align-items-center" data-aos="fade-up">
            <div className="col-lg-3 col-md-6" ref={sectionRef} data-aos="fade-up" >
            <h3>{count}</h3>
            <p>Clients</p>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <h3>{newCount}</h3>
            <p>Projects</p>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <h3>{count3}</h3>
            <p>Hours of Support</p>
            </div>
            <div className="col-lg-3 col-md-6" data-aos-delay="700" data-aos="fade-up">
            <h3>{count4}</h3>
            <p>Workers</p>
            </div>
        </div>
    </div>
      
    </section>
  )
}

export default Section4
