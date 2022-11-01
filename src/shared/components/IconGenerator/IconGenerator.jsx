import SVGCreator from '../SVGCreator';

const IconGenerator = ({
  number,
  iconName,
  width,
  height,
  iconStyle,
  listStyle,
}) => {
  const elements = Array(number)
    .fill(iconName)
    .map((iconName, idx) => (
      <li className={iconStyle} key={`${iconName}-${idx}`}>
        <SVGCreator iconName={iconName} width={width} height={height} />
      </li>
    ));

  return <ul className={listStyle}>{elements}</ul>;
};

export default IconGenerator;
