import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import type { ReactElement } from "react";



type IconProps = {
  color: string;
  size?: 'large' | 'medium' | 'small';
};

function Button({icon} : { icon : ReactElement }) {
  return (
     <button className="button">Submit {icon}</button>
  )
}


const Error = ({ color, size }: IconProps) => <ErrorIcon style={{ color }} fontSize={size} />;
const Warning = ({ color, size }: IconProps) => <WarningIcon style={{ color }} fontSize={size} />;
const Avatar = () => <span className="avatar">AB</span>;

function Main() {
  return (
    <div>
        <Button icon={<Error color='red' /> }/>
        <Button icon={<Warning color='yellow' size='large'/>} />
        <Button icon={<Avatar />} />
    </div>
  )
}

export default Main