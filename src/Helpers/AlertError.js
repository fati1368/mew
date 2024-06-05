import { Alert } from 'antd';
export default function alertError(){
    return <Alert
    message="Error"
    description="server doesn't response Please Check your Connection!"
    type="error"
    showIcon
  />;
}