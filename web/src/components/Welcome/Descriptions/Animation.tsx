import React, { useMemo } from 'react';
import Lottie from 'lottie-react-web';

interface IProps {
  data: string;
  pause: boolean;
}

const Animation: React.FC<IProps> = (props: IProps) => {
  const pauseChange = useMemo(() => {
    return (
      <Lottie
        isPaused={props.pause}
        options={{
          animationData: JSON.parse(props.data),
          loop: false,
          autoplay: false
        }}
      />
    );
  }, [props.pause]);

  return pauseChange;
};

export default Animation;
