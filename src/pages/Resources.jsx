import Data from './data1.json';
import DiseaseCard from '../components/SoilCard';
import {useSpring, animated, useTrail} from '@react-spring/web';
import {useEffect} from 'react';
import './Diseases.css';

const Diseases = () => {
  const pages = [0, 1, 2];
  const config = {mass: 20, tension: 2000, friction: 500};

  useEffect(() => {
    localStorage.setItem('uploaded', false);
  }, []);

  const trail = useTrail(pages.length, {
    from: {opacity: 0, transform: 'translateY(-50px)'},
    to: {opacity: 1, transform: 'translateY(0px)'},
    delay: 500,
    config,
  });

  const fadeDown = useSpring({
    from: {opacity: 0, transform: 'translateY(-50px)'},
    to: {opacity: 1, transform: 'translateY(0px)'},
    config: {duration: 500},
  });

  return (
    <div className="flex justify-center">
      <div className="w-[100rem] px-8 mt-[10rem] mb-[5rem] text-[#2c302e]">
        <animated.div style={fadeDown}>
          <h1 className="font-serif text-[32px] font-bold">Soil Analysis</h1>
          <p className="text-[#666e75]">
            Learn more about the soil analysis to be performed.
          </p>
        </animated.div>

        <div className="flex flex-wrap gap-4 mt-[2rem]">
          {pages.map((page, index) => (
            <animated.div style={trail[index]}>
              <DiseaseCard
                page={page}
                photo={`/sample-paddies/${page}.jpg`}
                name={Data[page].name}
                description={`${Data[page].cause
                  .slice(0, 50)
                  .replace(/^\s+|\s+$/gm, '')}...`}
              />
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Diseases;
