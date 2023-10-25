import React, { useState } from 'react'
import { DatePicker, message } from 'antd';


const About = () => {
    const [date, setDate] = useState<any>(null);
  const [messageApi, contextHolder] = message.useMessage();
  const handleChange = (value:any) => {
    messageApi.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };
  return (
    <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
      </div>
      {contextHolder}
    </div>
  );
}

export default About