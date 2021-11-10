import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import {useGetCryptosQuery} from '../services/cryptoApi';
import {Cryptocurrencies, News} from '../components';
import Loader from './Loader';

const {Title} = Typography

export const Homepage = () => {
    const {data, isFetching} = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if(isFetching) return <Loader/>;
//rf
    return (
        <>
        <Title level={2} className="heading">Global Crypto Stats</Title>
        <Row>
            {/* Millify simplifies the numbers */}
            <Col span={12}><Statistic title="Total Crypto Currencies" value={globalStats.total}/></Col>
            <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
            <Col span={12}><Statistic title="Markets" value={millify(globalStats.totalMarkets)}/></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
            <Col span={12}><Statistic title="Total 24hr Volume" value={millify(globalStats.total24hVolume)}/></Col>
        </Row>

        <div className="home-heading-container">
            <Title level={2} className="home-title">Top 10 Crypto Currencies in the World</Title>
            <Title level={3} className="home-title"><Link to="/cryptocurrencies">Show More</Link></Title>
        </div>
        <Cryptocurrencies simplified/>

        <div className="home-heading-container">
            <Title level={2} className="home-title">Latest Crypto News</Title>
            <Title level={3} className="home-title"><Link to="/news">Show More</Link></Title>
        </div>
        <News simplified/>
        </>
    )
}

export default Homepage;