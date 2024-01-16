import React from "react"
import { ILabelProps } from "./label.interface"

export const DefaultLabel: React.FC<ILabelProps> = ({
    ...props
  }: ILabelProps) => {
    return (
        <label htmlFor={props.for}>{props.labelText}</label>
    )
}