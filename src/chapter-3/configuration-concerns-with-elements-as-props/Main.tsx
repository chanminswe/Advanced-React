import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import Loading from '@mui/icons-material/HourglassEmpty';
import WarningIcon from '@mui/icons-material/Warning';
import Button from '../components/Button';


type IconProps = {
  color: string;
  size?: 'large' | 'medium' | 'small';
};

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