import React, { useState, useEffect } from 'react';
import * as Antd from 'antd';
import { transform as BabelTransform } from '@babel/standalone';

function Index() {

  const [code, setCode] = useState('加载中...');
  const transform = (code) => {
    return BabelTransform(code, {presets: ["env", 'react']}).code;
  };

  useEffect(() => {
    setTimeout(() => {
      //代码字符串
      const codeStr = `
      function Test(){
        function Example() {
          // 声明一个新的叫做 “count” 的 state 变量
          const [count, setCount] = React.useState(0);
        
          return (
            <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>
                Click me1
              </button>
            </div>
          );
        }

        const dataSource = [
          {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
          },
          {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
          },
        ];
        
        const columns = [
          {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
          },
          {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
          },
        ];
        
        return (
          <div id="container">
            <Example />
            <a href="/bar">bar</a>
            <br/>
            <br/>
            <Antd.Input placeholder="Basic usage" style={{width: '200px'}}/>
            <br/>
            <br/>
            <Antd.Table columns={columns} dataSource={dataSource} />
            <br/>
            <span onClick={e => alert("Hi2")}>click me2</span>
          </div>
        );
      }`;
      const _codeStr = `var TempComponent = (${codeStr})();`;
      const functionBody = `${transform(_codeStr)} return TempComponent`
      console.log(functionBody)
      const scope = { React, Antd }
      const transformCode = (new Function(...Object.keys(scope), functionBody))(...Object.values(scope))
      setCode(transformCode)
    }, 1500)
  }, []);

  return (
    <div className="h-screen flex flex-col" style={{padding: '20px'}}>
      <div>{code}</div>
    </div>
  );
}
export default Index;

