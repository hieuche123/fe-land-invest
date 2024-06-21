import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Auction.scss';
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from 'react-router-dom';
import { fetchDistrictsByProvinces, fetchProvinces } from '../../../services/api';

const AuctionForm = () => {
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

  const [province, setProvince] = useState([])
  const [district, setDistrict] = useState([])
  const [selectedProvinceId, setSelectedProvinceId] = useState('')
  const routes = [
    { path: "/", breadcrumb: 'Trang chủ' },
    { path: "/auctions", breadcrumb: "Thông báo đấu giá" },
  ];
  const breadcrumbs = useBreadcrumbs(routes);

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
        console.log("districtsData", districtsData)
      }
    };

    fetchDistrictsData();
  },[selectedProvinceId])

  const handleChange = async (e) => {
    const {name, value} = e.target
    console.log(name, value)
    setFormData({
      ...formData,
      [name]: value
    });
    if(name === 'province'){
      setSelectedProvinceId(value)
      setDistrict([])
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData",formData);
  };

  return (
    <Container className="auction-form-container">
      <div className='nav-page'>
        <div className="breadcrumb-container">
          {breadcrumbs.map(({ match, breadcrumb }, index, self) => (
            <NavLink className='nav-breadCrumbs' key={match.pathname} to={match.pathname}>
              <div className="breadcrumb-content">
                <span className="breadcrumb-text">{breadcrumb}</span>
                {index !== self.length - 1 && (
                  <span className="breadcrumb-icon">
                    <svg width="129" height="39" viewBox="0 0 129 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 3C0 1.34315 1.34315 0 3 0H107.381C108.113 0 108.82 0.267744 109.368 0.75279L127.524 16.8098C128.851 17.9835 128.877 20.0455 127.58 21.2527L109.381 38.1958C108.826 38.7126 108.095 39 107.337 39H3C1.34315 39 0 37.6569 0 36V3Z" fill="#D9D9D9"/>
                    </svg>
                  </span>
                )}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <h2 className="text-center">DANH SÁCH THÔNG BÁO CÔNG KHAI VIỆC ĐẤU GIÁ</h2>
      <div className='nav-search'>
        <span>Tìm kiếm cơ bản</span>
        <span>Tìm kiếm nâng cao</span>
      </div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} sm={12}> 
              <Form.Group as={Row} className="mb-3" controlId="formAssetName">
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
            <Form.Group as={Row} className="mb-3" controlId="formOrganization">
              <Form.Label column sm={4}>Tổ chức ĐGTS</Form.Label>
              <Col sm={8}>
                <Form.Control 
                  as="select" 
                  name="organization" 
                  value={formData.organization} 
                  onChange={handleChange}
                >
                  <option>Tất cả</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formFromDateAuction">
              <Form.Label column sm={4}>Từ ngày</Form.Label>
              <Col sm={8}>
                <Form.Control 
                  type="date" 
                  name="fromDateAuction" 
                  value={formData.fromDateAuction} 
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formToDateAuction">
              <Form.Label column sm={4}>Đến ngày</Form.Label>
              <Col sm={8}>
                <Form.Control 
                  type="date" 
                  name="toDateAuction" 
                  value={formData.toDateAuction} 
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formFromPrice">
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

            <Form.Group as={Row} className="mb-3" controlId="formToPrice">
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

            <Form.Group as={Row} className="mb-3" controlId="formSortOption">
              <Form.Label column sm={4}>Tiêu chí sắp xếp</Form.Label>
              <Col sm={8}>
                <Form.Control 
                  as="select" 
                  name="sortOption" 
                  value={formData.sortOption} 
                  onChange={handleChange}
                >
                  <option>Ngày công khai việc đấu giá</option>
                  {/* Thêm các tùy chọn khác */}
                </Form.Control>
              </Col>
            </Form.Group>
          </Col>
      {/* right */}
          <Col sm={6}>
            <Form.Group as={Row} className="mb-3" controlId="formOwnerName">
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

            <Form.Group as={Row} className="mb-3" controlId="formProvince">
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

            <Form.Group as={Row} className="mb-3" controlId="formDistrict">
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

            <Form.Group as={Row} className="mb-3" controlId="formFromDateAnnouncement">
              <Form.Label column sm={4}>Từ ngày</Form.Label>
              <Col sm={8}>
                <Form.Control 
                  type="date" 
                  name="fromDateAnnouncement" 
                  value={formData.fromDateAnnouncement} 
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formToDateAnnouncement">
              <Form.Label column sm={4}>Đến ngày</Form.Label>
              <Col sm={8}>
                <Form.Control 
                  type="date" 
                  name="toDateAnnouncement" 
                  value={formData.toDateAnnouncement} 
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center">
          <Button variant="primary" type="submit">Tìm kiếm</Button>
        </div>
      </Form>
    </Container>
  );
};

export default AuctionForm;
