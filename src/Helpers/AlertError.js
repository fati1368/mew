import { Alert } from 'antd';
export default function AlertError(){
    return <Alert
    message="Error"
    description="server doesn't response Please Check your Connection!"
    type="error"
    showIcon
  />;
}