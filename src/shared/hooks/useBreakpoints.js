import { useMediaPredicate } from 'react-media-hook';

const useBreakpoints = () => {
  const bigger1920px = useMediaPredicate('(min-width: 1920px)');
  return { bigger1920px };
};

export default useBreakpoints;
