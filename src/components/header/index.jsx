import React from 'react';
import styled from 'styled-components';
import Top from './top';
import Search from './search'

class Header extends React.Component {
    render() {
        return (
            <HeaderContainer>
                <Top />
                <Search />
                <Title>이제, 여행은<br/>가까운 곳에서</Title>
                <SearchNearby>근처의 숙소 둘러보기</SearchNearby>
            </HeaderContainer>
        )
    }
}

export default Header;

const HeaderContainer = styled.div`
    height: 710px;
    position: relative;
    background-image: url('https://a0.muscache.com/im/pictures/cf39f4c4-e860-43d4-85be-deddd7b2da90.jpg');
    background-size: cover;
`;

const Title = styled.div`
    margin: 160px 80px 20px 80px;
    font-size: 52px;
    font-weight: bolder;
    letter-spacing: -0.02em;
    color: white;
`;

const SearchNearby = styled.div`
    display: inline-block;
    padding: 7px 15px;
    margin-left: 80px;

    border-radius: 8px;
    outline: none;
    background-color: white;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
`;