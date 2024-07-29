import React from 'react'

import { Flex, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

const Loader = () => {
  return (
    <Flex align="center" gap="middle" className="w-full h-[90vh] flex items-center justify-center">
        <Spin
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 68,
                color:"purple"
              }}
              spin
            />
          }
        />
      </Flex>
  )
}

export default Loader
