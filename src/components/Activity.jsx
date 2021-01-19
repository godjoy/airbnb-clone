import React from 'react';
import styled from 'styled-components';
import GlobalImgComp from './GlobalImgComp';

class Activity extends React.Component {
    render() {
        return(
            <ActivityContainer>
                <Title>
                    세상을 만나는 특별한 방법
                </Title>
                <SubTitle>
                    현지 전문가와 함께하는 독특한 액티비티를 직접 체험하거나 온라인으로 만나보세요.
                </SubTitle>
                <GlobalImgComp 
                    width="426px" height="426px" alt="온라인 체험"
                    img="https://a0.muscache.com/im/pictures/4d353c80-e73a-4b04-9e15-ec3d8381b106.jpg">
                    집에서 즐기는 랜선 세계 여행
                    </GlobalImgComp>
                <GlobalImgComp 
                    width="426px" height="426px" alt="체험"
                    img="https://a0.muscache.com/im/pictures/e81fce5f-2f51-4342-938e-5bc18ae237f4.jpg">
                    어디에서든 즐길 수 있는 체험
                </GlobalImgComp>
                <GlobalImgComp 
                    width="426px" height="426px" alt="어드벤처"
                    img="https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg">
                    숙박과 식사가 포함된 며칠 일정의 여행입니다.
                </GlobalImgComp> 
            </ActivityContainer>
        )
    }
}

export default Activity;

const ActivityContainer = styled.div`
    background-color: black;
    color: white;
    padding: 40px 80px;
`;
const Title = styled.div`
    font-size: 30px;
    font-weight: 600;
    text-align: left;
`;

const SubTitle = styled.div`
    font-size: 14px;
    font-weight: 400;
    margin: 8px 0 24px;
    text-align: left;
`;