import React from "react"
import { ILogoProps } from "./logo.interface"

export const DefaultLogo : React.FC<ILogoProps> = ({
    ...props
  }: ILogoProps) => {
    return (<img src={props.srcUrl} alt={props.altText} width={props.width} height={props.height}/>)
}