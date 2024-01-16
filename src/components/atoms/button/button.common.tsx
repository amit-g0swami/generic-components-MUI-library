const small = {
  height: '28px',
  width: '90px',
  fontSize: '14px',
  padding: '0px'
}

const medium = {
  height: '36px',
  width: '122px',
  fontSize: '14px',
  padding: '10px'
}

const large = {
  height: '42px',
  width: '152px',
  fontSize: '14px',
  padding: '10px'
}

export const getButtonHeight = (size: string): string => {
  return size === 'small'
    ? small.height
    : size === 'medium'
    ? medium.height
    : large.height
}

export const getButtonWidth = (size: string): string => {
  return size === 'small'
    ? small.width
    : size === 'medium'
    ? medium.width
    : large.width
}

export const getButtonFontSize = (size: string): string => {
  return size === 'small'
    ? small.fontSize
    : size === 'medium'
    ? medium.fontSize
    : large.fontSize
}

export const getButtonPadding = (size: string): string => {
  return size === 'small'
    ? small.padding
    : size === 'medium'
    ? medium.padding
    : large.padding
}
