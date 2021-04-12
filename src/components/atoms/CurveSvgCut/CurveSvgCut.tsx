import React from 'react';

/**
 * Component to display the icon
 *
 * @param {Object} props
 */
const CurveSvgCut = ({
  position,
  color = '#8D8D8D',
  borderColor = '#8D8D8D',
  borderWidth = 0,
  className,
  ...rest
}: SvgCutProps): JSX.Element => {
  switch (position) {
    case 'bottomRight':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="240.148"
          height="204.876"
          viewBox="0 0 240.148 204.876"
          style={{ position: 'absolute', bottom: -1, right: -1 }}
        >
          <path
            id="Path_1671"
            data-name="Path 1671"
            d="M-6112.595,433.219s120.54,2.213,180.449-48.873,59.188-155.473,59.188-155.473V433.219Z"
            transform="translate(6112.604 -228.869)"
            fill={`${color}`}
            stroke={`${borderColor}`}
            stroke-width={`${borderWidth}`}
          />
        </svg>
      );
    case 'topLeft':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="285.96"
          height="214.644"
          viewBox="0 0 285.96 214.644"
          style={{ position: 'absolute', top: -1, left: -1 }}
        >
          <path
            id="Path_1672"
            data-name="Path 1672"
            d="M-7794,646.884s9.835-113.323,81.325-166.931,204.635-47.5,204.635-47.5H-7794"
            transform="translate(7794 -432.24)"
            fill={`${color}`}
            stroke={`${borderColor}`}
            stroke-width={`${borderWidth}`}
          />
        </svg>
      );

    default:
      return null;
  }
};

export default CurveSvgCut;
