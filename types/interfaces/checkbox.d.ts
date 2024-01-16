/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
export interface ICheckboxProps {
    disabled?: boolean;
    defaultChecked?: boolean;
    checked?: boolean;
    indeterminate?: boolean;
    icon?: React.ReactElement<SvgIconProps>;
    checkedIcon?: React.ReactElement<SvgIconProps>;
    onClick?: () => void;
}
export interface IRadioProps {
    disabled?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    onClick?: () => void;
}
