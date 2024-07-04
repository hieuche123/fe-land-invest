import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalDownMenu.scss'
import { IoIosCheckboxOutline } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { useState } from 'react';

const ModalPriceFilter = (props) => {
    const { handleClosePrice, showPrice } = props;
    const [activeStates, setActiveStates] = useState(Array(18).fill(false));

    const handleToggle = (index) => {
        const newActiveStates = [...activeStates];
        newActiveStates[index] = !newActiveStates[index];
        setActiveStates(newActiveStates);
    }

    return (
        <Modal className='modal-Price-Filter PriceFilter' aria-labelledby="contained-modal-title-vcenter"
            centered show={showPrice} onHide={handleClosePrice} backdrop={false}
        >
            <div className='modal-PriceFilter-container'>
                <Modal.Header closeButton>
                    <Modal.Title className='modal-PriceFilter-title'>BỘ LỌC GIÁ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-PriceFilter_Menu'>
                        <div className='body-PriceFilter '>
                            <div className={`body-PriceFilter-house-sale ${activeStates[0] ? 'PriceFilter-modal' : ''}`}>
                                <span >{activeStates[0] ?
                                    <svg onClick={() => handleToggle(0)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.8116 1H6.93068C4.11856 1 1.83887 2.85975 1.83887 5.15385V14.8462C1.83887 17.1403 4.11856 19 6.93068 19H18.8116C21.6238 19 23.9034 17.1403 23.9034 14.8462V5.15385C23.9034 2.85975 21.6238 1 18.8116 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17.8223 6.88458L11.0332 13.8077L7.63867 11.7307" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    :
                                    <svg onClick={() => handleToggle(0)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.9727 1H6.09181C3.27969 1 1 2.85975 1 5.15385V14.8462C1 17.1403 3.27969 19 6.09181 19H17.9727C20.7849 19 23.0645 17.1403 23.0645 14.8462V5.15385C23.0645 2.85975 20.7849 1 17.9727 1Z" stroke="#030303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                }
                                </span>
                                <p>Nhà bán</p>
                            </div>
                            <div className={`body-PriceFilter-land-sale ${activeStates[1] ? 'PriceFilter-modal' : ''}`}>
                                <span >{activeStates[1] ?
                                    <svg onClick={() => handleToggle(1)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.8116 1H6.93068C4.11856 1 1.83887 2.85975 1.83887 5.15385V14.8462C1.83887 17.1403 4.11856 19 6.93068 19H18.8116C21.6238 19 23.9034 17.1403 23.9034 14.8462V5.15385C23.9034 2.85975 21.6238 1 18.8116 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17.8223 6.88458L11.0332 13.8077L7.63867 11.7307" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    :
                                    <svg onClick={() => handleToggle(1)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.9727 1H6.09181C3.27969 1 1 2.85975 1 5.15385V14.8462C1 17.1403 3.27969 19 6.09181 19H17.9727C20.7849 19 23.0645 17.1403 23.0645 14.8462V5.15385C23.0645 2.85975 20.7849 1 17.9727 1Z" stroke="#030303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                }
                                </span>
                                <p>Đất bán</p>
                            </div>
                        </div>
                        <div className='Square-meter-price'>
                            <div className={`Square-price ${activeStates[2] ? 'Square-modal' : ''}`}>
                                <span >{activeStates[2] ?
                                    <svg onClick={() => handleToggle(2)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.8116 1H6.93068C4.11856 1 1.83887 2.85975 1.83887 5.15385V14.8462C1.83887 17.1403 4.11856 19 6.93068 19H18.8116C21.6238 19 23.9034 17.1403 23.9034 14.8462V5.15385C23.9034 2.85975 21.6238 1 18.8116 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17.8223 6.88458L11.0332 13.8077L7.63867 11.7307" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    :
                                    <svg onClick={() => handleToggle(2)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.9727 1H6.09181C3.27969 1 1 2.85975 1 5.15385V14.8462C1 17.1403 3.27969 19 6.09181 19H17.9727C20.7849 19 23.0645 17.1403 23.0645 14.8462V5.15385C23.0645 2.85975 20.7849 1 17.9727 1Z" stroke="#030303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                }
                                </span>
                                <p>Giá/m<sup>2</sup> + giá/mn</p>
                            </div>
                            <div className={`Square-meter ${activeStates[3] ? 'Square-modal' : ''}`}>
                                <span >{activeStates[3] ?
                                    <svg onClick={() => handleToggle(3)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.8116 1H6.93068C4.11856 1 1.83887 2.85975 1.83887 5.15385V14.8462C1.83887 17.1403 4.11856 19 6.93068 19H18.8116C21.6238 19 23.9034 17.1403 23.9034 14.8462V5.15385C23.9034 2.85975 21.6238 1 18.8116 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17.8223 6.88458L11.0332 13.8077L7.63867 11.7307" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    :
                                    <svg onClick={() => handleToggle(3)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.9727 1H6.09181C3.27969 1 1 2.85975 1 5.15385V14.8462C1 17.1403 3.27969 19 6.09181 19H17.9727C20.7849 19 23.0645 17.1403 23.0645 14.8462V5.15385C23.0645 2.85975 20.7849 1 17.9727 1Z" stroke="#030303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                }
                                </span>
                                <p>Diện tích + giá bán</p>
                            </div>
                            <div className='border_bottom-modal'></div>
                            <div className={`Square-price ${activeStates[4] ? 'Square-modal' : ''}`}>
                                <span >{activeStates[4] ?
                                    <svg onClick={() => handleToggle(4)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.8116 1H6.93068C4.11856 1 1.83887 2.85975 1.83887 5.15385V14.8462C1.83887 17.1403 4.11856 19 6.93068 19H18.8116C21.6238 19 23.9034 17.1403 23.9034 14.8462V5.15385C23.9034 2.85975 21.6238 1 18.8116 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17.8223 6.88458L11.0332 13.8077L7.63867 11.7307" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    :
                                    <svg onClick={() => handleToggle(4)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.9727 1H6.09181C3.27969 1 1 2.85975 1 5.15385V14.8462C1 17.1403 3.27969 19 6.09181 19H17.9727C20.7849 19 23.0645 17.1403 23.0645 14.8462V5.15385C23.0645 2.85975 20.7849 1 17.9727 1Z" stroke="#030303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                }
                                </span>
                                <p>Tin đăng từ 0 - 90 ngày</p>
                            </div>
                            <div className={`Square-meter ${activeStates[5] ? 'Square-modal' : ''}`}>
                                <span >{activeStates[5] ?
                                    <svg onClick={() => handleToggle(5)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.8116 1H6.93068C4.11856 1 1.83887 2.85975 1.83887 5.15385V14.8462C1.83887 17.1403 4.11856 19 6.93068 19H18.8116C21.6238 19 23.9034 17.1403 23.9034 14.8462V5.15385C23.9034 2.85975 21.6238 1 18.8116 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17.8223 6.88458L11.0332 13.8077L7.63867 11.7307" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    :
                                    <svg onClick={() => handleToggle(5)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.9727 1H6.09181C3.27969 1 1 2.85975 1 5.15385V14.8462C1 17.1403 3.27969 19 6.09181 19H17.9727C20.7849 19 23.0645 17.1403 23.0645 14.8462V5.15385C23.0645 2.85975 20.7849 1 17.9727 1Z" stroke="#030303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                }
                                </span>
                                <p>Tin đăng từ 90 - 180 ngày</p>
                            </div>
                            <div className={`Square-price ${activeStates[6] ? 'Square-modal' : ''}`}>
                                <span >{activeStates[6] ?
                                    <svg onClick={() => handleToggle(6)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.8116 1H6.93068C4.11856 1 1.83887 2.85975 1.83887 5.15385V14.8462C1.83887 17.1403 4.11856 19 6.93068 19H18.8116C21.6238 19 23.9034 17.1403 23.9034 14.8462V5.15385C23.9034 2.85975 21.6238 1 18.8116 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17.8223 6.88458L11.0332 13.8077L7.63867 11.7307" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    :
                                    <svg onClick={() => handleToggle(6)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.9727 1H6.09181C3.27969 1 1 2.85975 1 5.15385V14.8462C1 17.1403 3.27969 19 6.09181 19H17.9727C20.7849 19 23.0645 17.1403 23.0645 14.8462V5.15385C23.0645 2.85975 20.7849 1 17.9727 1Z" stroke="#030303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                }
                                </span>
                                <p>Tin đăng từ 181 - 360 ngày</p>
                            </div>
                            <div className={`Square-meter ${activeStates[7] ? 'Square-modal' : ''}`}>
                                <span >{activeStates[7] ?
                                    <svg onClick={() => handleToggle(7)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.8116 1H6.93068C4.11856 1 1.83887 2.85975 1.83887 5.15385V14.8462C1.83887 17.1403 4.11856 19 6.93068 19H18.8116C21.6238 19 23.9034 17.1403 23.9034 14.8462V5.15385C23.9034 2.85975 21.6238 1 18.8116 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17.8223 6.88458L11.0332 13.8077L7.63867 11.7307" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    :
                                    <svg onClick={() => handleToggle(7)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.9727 1H6.09181C3.27969 1 1 2.85975 1 5.15385V14.8462C1 17.1403 3.27969 19 6.09181 19H17.9727C20.7849 19 23.0645 17.1403 23.0645 14.8462V5.15385C23.0645 2.85975 20.7849 1 17.9727 1Z" stroke="#030303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                }
                                </span>
                                <p>Tin đã bán</p>
                            </div>
                        </div>
                        <div className='body-PriceFilter_price'>
                            <div className='body-Filter_price'>
                                <div className={`body-Price-house ${activeStates[8] ? 'PriceFilter-modal' : ''}`}>
                                    <span >{activeStates[8] ?
                                        <svg onClick={() => handleToggle(8)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.8116 1H6.93068C4.11856 1 1.83887 2.85975 1.83887 5.15385V14.8462C1.83887 17.1403 4.11856 19 6.93068 19H18.8116C21.6238 19 23.9034 17.1403 23.9034 14.8462V5.15385C23.9034 2.85975 21.6238 1 18.8116 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17.8223 6.88458L11.0332 13.8077L7.63867 11.7307" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        :
                                        <svg onClick={() => handleToggle(8)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.9727 1H6.09181C3.27969 1 1 2.85975 1 5.15385V14.8462C1 17.1403 3.27969 19 6.09181 19H17.9727C20.7849 19 23.0645 17.1403 23.0645 14.8462V5.15385C23.0645 2.85975 20.7849 1 17.9727 1Z" stroke="#030303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    }
                                    </span>
                                    <p>Dưới 200m<sup>2</sup></p>
                                </div>
                                <div className={`body-Price-land ${activeStates[9] ? 'PriceFilter-modal' : ''}`}>
                                    <span >{activeStates[9] ?
                                        <svg onClick={() => handleToggle(9)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.8116 1H6.93068C4.11856 1 1.83887 2.85975 1.83887 5.15385V14.8462C1.83887 17.1403 4.11856 19 6.93068 19H18.8116C21.6238 19 23.9034 17.1403 23.9034 14.8462V5.15385C23.9034 2.85975 21.6238 1 18.8116 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17.8223 6.88458L11.0332 13.8077L7.63867 11.7307" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        :
                                        <svg onClick={() => handleToggle(9)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.9727 1H6.09181C3.27969 1 1 2.85975 1 5.15385V14.8462C1 17.1403 3.27969 19 6.09181 19H17.9727C20.7849 19 23.0645 17.1403 23.0645 14.8462V5.15385C23.0645 2.85975 20.7849 1 17.9727 1Z" stroke="#030303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    }
                                    </span>
                                    <p>200m<sup>2</sup> - 500m<sup>2</sup></p>
                                </div>
                            </div>
                            <div className='body-Filter_price boy-paading'>
                                <div className={`body-Price-house ${activeStates[10] ? 'PriceFilter-modal' : ''}`}>
                                    <span >{activeStates[10] ?
                                        <svg onClick={() => handleToggle(10)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.8116 1H6.93068C4.11856 1 1.83887 2.85975 1.83887 5.15385V14.8462C1.83887 17.1403 4.11856 19 6.93068 19H18.8116C21.6238 19 23.9034 17.1403 23.9034 14.8462V5.15385C23.9034 2.85975 21.6238 1 18.8116 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17.8223 6.88458L11.0332 13.8077L7.63867 11.7307" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        :
                                        <svg onClick={() => handleToggle(10)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.9727 1H6.09181C3.27969 1 1 2.85975 1 5.15385V14.8462C1 17.1403 3.27969 19 6.09181 19H17.9727C20.7849 19 23.0645 17.1403 23.0645 14.8462V5.15385C23.0645 2.85975 20.7849 1 17.9727 1Z" stroke="#030303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    }
                                    </span>
                                    <p>500m<sup>2</sup> - 1000m<sup>2</sup></p>
                                </div>
                                <div className={`body-Price-land ${activeStates[11] ? 'PriceFilter-modal' : ''}`}>
                                    <span >{activeStates[11] ?
                                        <svg onClick={() => handleToggle(11)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.8116 1H6.93068C4.11856 1 1.83887 2.85975 1.83887 5.15385V14.8462C1.83887 17.1403 4.11856 19 6.93068 19H18.8116C21.6238 19 23.9034 17.1403 23.9034 14.8462V5.15385C23.9034 2.85975 21.6238 1 18.8116 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17.8223 6.88458L11.0332 13.8077L7.63867 11.7307" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        :
                                        <svg onClick={() => handleToggle(11)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.9727 1H6.09181C3.27969 1 1 2.85975 1 5.15385V14.8462C1 17.1403 3.27969 19 6.09181 19H17.9727C20.7849 19 23.0645 17.1403 23.0645 14.8462V5.15385C23.0645 2.85975 20.7849 1 17.9727 1Z" stroke="#030303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    }
                                    </span>
                                    <p>Trên 1000m<sup>2</sup></p>
                                </div>
                            </div>
                            <div className='border_bottom-modal'></div>
                            <div className='body-Filter_price'>
                                <div className={`body-Price-house ${activeStates[12] ? 'Square-modal' : ''}`}>
                                    <span >{activeStates[12] ?
                                        <svg onClick={() => handleToggle(12)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.8116 1H6.93068C4.11856 1 1.83887 2.85975 1.83887 5.15385V14.8462C1.83887 17.1403 4.11856 19 6.93068 19H18.8116C21.6238 19 23.9034 17.1403 23.9034 14.8462V5.15385C23.9034 2.85975 21.6238 1 18.8116 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17.8223 6.88458L11.0332 13.8077L7.63867 11.7307" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        :
                                        <svg onClick={() => handleToggle(12)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.9727 1H6.09181C3.27969 1 1 2.85975 1 5.15385V14.8462C1 17.1403 3.27969 19 6.09181 19H17.9727C20.7849 19 23.0645 17.1403 23.0645 14.8462V5.15385C23.0645 2.85975 20.7849 1 17.9727 1Z" stroke="#030303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    }
                                    </span>
                                    <p>Dưới 500tr</p>
                                </div>
                                <div className={`body-Price-land ${activeStates[13] ? 'Square-modal' : ''}`}>
                                    <span >{activeStates[13] ?
                                        <svg onClick={() => handleToggle(13)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.8116 1H6.93068C4.11856 1 1.83887 2.85975 1.83887 5.15385V14.8462C1.83887 17.1403 4.11856 19 6.93068 19H18.8116C21.6238 19 23.9034 17.1403 23.9034 14.8462V5.15385C23.9034 2.85975 21.6238 1 18.8116 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17.8223 6.88458L11.0332 13.8077L7.63867 11.7307" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        :
                                        <svg onClick={() => handleToggle(13)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.9727 1H6.09181C3.27969 1 1 2.85975 1 5.15385V14.8462C1 17.1403 3.27969 19 6.09181 19H17.9727C20.7849 19 23.0645 17.1403 23.0645 14.8462V5.15385C23.0645 2.85975 20.7849 1 17.9727 1Z" stroke="#030303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    }
                                    </span>
                                    <p>500tr - 1 tỷ</p>
                                </div>
                            </div>
                            <div className='body-Filter_price boy-paading'>
                                <div className={`body-Price-house ${activeStates[14] ? 'Square-modal' : ''}`}>
                                    <span >{activeStates[14] ?
                                        <svg onClick={() => handleToggle(14)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.8116 1H6.93068C4.11856 1 1.83887 2.85975 1.83887 5.15385V14.8462C1.83887 17.1403 4.11856 19 6.93068 19H18.8116C21.6238 19 23.9034 17.1403 23.9034 14.8462V5.15385C23.9034 2.85975 21.6238 1 18.8116 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17.8223 6.88458L11.0332 13.8077L7.63867 11.7307" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        :
                                        <svg onClick={() => handleToggle(14)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.9727 1H6.09181C3.27969 1 1 2.85975 1 5.15385V14.8462C1 17.1403 3.27969 19 6.09181 19H17.9727C20.7849 19 23.0645 17.1403 23.0645 14.8462V5.15385C23.0645 2.85975 20.7849 1 17.9727 1Z" stroke="#030303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    }
                                    </span>
                                    <p>1 tỷ - 2 tỷ</p>
                                </div>
                                <div className={`body-Price-land ${activeStates[15] ? 'Square-modal' : ''}`}>
                                    <span >{activeStates[15] ?
                                        <svg onClick={() => handleToggle(15)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.8116 1H6.93068C4.11856 1 1.83887 2.85975 1.83887 5.15385V14.8462C1.83887 17.1403 4.11856 19 6.93068 19H18.8116C21.6238 19 23.9034 17.1403 23.9034 14.8462V5.15385C23.9034 2.85975 21.6238 1 18.8116 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17.8223 6.88458L11.0332 13.8077L7.63867 11.7307" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        :
                                        <svg onClick={() => handleToggle(15)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.9727 1H6.09181C3.27969 1 1 2.85975 1 5.15385V14.8462C1 17.1403 3.27969 19 6.09181 19H17.9727C20.7849 19 23.0645 17.1403 23.0645 14.8462V5.15385C23.0645 2.85975 20.7849 1 17.9727 1Z" stroke="#030303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    }
                                    </span>
                                    <p>2 tỷ - 4 tỷ</p>
                                </div>
                            </div>
                            <div className='body-Filter_price'>
                                <div className={`body-Price-house ${activeStates[16] ? 'Square-modal' : ''}`}>
                                    <span >{activeStates[16] ?
                                        <svg onClick={() => handleToggle(16)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.8116 1H6.93068C4.11856 1 1.83887 2.85975 1.83887 5.15385V14.8462C1.83887 17.1403 4.11856 19 6.93068 19H18.8116C21.6238 19 23.9034 17.1403 23.9034 14.8462V5.15385C23.9034 2.85975 21.6238 1 18.8116 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17.8223 6.88458L11.0332 13.8077L7.63867 11.7307" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        :
                                        <svg onClick={() => handleToggle(16)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.9727 1H6.09181C3.27969 1 1 2.85975 1 5.15385V14.8462C1 17.1403 3.27969 19 6.09181 19H17.9727C20.7849 19 23.0645 17.1403 23.0645 14.8462V5.15385C23.0645 2.85975 20.7849 1 17.9727 1Z" stroke="#030303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    }
                                    </span>
                                    <p>4 tỷ - 10 tỷ</p>
                                </div>
                                <div className={`body-Price-land ${activeStates[17] ? 'Square-modal' : ''}`}>
                                    <span >{activeStates[17] ?
                                        <svg onClick={() => handleToggle(17)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.8116 1H6.93068C4.11856 1 1.83887 2.85975 1.83887 5.15385V14.8462C1.83887 17.1403 4.11856 19 6.93068 19H18.8116C21.6238 19 23.9034 17.1403 23.9034 14.8462V5.15385C23.9034 2.85975 21.6238 1 18.8116 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17.8223 6.88458L11.0332 13.8077L7.63867 11.7307" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        :
                                        <svg onClick={() => handleToggle(17)} width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.9727 1H6.09181C3.27969 1 1 2.85975 1 5.15385V14.8462C1 17.1403 3.27969 19 6.09181 19H17.9727C20.7849 19 23.0645 17.1403 23.0645 14.8462V5.15385C23.0645 2.85975 20.7849 1 17.9727 1Z" stroke="#030303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    }
                                    </span>
                                    <p>Trên 10 tỷ</p>
                                </div>
                            </div>
                        </div>


                    </div>

                </Modal.Body>
            </div>
        </Modal>
    );
}

export default ModalPriceFilter;