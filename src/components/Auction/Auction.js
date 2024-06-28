import { Container } from "react-bootstrap";
import './Auction.scss'
import AuctionSearch from "./AuctionSearch";




const Auction = () => {    
    return (
        <Container>
            <div className="auction-container-form">
                <div className=" text-auction">
                    <span className="icon-auction">
                    <svg width="50" height="50" viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 53.3234H28.4057" stroke="#B7A800" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M25.0183 53.3234V43.3234H6.38745V53.3234" stroke="#B7A800" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M27.6832 4.17157L15.5391 18.5117C14.2163 20.0738 14.2163 22.6064 15.5391 24.1686L20.9045 30.5042C22.2274 32.0663 24.3722 32.0663 25.6951 30.5042L37.839 16.1641C39.1621 14.602 39.1621 12.0693 37.839 10.5072L32.4737 4.17157C31.1508 2.60948 29.006 2.60948 27.6832 4.17157Z" stroke="#B7A800" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M31.7931 23.3235L47.0365 41.3234" stroke="#B7A800" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </span>
                    <h2>Thông báo đấu giá</h2>
                </div>
            </div>
            <AuctionSearch />
        </Container>

    )
}

export default Auction;