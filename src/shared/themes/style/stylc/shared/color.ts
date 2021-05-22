const colors: { [index: string]: string } = {
  red: '#e94b35',
  blue: '#337ab7',
  blueHover: '#286090',
  green: '#3c763d',
  greenHover: '#2b542c',
  orange: '#ff9900',
  white: '#FFFFFF',
  seashell: '#F6F6F6',
  transparent: 'transparent',
  english_red: '#FD2648',
  onyx: '#383839',
  sonic_silver: '#74747D',
  gray_5: '#E0E0E0',
  gray_1: '#F7F7F7',
  gray_hills: '#FDFDFD',
  solid_pink: '#F20D31',
  border_gray: '#E0E0E0',
  mild_red: 'rgba(255, 112, 134, 0.13)',
  papaya_whip: '#FAEBD2',
  focus_blue: '#54c4cf',
  warning_yellow: '#FFB336',
  mild_pink: '#FFE7EA',
  border_pink: '#F20D31',
  inner_border: '#EEEEEE',
  brand_color: '#2249AE',
  'brand_color:hover': '#3E65C8',
  'brand_color:active': '#5076D6',
  text_help_grey: '#818E9B',
  table_black: '#323C47',
  text_line: '#D3D8DD',
}

const color = (colorName: string): string => (colorName ? colors[colorName] : '')

export default color