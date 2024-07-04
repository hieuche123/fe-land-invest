import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalDownMenu.scss'
import MauNau from '../../../assets/test1.jpg'
import { useNavigate } from 'react-router-dom';
const ModalDownMenu = (props) => {
    const { handleClose, show } = props

    return (
        <Modal className='modal-auth ' aria-labelledby="contained-modal-title-vcenter"
            centered show={show} onHide={handleClose}
        >
            <div className='modal-auth-container'>
                <Modal.Header closeButton>
                    <Modal.Title className='modal-DownMenu-title'>QUY HOẠCH KHÁC</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-DownMenu'>
                        <div className='DownMenu-Surrounded'>
                            <div className='body-modal-DownMenu DownMenu-margin'>
                                <div className='body-modal-DownMenu-img'>
                                    <img src={MauNau} />
                                </div>
                                <div className='body-modal-DownMenu_title'>
                                    Quy hoạch SDĐ Quận Bình Thạnh - Điều chỉnh QH chung TP Hồ Chí Minh đến năm 2040, tầm nhìn đến 2060
                                </div>
                            </div>
                        </div>
                        <div className='DownMenu-Surrounded'>
                            <div className='body-modal-DownMenu'>
                                <div className='body-modal-DownMenu-img'>
                                    <img src={MauNau} />
                                </div>
                                <div className='body-modal-DownMenu_title'>
                                    Quy hoạch SDĐ Quận Bình Thạnh - Điều chỉnh QH chung TP Hồ Chí Minh đến năm 2040, tầm nhìn đến 2060
                                </div>
                            </div>
                        </div>
                        <div className='DownMenu-Surrounded'>
                            <div className='body-modal-DownMenu'>
                                <div className='body-modal-DownMenu-img'>
                                    <img src={MauNau} />
                                </div>
                                <div className='body-modal-DownMenu_title'>
                                    Quy hoạch SDĐ Quận Bình Thạnh - Điều chỉnh QH chung TP Hồ Chí Minh đến năm 2040, tầm nhìn đến 2060
                                </div>
                            </div>
                        </div>
                        <div className='DownMenu-Surrounded'>
                            <div className='body-modal-DownMenu'>
                                <div className='body-modal-DownMenu-img'>
                                    <img src={MauNau} />
                                </div>
                                <div className='body-modal-DownMenu_title'>
                                    Quy hoạch SDĐ Quận Bình Thạnh - Điều chỉnh QH chung TP Hồ Chí Minh đến năm 2040, tầm nhìn đến 2060
                                </div>
                            </div>
                        </div>
                        <div className='DownMenu-Surrounded'>
                            <div className='body-modal-DownMenu'>
                                <div className='body-modal-DownMenu-img'>
                                    <img src={MauNau} />
                                </div>
                                <div className='body-modal-DownMenu_title'>
                                    Quy hoạch SDĐ Quận Bình Thạnh - Điều chỉnh QH chung TP Hồ Chí Minh đến năm 2040, tầm nhìn đến 2060
                                </div>
                            </div>
                        </div>
                        <div className='DownMenu-Surrounded'>
                            <div className='body-modal-DownMenu'>
                                <div className='body-modal-DownMenu-img'>
                                    <img src={MauNau} />
                                </div>
                                <div className='body-modal-DownMenu_title'>
                                    Quy hoạch SDĐ Quận Bình Thạnh - Điều chỉnh QH chung TP Hồ Chí Minh đến năm 2040, tầm nhìn đến 2060
                                </div>
                            </div>
                        </div>
                        <div className='DownMenu-Surrounded'>
                            <div className='body-modal-DownMenu'>
                                <div className='body-modal-DownMenu-img'>
                                    <img src={MauNau} />
                                </div>
                                <div className='body-modal-DownMenu_title'>
                                    Quy hoạch SDĐ Quận Bình Thạnh - Điều chỉnh QH chung TP Hồ Chí Minh đến năm 2040, tầm nhìn đến 2060
                                </div>
                            </div>
                        </div>
                        <div className='DownMenu-Surrounded'>
                            <div className='body-modal-DownMenu'>
                                <div className='body-modal-DownMenu-img'>
                                    <img src={MauNau} />
                                </div>
                                <div className='body-modal-DownMenu_title'>
                                    Quy hoạch SDĐ Quận Bình Thạnh - Điều chỉnh QH chung TP Hồ Chí Minh đến năm 2040, tầm nhìn đến 2060
                                </div>
                            </div>
                        </div>
                        <div className='DownMenu-Surrounded'>
                            <div className='body-modal-DownMenu'>
                                <div className='body-modal-DownMenu-img'>
                                    <img src={MauNau} />
                                </div>
                                <div className='body-modal-DownMenu_title'>
                                    Quy hoạch SDĐ Quận Bình Thạnh - Điều chỉnh QH chung TP Hồ Chí Minh đến năm 2040, tầm nhìn đến 2060
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </div>
        </Modal>
    );
}

export default ModalDownMenu;