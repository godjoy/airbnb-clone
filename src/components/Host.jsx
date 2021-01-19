import React from 'react';
import styled from 'styled-components';
import GlobalImgComp from './GlobalImgComp';

class Host extends React.Component {
    render() {
        return (
            <HostContainer>
                <HostTitle>
                    수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.
                </HostTitle>
                <GlobalImgComp 
                    width="426px" height="285px" alt="숙소 호스트 되기"
                    img="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg"/>
                <GlobalImgComp 
                    width="426px" height="285px" alt="숙소 호스트 되기"
                    img="https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg"/>
                <GlobalImgComp 
                    width="426px" height="285px" alt="숙소 호스트 되기"
                    img="https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg"/>
            </HostContainer>
        )
    }
}

export default Host;

const HostContainer = styled.div`
    margin: 40px 80px;
`;

const HostTitle = styled.div`
    font-size: 30px;
    font-weight: 600;
    text-align: left;
    margin-bottom: 24px;
`;