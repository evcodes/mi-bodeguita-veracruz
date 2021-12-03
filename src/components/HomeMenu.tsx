import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

export default function HomeMenu() {
    const handleClick = (e: any) => {
        console.log('click ', e);
    };
    return (
        <div>
            <Menu
                onClick={handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={["home"]}
                defaultOpenKeys={['sub1']}
                mode="inline"

            >

                <Menu.Item key="home" icon={<HomeOutlined />} >
                    <Link to="/">Inicio</Link>
                </Menu.Item>

                <Menu.Item key="map" ><Link to="/mapa"> Mapa</Link> </Menu.Item>
                <Menu.Item key="communication" ><Link to="/comunicacion"> Comunicacion</Link> </Menu.Item>
                <Menu.Item key="documents" ><Link to="/documentos"> Documentos</Link> </Menu.Item>


            </Menu>
        </div>
    )
}
