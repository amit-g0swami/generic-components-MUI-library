export interface IMenuItem {
    item: number | string;
    value: number | string;
}
export interface ISelectProps {
    label: string;
    menuItem: IMenuItem[];
    helperText?: string;
}
export interface IMultipleSelectProps {
    label: string;
    menuItem: IMenuItem[];
    helperText?: string;
}
