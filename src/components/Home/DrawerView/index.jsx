import { Carousel, Drawer } from 'antd';
import React from 'react';

const DrawerView = ({ isDrawerVisible, closeDrawer, images }) => {
    return (
        <Drawer
            title="Basic Drawer"
            placement={'left'}
            closable={false}
            onClose={closeDrawer}
            open={isDrawerVisible}
            // key={placement}
            // style={{width: '100%'}}
            size={731}
        >
            <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            src={`data:image/png;base64,${image.imageLink}`}
                            alt={`Image ${index + 1}`}
                            style={{ width: '100%', maxHeight: 'calc(100vh - 200px)', objectFit: 'contain' }}
                        />
                    </div>
                ))}
            </div>
        </Drawer>
    );
};

export default DrawerView;
