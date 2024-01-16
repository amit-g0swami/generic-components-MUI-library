export interface ICircularLoaderProps {
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';
    variant?: 'determinate' | 'indeterminate';
    value?: number;
    buffer?: number;
}
export interface ILinearLoaderProps {
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';
    variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query';
    value?: number;
    buffer?: number;
}
