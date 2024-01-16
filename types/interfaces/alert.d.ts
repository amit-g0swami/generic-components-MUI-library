/// <reference types="react" />
import { SvgIconProps } from '@mui/material/SvgIcon';
export interface IAlertProps {
    severity?: 'error' | 'warning' | 'info' | 'success';
    variant?: 'outlined' | 'filled';
    color?: 'error' | 'warning' | 'info' | 'success';
    icon?: React.ReactElement<SvgIconProps>;
    title?: string;
    message?: string;
    border?: string;
}
