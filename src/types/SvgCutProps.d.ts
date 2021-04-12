interface SvgCutProps {
  /**
   * External classes
   */
  className?: string;
  /**
   * Position
   */
  position: 'bottomRight' | 'topLeft' | 'topRight';
  /**
   * Source set for the responsive images
   */
  color?: string;
  /**
   * Border width
   */
  borderWidth?: number;
  /**
   * Color of the border
   */
  borderColor?: string;
  // All other props
  [x: string]: any;
}
