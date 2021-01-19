import React from 'react';
import styled from 'styled-components';
import GlobalImgComp from './GlobalImgComp';

class Rooms extends React.Component {
    render() {
        return (
        <RoomContainer>
            <RoomTitle>어디에서나, 여행은 살아보는거야!</RoomTitle>
            <br />
            <GlobalImgComp width="320px" height="320px" alt="집 전체" img="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg" />
            <GlobalImgComp width="320px" height="320px" alt="통나무집 및 전원주택" img="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg" />
            <GlobalImgComp ImgComp width="320px" height="320px" alt="독특한 공간" img="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg" />
            <GlobalImgComp ImgComp width="320px" height="320px" alt="반려동물 환영" img="https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg" />
        </RoomContainer>
        )
    }
}

export default Rooms;

const RoomContainer = styled.div`
    margin: 40px 80px;
`;

const RoomTitle = styled.div`
    display: block;
    font-size: 30px;
    font-weight: 600;
    text-align: left;
`;
