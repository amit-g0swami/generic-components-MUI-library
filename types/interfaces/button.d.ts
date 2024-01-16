import { IconType } from 'react-icons/lib';
export interface IButtonProps {
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    disable?: boolean;
    btnText: string;
    variant?: 'text' | 'outlined' | 'contained';
    size: 'small' | 'large' | 'medium';
    onClick: () => void;
    name: string;
    type?: 'button' | 'submit' | 'reset';
    value: string;
    className?: string;
    styles?: string;
}
export interface IIconButtonProps {
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    icon: IconType;
    onClick: () => void;
    size: 'small' | 'medium' | 'large';
    name: string;
    type?: 'button' | 'submit' | 'reset';
    value: string;
}
export interface IIconLabelButtonProps {
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    disable?: boolean;
    btnText: string;
    size: 'small' | 'large' | 'medium';
    startIcon: IconType;
    onClick: () => void;
    name: string;
    type?: 'submit' | 'reset' | 'button';
    value: string;
}
export interface ITextButtonProps {
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    disable?: boolean;
    btnText: string;
    variant?: 'text' | 'outlined' | 'contained';
    size: 'small' | 'large' | 'medium';
    onClick: () => void;
    name: string;
    value: string;
    type?: 'button' | 'submit' | 'reset';
}
