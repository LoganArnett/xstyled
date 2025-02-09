import {
  getSpace,
  getColor,
  getRadius,
  getBorder,
  getBorderWidth,
  getBorderStyle,
  getShadow,
  getSize,
  getZIndex,
  getFont,
  getFontSize,
  getLineHeight,
  getFontWeight,
  getLetterSpacing,
  getTransition,
  getInset,
  getAnimation,
  getTimingFunction,
  getTransform,
  getTransitionProperty,
  getDuration,
} from '@xstyled/system'

const getNumber = (transform: Function) => (value: any) => {
  const num = Number(value)
  return transform(Number.isNaN(num) ? value : num)
}

const SPACES = /\s+/
const getMultiDimensions = (transform: Function) => (value: any) => {
  const values = value.split(SPACES)
  return (p: object) =>
    values.map((value: any) => transform(value)(p)).join(' ')
}

const COMMA = /\s*,\s*/
const getMultiValues = (transform: Function) => (value: any) => {
  const values = value.split(COMMA)
  return (p: object) =>
    values.map((value: any) => transform(value)(p)).join(',')
}

const getNumberInset = getNumber(getInset)

const getNumberSpace = getNumber(getSpace)
const getMultiNumberSpace = getMultiDimensions(getNumberSpace)

const getNumberBorder = getNumber(getBorder)

const getNumberBorderWidth = getNumber(getBorderWidth)
const getMultiNumberBorderWidth = getMultiDimensions(getNumberBorderWidth)

const getNumberSize = getNumber(getSize)

const getMultiBorderStyle = getMultiDimensions(getBorderStyle)

export const propGetters = {
  // getSpace
  margin: getMultiNumberSpace,
  'margin-top': getNumberSpace,
  'margin-bottom': getNumberSpace,
  'margin-left': getNumberSpace,
  'margin-right': getNumberSpace,
  padding: getMultiNumberSpace,
  'padding-top': getNumberSpace,
  'padding-bottom': getNumberSpace,
  'padding-left': getNumberSpace,
  'padding-right': getNumberSpace,
  gap: getMultiNumberSpace,
  'grid-gap': getMultiNumberSpace,
  'row-gap': getNumberSpace,
  'grid-row-gap': getNumberSpace,
  'column-gap': getNumberSpace,
  'grid-column-gap': getNumberSpace,

  // getColor
  color: getColor,
  'background-color': getColor,
  'border-color': getColor,
  'border-top-color': getColor,
  'border-right-color': getColor,
  'border-bottom-color': getColor,
  'border-left-color': getColor,
  'outline-color': getColor,
  fill: getColor,
  stroke: getColor,

  // getRadius
  'border-radius': getMultiDimensions(getNumber(getRadius)),
  'border-top-left-radius': getMultiDimensions(getNumber(getRadius)),
  'border-top-right-radius': getMultiDimensions(getNumber(getRadius)),
  'border-bottom-right-radius': getMultiDimensions(getNumber(getRadius)),
  'border-bottom-left-radius': getMultiDimensions(getNumber(getRadius)),

  // getBorder
  border: getNumberBorder,
  'border-top': getNumberBorder,
  'border-right': getNumberBorder,
  'border-bottom': getNumberBorder,
  'border-left': getNumberBorder,

  // getBorderWidth
  'border-width': getMultiNumberBorderWidth,
  'border-top-width': getNumberBorderWidth,
  'border-right-width': getNumberBorderWidth,
  'border-bottom-width': getNumberBorderWidth,
  'border-left-width': getNumberBorderWidth,
  'outline-width': getNumberBorderWidth,

  // getBorderStyle
  'border-style': getMultiBorderStyle,
  'border-top-style': getBorderStyle,
  'border-right-style': getBorderStyle,
  'border-bottom-style': getBorderStyle,
  'border-left-style': getBorderStyle,
  'outline-style': getBorderStyle,

  // getShadow
  'box-shadow': getMultiValues(getShadow),
  'text-shadow': getMultiValues(getShadow),

  // getSize
  width: getNumberSize,
  height: getNumberSize,
  'max-width': getNumberSize,
  'max-height': getNumberSize,
  'min-width': getNumberSize,
  'min-height': getNumberSize,
  'mask-size': getMultiValues(getNumberSize),

  // getZIndex
  'z-index': getNumber(getZIndex),

  // getFont
  'font-family': getFont,

  // getFontSize
  'font-size': getNumber(getFontSize),

  // getLineHeight
  'line-height': getNumber(getLineHeight),

  // getFontWeight
  'font-weight': getFontWeight,

  // getLetterSpacing
  'letter-spacing': getNumber(getLetterSpacing),

  // getTransition
  transition: getTransition,

  // getDuration
  'transition-duration': getDuration,
  'animation-duration': getDuration,

  // getAnimation
  animation: getAnimation,

  // getInset
  top: getNumberInset,
  right: getNumberInset,
  bottom: getNumberInset,
  left: getNumberInset,

  // getTimingFunction
  'animation-timing-function': getTimingFunction,
  'transition-timing-function': getTimingFunction,

  // getTransform
  transform: getTransform,

  // getTransitionProperty
  'transition-property': getTransitionProperty,
}
