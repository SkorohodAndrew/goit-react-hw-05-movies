import RotatingLines from 'react-spinners/RiseLoader';

export const Loader = () => {
  return (
    <div>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};
