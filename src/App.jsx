import { useState } from 'react'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './pages/';
import Dynamic from './pages/dynamic';
import Dynamic2 from './pages/dynamic2';
import './App.scss'

function App() {
  return (
    <>
      <ConfigProvider locale={zhCN}>
        <div className="App">
          <Router>
            <Routes>
              <Route path="/dynamic2" element={<Dynamic2 />} />
              <Route path="/dynamic" element={<Dynamic />} />
              <Route path="/" element={<Index />} />
            </Routes>
          </Router>
        </div>
      </ConfigProvider>
    </>
  )
}

export default App
