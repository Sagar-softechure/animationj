import React,{useState} from "react";
import { Link,Outlet } from "react-router-dom";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import {
    ContainerOutlined,
    DesktopOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
  } from '@ant-design/icons';
  import { Button } from 'antd';
    const items = [
        {
            key:'logo',
            label: (
              <h1 target="_blank" rel="noopener noreferrer">
                <Link to={'/home'}>Animations</Link>
              </h1>
            ),
            id:'main-logo'
          },
      {
        key: 'Home',
        label: (
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Home
          </a>
        ),
      },
      {
        label: 'Animations',
        key: 'Animations',
        icon: <SettingOutlined />,
        children: [
          {
            type: 'group',
            label: 'Item 1',
            children: [
              {
                label: 'Option 1',
                key: 'setting:1',
              },
              {
                label: 'Option 2',
                key: 'setting:2',
              },
            ],
          },
          {
            type: 'group',
            label: 'Item 2',
            children: [
              {
                label: 'Option 3',
                key: 'setting:3',
              },
              {
                label: 'Option 4',
                key: 'setting:4',
              },
            ],
          },
        ],
      },
    
    
    ];
    

    const items_small = [
        {
          key: '1',
          icon: <PieChartOutlined />,
          label: 'Option 1',
        },
        {
          key: '2',
          icon: <DesktopOutlined />,
          label: 'Option 2',
        },
        {
          key: '3',
          icon: <ContainerOutlined />,
          label: 'Option 3',
        },
        {
          key: 'sub1',
          label: 'Navigation One',
          icon: <MailOutlined />,
          children: [
            {
              key: '5',
              label: 'Option 5',
            },
            {
              key: '6',
              label: 'Option 6',
            },
            {
              key: '7',
              label: 'Option 7',
            },
            {
              key: '8',
              label: 'Option 8',
            },
          ],
        },
        {
          key: 'sub2',
          label: 'Navigation Two',
          icon: <AppstoreOutlined />,
          children: [
            {
              key: '9',
              label: 'Option 9',
            },
            {
              key: '10',
              label: 'Option 10',
            },
            {
              key: 'sub3',
              label: 'Submenu',
              children: [
                {
                  key: '11',
                  label: 'Option 11',
                },
                {
                  key: '12',
                  label: 'Option 12',
                },
              ],
            },
          ],
        },
      ];
  


  
const Header = () =>{

        const [current, setCurrent] = useState('mail');
        const onClick = (e) => {
          console.log('click ', e);
          setCurrent(e.key);
        };
       

        const [collapsed, setCollapsed] = useState(false);
        const toggleCollapsed = () => {
          setCollapsed(!collapsed);
        };

        return (
            <>
            <header>
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className="desktop" ></Menu>
                <div
                style={{
                  width: 256,
                }} className="mobile"
              >
                <Button
                  type="primary"
                  onClick={toggleCollapsed}
                  style={{
                    marginBottom: 16,
                  }}
                >
                  {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
                <Menu
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  mode="inline"
                  theme="dark"
                  inlineCollapsed={collapsed}
                  items={items_small}
                />
              </div>
            </header>
                    </>
            );

}

export default Header;