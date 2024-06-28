import React from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './Auction.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { useDebounce } from "../Hooks/useDebounce";
import { fetchDistrictsByProvinces, fetchFilteredAuctions, fetchProvinces } from "../../services/api";
import { MapContainer, TileLayer } from "react-leaflet";
import { message } from "antd";

const AuctionSearch = () => {
    const [formData, setFormData] = useState({
        assetName: '',
        organization: '',
        ownerName: '',
        province: '',
        district: '',
        fromDateAuction: '',
        toDateAuction: '',
        fromDateAnnouncement: '',
        toDateAnnouncement: '',
        fromPrice: '',
        toPrice: '',
        sortOption: ''
      });

      
    //State
      const [province, setProvince] = useState([])
      const [district, setDistrict] = useState([])
      const [selectedProvinceId, setSelectedProvinceId] = useState('')
      const [auctionResults, setAuctionResults] = useState([])
      const debouncedData = useDebounce(formData, 1000)
      const [hanoiCoordinates, setHanoiCoordinates] = useState([21.0285, 105.8542]);

      useEffect(() => {
        // api provinces
        const fetchProvincesData = async () => {
          const data = await fetchProvinces()
          setProvince(data)
        }
        fetchProvincesData()
        // api district
        const fetchDistrictsData = async () => {
          if (selectedProvinceId) {
            const districtsData = await fetchDistrictsByProvinces(selectedProvinceId);
            setDistrict(districtsData);
            console.log(districtsData);
          }
        };
    
        fetchDistrictsData();
      },[selectedProvinceId])
    
      const handleChange = async (e) => {
        const {name, value} = e.target
        setFormData({
          ...formData,
          [name]: value
        });
        if(name === 'province'){
          setSelectedProvinceId(value)
          setDistrict([])
        }
    
      };

      const validateForm = () =>{
        for(let key in formData){
            if(formData[key] === ''){
                return false
            }
        }
        return true 
      }

      //Đổi định dạng ngày tháng năm theo ISO

      const formatDateToISO = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2); // Thêm '0' vào trước nếu tháng chỉ có 1 chữ số
        const day = ('0' + date.getDate()).slice(-2); // Thêm '0' vào trước nếu ngày chỉ có 1 chữ số
        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const seconds = ('0' + date.getSeconds()).slice(-2);
      
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
      }
    // Đổi định dạng theo DD/MM/YYYY
      const formDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2,'0');
        const month = String(date.getMonth() + 1).padStart(2,"0");
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}  ${day}/${month}/${year}`
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const startTime = debouncedData.fromDateAuction ? formatDateToISO(debouncedData.fromDateAuction) : null;
        const endTime = debouncedData.toDateAuction ? formatDateToISO(debouncedData.toDateAuction) : null;
        const results = await fetchFilteredAuctions(startTime, endTime);
        setAuctionResults(results);
        // if(validateForm()){
        //     try{
        //     }catch(error){
        //         console.error('Error fetching filtered auctions', error);
        //         message.error('Đã xảy ra lỗi khi tìm kiếm đấu giá')
        //     }
        // }else{
        //     message.error('Vui lòng điền đủ các trường')
        // }
      };
  return (
    <Container className=' m-0 p-0'>
            <div className=" auction-content">
                {/* Auction Map */}
                <div className="auction-map">
                    <MapContainer center={hanoiCoordinates} zoom={13} style={{ height: "100%", width: "100%" }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                    </MapContainer>
                </div>
                {/* Auction Form */}
                <div className="auction-form" >
                    <Form onSubmit={handleSubmit}>
                        <Row>
                        <Col xs={12} sm={12}> 
                            <Form.Group as={Row} className="mb-2" controlId="formAssetName">
                            <Form.Label column sm={2}>Tên tài sản</Form.Label>
                            <Col sm={10} >
                                <Form.Control 
                                type="text" 
                                name="assetName" 
                                value={formData.assetName} 
                                onChange={handleChange} 
                                placeholder="Tên tài sản"
                                />
                            </Col>
                            </Form.Group>
                        </Col>
                    {/* left */}
                        <Col sm={6}>
                            <Form.Group as={Row} className="mb-2" controlId="formOrganization">
                            <Form.Label column sm={4}>Tổ chức ĐGTS</Form.Label>
                            <Col sm={8}>
                                <Form.Control 
                                as="select" 
                                name="organization" 
                                value={formData.organization} 
                                onChange={handleChange}
                                >
                                <option value={'tất cả'}>Tất cả</option>
                                <option>tổ chức 1</option>

                                </Form.Control>
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-2" controlId="formFromDateAuction">
                            <Form.Label column sm={4}>Từ ngày</Form.Label>
                            <Col sm={8}>
                                <DatePicker
                                selected={formData.fromDateAuction ? new Date(formData.fromDateAuction) : null}
                                onChange={(date) => handleChange({ target: { name: "fromDateAuction", value: date } })}
                                placeholderText="Thời gian tổ chức việc đấu giá"
                                className="form-control"
                                dateFormat="dd/MM/yyyy"
                                />
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-2" controlId="formToDateAuction">
                            <Form.Label column sm={4}>Đến ngày</Form.Label>
                            <Col sm={8}>
                                <DatePicker
                                selected={formData.toDateAuction ? new Date(formData.toDateAuction) : null}
                                onChange={(date) => handleChange({ target: { name: "toDateAuction", value: date } })}
                                placeholderText="Thời gian tổ chức việc đấu giá"
                                className="form-control"
                                dateFormat="dd/MM/yyyy"
                                />
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-2" controlId="formFromPrice">
                            <Form.Label column sm={4}>Giá khởi điểm từ</Form.Label>
                            <Col sm={8}>
                                <Form.Control 
                                type="number" 
                                name="fromPrice" 
                                value={formData.fromPrice} 
                                onChange={handleChange} 
                                placeholder="Giá khởi điểm từ" 
                                />
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-2" controlId="formToPrice">
                            <Form.Label column sm={4}>Giá khởi điểm đến</Form.Label>
                            <Col sm={8}>
                                <Form.Control 
                                type="number" 
                                name="toPrice" 
                                value={formData.toPrice} 
                                onChange={handleChange} 
                                placeholder="Giá khởi điểm đến" 
                                />
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-2" controlId="formSortOption">
                            <Form.Label column sm={4}>Tiêu chí sắp xếp</Form.Label>
                            <Col sm={8}>
                                <Form.Control 
                                as="select" 
                                name="sortOption" 
                                value={formData.sortOption} 
                                onChange={handleChange}
                                >
                                <option value={'Ngày công khai việc đấu giá'}>Ngày công khai việc đấu giá</option>
                                <option>Ngày tổ chức đấu giá</option>
                                </Form.Control>
                            </Col>
                            </Form.Group>
                        </Col>
                    {/* right */}
                        <Col sm={6}>
                            <Form.Group as={Row} className="mb-2" controlId="formOwnerName">
                            <Form.Label column sm={4}>Người có tài sản</Form.Label>
                            <Col sm={8}>
                                <Form.Control 
                                type="text" 
                                name="ownerName" 
                                value={formData.ownerName} 
                                onChange={handleChange} 
                                placeholder="Họ và tên người có tài sản" 
                                />
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-2" controlId="formProvince">
                            <Form.Label column sm={4}>Tỉnh thành</Form.Label>
                            <Col sm={8}>
                                <Form.Control 
                                as="select" 
                                name="province" 
                                value={formData.province} 
                                onChange={(e) => {
                                    const selectedProvinceId = e.target.value;
                                    setSelectedProvinceId(selectedProvinceId);
                                    handleChange(e)
                                }}
                                >
                                <option>Tất cả</option>
                                {province.map((province, index)=>(
                                    <option key={index} value={province.TinhThanhPhoID}>{province.TenTinhThanhPho}</option>
                                ))}
                                </Form.Control>
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-2" controlId="formDistrict">
                            <Form.Label column sm={4}>Quận/huyện</Form.Label>
                            <Col sm={8}>
                                <Form.Control 
                                as="select" 
                                name="district" 
                                value={formData.district} 
                                onChange={handleChange}
                                disabled={!formData.province}
                                >
                                <option>Tất cả</option>
                                {district.map((district, index)=>(
                                    <option key={index} value={district.DistrictID}>{district.DistrictName}</option>
                                ))}
                                </Form.Control>
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-2" controlId="formFromDateAnnouncement">
                            <Form.Label column sm={4}>Từ ngày</Form.Label>
                            <Col sm={8}>
                                <DatePicker
                                selected={formData.fromDateAnnouncement ? new Date(formData.fromDateAnnouncement) : null}
                                onChange={(date) => handleChange({ target: { name: "fromDateAnnouncement", value: date } })}
                                placeholderText="Thời gian công khai việc đấu giá"
                                className="form-control"
                                dateFormat="dd/MM/yyyy"
                                />
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-2" controlId="formToDateAnnouncement">
                            <Form.Label column sm={4}>Đến ngày</Form.Label>
                            <Col sm={8}>
                                <DatePicker
                                selected={formData.toDateAnnouncement ? new Date(formData.toDateAnnouncement) : null}
                                onChange={(date) => handleChange({ target: { name: "toDateAnnouncement", value: date } })}
                                placeholderText="Thời gian công khai việc đấu giá"
                                className="form-control"
                                dateFormat="dd/MM/yyyy"
                                
                                />
                            </Col>
                            </Form.Group>
                        </Col>
                        </Row>
                <div className="text-center">
                <Button variant="primary" type="submit">Tìm kiếm</Button>
                </div>
            </Form>
            </div>
        </div>
        <div className="search-results">
            <div className="text-search">
                <h2>Danh sách tìm kiếm</h2>
            </div>
            <div className="list-search-result">
               {
                auctionResults.length > 0 ? (
                    auctionResults.map((e, index)=>(
                        <div className="search-container">
                            <div className="description-search">
                                <p>{e.Title}</p>
                                <span className='time-auction'>
                                    <label>(Đăng ký tham gia đấu giá từ {formDate(e.RegistrationStartTime)} đến {formDate(e.RegistrationEndTime)}; Thời gian tổ chức đấu giá: {formDate(e.EventSchedule)})</label>
                                </span>
                            </div>
                            <div className="img-search">
                                <img src={e.img1} alt=""/>
                                <img src={e.img2} alt=""/>
                                <img src={e.img2} alt=""/>
                            </div>
                        </div>
                        
                    ))
                ) : (
                    <p>Không có bản ghi</p>
                )
               }
            </div>
        </div>
                        
        </Container>
  )
}

export default AuctionSearch
