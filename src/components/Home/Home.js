import './Home.scss'
// import { CiCirclePlus } from "react-icons/ci";
// import { GrSubtractCircle } from "react-icons/gr";
// import { BsArrowLeftCircle } from "react-icons/bs";
// import { IoArrowUndoCircleOutline } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import { GiGolfFlag } from "react-icons/gi";
import { MdDeleteForever } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { RiSubtractLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";

// import { IoLocationSharp } from "react-icons/io5";
import { BsBookmarkFill } from "react-icons/bs";
import { CiDollar } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MapContainer, TileLayer, ImageOverlay, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useDropzone } from 'react-dropzone';
import 'rc-slider/assets/index.css';
import 'leaflet/dist/leaflet.css';
// import { calc } from 'antd/es/theme/internal';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { message } from 'antd';
import ModalDownMenu from './ModalDown/ModalDownMenu';
import ModalPriceFilter from './ModalDown/ModalPriceFilter';
const mapContainerStyle = {
  width: '100%',
  height: 'calc(100vh - 56px)',
};
const center = [21.136663, 105.7473446];

function Home() {
  const [image, setImage] = useState(null);
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState(center);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [currentSize, setCurrentSize] = useState({ width: 0, height: 0 });
  const [mapZoom, setMapZoom] = useState(14);
  const [value, setValue] = useState(50);
  const [selectedPosition, setSelectedPosition] = useState(null); // State để lưu trữ vị trí được chọn trên bản đồ
  const [activeItem, setActiveItem] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isShowModalPrice, setIsShowModalPrice] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const handleReloadClick = () => {
    window.location.reload();
  };

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  const handleLocationArrowClick = () => {
    if (!selectedPosition) {
      message.success('Vui lòng chọn vị trí bạn muốn tìm')
    } else {
      const [lat, lng] = selectedPosition;
      window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
    }
  };

  const increaseValue = () => {
    setValue((prevValue) => Math.min(prevValue + 1, 100));
  };

  const decreaseValue = () => {
    setValue((prevValue) => Math.max(prevValue - 1, 0));
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        setImage(reader.result);
        setImageSize({ width: img.width, height: img.height });
        setCurrentSize({ width: img.width, height: img.height });
      };
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

  useEffect(() => {
    if (imageSize.width && imageSize.height) {
      const newWidth = imageSize.width * scale;
      const newHeight = imageSize.height * scale;
      setCurrentSize({ width: newWidth, height: newHeight });
    }
  }, [scale, imageSize]);

  useEffect(() => {
    const handleZoomEnd = () => {
      const zoom = mapRef.current.getZoom();
      setMapZoom(zoom);
    };

    if (mapRef.current) {
      mapRef.current.on('zoomend', handleZoomEnd);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.off('zoomend', handleZoomEnd);
      }
    };
  }, []);

  const calculateImageBounds = useCallback((center, size) => {
    const halfWidth = size.width / 2;
    const halfHeight = size.height / 2;
    return [
      [center[0] - halfHeight / 111320, center[1] - halfWidth / 111320],
      [center[0] + halfHeight / 111320, center[1] + halfWidth / 111320]
    ];
  }, []);

  const mapRef = useRef();

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setSelectedPosition([lat, lng]);
      }
    });
    return null;
  };

  const handleClick = (index) => {
    setActiveItem(index);
    if (index === 3) {
      setIsModalVisible(true);
    }
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };
  const handleClosePrice = () => {
    setIsShowModalPrice(false);
  }
  const buttonRef = useRef();
  return (
    <div className='home-container'>
      {/* Slider Container */}
      <div className="slider-container" style={{ position: 'absolute', top: 10, right: 10, zIndex: 1000, padding: 10, borderRadius: 4 }}>
        <div className='slider-container-range'>
          <div className='nav-icon-arrow'>
            <FiPlus size={22} onClick={increaseValue} />
          </div>
          <input
            type="range"
            className="slider"
            orientation="vertical"
            value={value}
            onChange={handleSliderChange}
            min="0"
            max="100"
            style={{ writingMode: 'bt-lr', WebkitAppearance: 'slider-vertical' }}
          />
          <div className='nav-icon-arrow'>
            <RiSubtractLine size={22} onClick={decreaseValue} />
          </div>
          <div className='nav-icon'>
            <div className='nav-icon-arrow' onClick={handleReloadClick}>
              <FaArrowRotateLeft size={20} />
            </div>
            <div className='nav-icon-arrow' onClick={handleLocationArrowClick}>
              <FaLocationArrow size={18} />
            </div>
            <div className='nav-icon-flag-delete'>
              <GiGolfFlag size={24} />
              <MdDeleteForever size={22} />
            </div>
            <div className='nav-icon-arrow'>
              <FaPaintBrush size={18} />
            </div>
            <div className='nav-icon-arrow'>
              <LuShare2 size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Header Container */}
      <div className="container-header" style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 1000, padding: 10, borderRadius: 4 }}>
        <div className='container-header-select'>
          <div className='header-select_web'>
            <div className='slider-container-range Plot-saved'>
              <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5325 22.0526L9.76623 15.5749L1 22.0526V2.61943C1 2.18993 1.2309 1.77802 1.64189 1.47432C2.05289 1.17062 2.61031 1 3.19156 1H16.3409C16.9221 1 17.4796 1.17062 17.8906 1.47432C18.3015 1.77802 18.5325 2.18993 18.5325 2.61943V22.0526Z" fill="#807A13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div className='slider-Plot-saved'>
                <span>Thửa đã lưu</span>
                <p><FaAngleDown /></p>
              </div>
            </div>
            <div className='slider-container-range Show-price slider-web' onClick={() => setIsShowModalPrice(true)}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9996 20.2857C16.128 20.2857 20.2853 16.1284 20.2853 11C20.2853 5.87165 16.128 1.71429 10.9996 1.71429C5.87122 1.71429 1.71387 5.87165 1.71387 11C1.71387 16.1284 5.87122 20.2857 10.9996 20.2857Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.4309 8.46056C13.3473 8.22399 13.2183 8.00885 13.0543 7.82565C12.7055 7.43596 12.1987 7.19073 11.6346 7.19073H10.1602C9.22119 7.19073 8.45996 7.95196 8.45996 8.89098C8.45996 9.68999 9.01632 10.3812 9.79688 10.552L12.0416 11.043C12.916 11.2343 13.5393 12.0092 13.5393 12.9043C13.5393 13.9563 12.6865 14.8098 11.6346 14.8098H10.3647C9.53538 14.8098 8.82983 14.2797 8.56835 13.5399" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11 7.19046V5.28571" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11 16.714V14.8093" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <div className='slider-container-Show-price'>
                <span>Hiển thị giá</span>
                <p><FaAngleDown /></p>
              </div>
            </div>
          </div>
          <div className='slider-container_web'>
            <div className='slider-container-location'>
              <GrLocation />
              <span>Phường 26, Quận Bình Thạnh, TP. Hồ Chí Minh</span>
            </div>
            <div className='container-header-option web-slider'>
              <div className={`container-header-option-item ${activeItem === 0 ? 'active_item' : ''}`} onClick={() => handleClick(0)}>Quy hoạch 2030</div>
              <div className={`container-header-option-item ${activeItem === 1 ? 'active_item' : ''}`} onClick={() => handleClick(1)}>Quy hoạch 2024</div>
              <div className={`container-header-option-item ${activeItem === 2 ? 'active_item' : ''}`} onClick={() => handleClick(2)}>QH Xây dựng</div>
              <div ref={buttonRef} className={`container-header-option-item ${activeItem === 3 ? 'active_item' : ''}`} onClick={() => handleClick(3)}>Quy hoạch khác</div>
            </div>
          </div>

          <div className='slider-container-range Show-price show-mobi' onClick={() => setIsShowModalPrice(true)}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9996 20.2857C16.128 20.2857 20.2853 16.1284 20.2853 11C20.2853 5.87165 16.128 1.71429 10.9996 1.71429C5.87122 1.71429 1.71387 5.87165 1.71387 11C1.71387 16.1284 5.87122 20.2857 10.9996 20.2857Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.4309 8.46056C13.3473 8.22399 13.2183 8.00885 13.0543 7.82565C12.7055 7.43596 12.1987 7.19073 11.6346 7.19073H10.1602C9.22119 7.19073 8.45996 7.95196 8.45996 8.89098C8.45996 9.68999 9.01632 10.3812 9.79688 10.552L12.0416 11.043C12.916 11.2343 13.5393 12.0092 13.5393 12.9043C13.5393 13.9563 12.6865 14.8098 11.6346 14.8098H10.3647C9.53538 14.8098 8.82983 14.2797 8.56835 13.5399" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11 7.19046V5.28571" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11 16.714V14.8093" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <div className='slider-container-Show-price'>
              <span>Hiển thị giá</span>
              <p><FaAngleDown /></p>
            </div>
          </div>
        </div>
        <div className='container-header-option show-mobi'>
          <div className={`container-header-option-item ${activeItem === 0 ? 'active_item' : ''}`} onClick={() => handleClick(0)}>Quy hoạch 2030</div>
          <div className={`container-header-option-item ${activeItem === 1 ? 'active_item' : ''}`} onClick={() => handleClick(1)}>Quy hoạch 2024</div>
          <div className={`container-header-option-item ${activeItem === 2 ? 'active_item' : ''}`} onClick={() => handleClick(2)}>QH Xây dựng</div>
          <div ref={buttonRef} className={`container-header-option-item ${activeItem === 3 ? 'active_item' : ''}`} onClick={() => handleClick(3)}>Quy hoạch khác</div>
        </div>
      </div>

      {/* Map Container */}
      <MapContainer
        style={mapContainerStyle}
        center={center}
        zoom={mapZoom}
        whenCreated={map => { mapRef.current = map; }}
      >
        <MapEvents />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {selectedPosition && ( // Hiển thị marker tại vị trí đã chọn trên bản đồ
          <Marker position={selectedPosition} icon={L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41]
          })}>
            <Popup>Vị trí đã chọn</Popup>
          </Marker>
        )}
      </MapContainer>

      <ModalDownMenu
        show={isModalVisible}
        handleClose={handleModalClose}
        style={{ top: modalPosition.top, left: modalPosition.left }}
      />
      <ModalPriceFilter
        showPrice={isShowModalPrice}
        handleClosePrice={handleClosePrice}
      />
    </div>
  );
}

export default Home;