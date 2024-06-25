import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Auction.scss';
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from 'react-router-dom';
import { fetchDistrictsByProvinces, fetchFilteredAuctions, fetchProvinces } from '../../../services/api';
import { useDebounce } from '../../Hooks/useDebounce';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


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
  const [auctionResults, setAuctionResults] = useState([])
  const [searchMode, setSearchMode] = useState("basic")
  const debouncedData = useDebounce(formData, 1000)
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

  const toggleSearchMode = () => {
      setSearchMode(searchMode === 'basic' ? 'advanced' : 'basic')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
      const results = await fetchFilteredAuctions(debouncedData)
      setAuctionResults(results)
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
        <span className={`search-option ${searchMode === 'basic'? 'active' : ''}`} onClick={() => toggleSearchMode('basic')} >Tìm kiếm cơ bản</span>
        <span className={`search-option ${searchMode === 'advanced'? 'active' : ''}`} onClick={() => toggleSearchMode('advanced')} >Tìm kiếm nâng cao</span>
      </div>
     { searchMode === 'advanced' ? (<Form onSubmit={handleSubmit}>
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
                {/* <Form.Control 
                  type="date" 
                  name="fromDateAuction" 
                  value={formData.fromDateAuction} 
                  onChange={handleChange}
                /> */}
                <DatePicker
                  selected={formData.fromDateAuction ? new Date(formData.fromDateAuction) : null}
                  onChange={(date) => handleChange({ target: { name: "fromDateAuction", value: date } })}
                  placeholderText="Thời gian tổ chức việc đấu giá"
                  className="form-control"
                  dateFormat="dd/MM/yyyy"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formToDateAuction">
              <Form.Label column sm={4}>Đến ngày</Form.Label>
              <Col sm={8}>
                {/* <Form.Control 
                  type="date" 
                  name="toDateAuction" 
                  value={formData.toDateAuction} 
                  onChange={handleChange}
                /> */}
                <DatePicker
                  selected={formData.toDateAuction ? new Date(formData.toDateAuction) : null}
                  onChange={(date) => handleChange({ target: { name: "toDateAuction", value: date } })}
                  placeholderText="Thời gian tổ chức việc đấu giá"
                  className="form-control"
                  dateFormat="dd/MM/yyyy"
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
                  <option>Ngày tổ chức đấu giá</option>
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
                {/* <Form.Control 
                  type="date" 
                  name="fromDateAnnouncement" 
                  value={formData.fromDateAnnouncement} 
                  onChange={handleChange}
                /> */}
                <DatePicker
                  selected={formData.fromDateAnnouncement ? new Date(formData.fromDateAnnouncement) : null}
                  onChange={(date) => handleChange({ target: { name: "fromDateAnnouncement", value: date } })}
                  placeholderText="Thời gian công khai việc đấu giá"
                  className="form-control"
                  dateFormat="dd/MM/yyyy"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formToDateAnnouncement">
              <Form.Label column sm={4}>Đến ngày</Form.Label>
              <Col sm={8}>
                {/* <Form.Control 
                  type="date" 
                  name="toDateAnnouncement" 
                  value={formData.toDateAnnouncement} 
                  onChange={handleChange}
                /> */}
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
      </Form> ):
      (
        <div className=' search-basic'>
            <input type='text' placeholder='Tìm kiếm cơ bản ......'/>
            <button type='submit'>Tìm Kiếm</button>
        </div>
      )}
        
      {
        auctionResults.length > 0 &&(
          <div className=' mt-4'>
            <div>
              <h3>Kết quả tìm kiếm</h3>
            </div>
            <div className='m-2'>
              <table className='auction-results-table'>
                <thead className='auction-results-thead'>
                  <tr className='auction-result-row-thead'>
                      <th>ID</th>
                      <th>Tên tài sản</th>
                      <th>Tổ chức ĐGTS</th>
                      <th>Người có tài sản</th>
                      <th>Tỉnh thành</th>
                      <th>Quận/Huyện</th>
                      <th>Thời gian tổ chức đấu giá</th>
                      <th>Thời gian tổ chức đấu giá</th>
                      <th>Thời gian công khai việc đấu giá</th>
                      <th>Thời gian công khai việc đấu giá</th>
                      <th>Giá khởi điểm từ</th>
                      <th>Giá khởi điểm đến</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    auctionResults.map((e) => (
                      <tr key={e.id} className='auction-result-row-body' >
                        <td>{e.id}</td>
                        <td>{e.assetName}</td>
                        <td>{e.organization}</td>
                        <td>{e.ownerName}</td>
                        <td>{e.province}</td>
                        <td>{e.district}</td>
                        <td>{e.fromDateAuction}</td>
                        <td>{e.toDateAuction}</td>
                        <td>{e.fromDateAnnouncement}</td>
                        <td>{e.toDateAnnouncement}</td>
                        <td>{e.fromPrice}</td>
                        <td>{e.toPrice}</td>
                        <td>{e.sortOption}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        )
      }
    </Container>
  );
};

export default AuctionForm;
