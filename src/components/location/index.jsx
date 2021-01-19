import React from 'react';
import styled from 'styled-components';
import LocationItem from './LocationItem';

class Location extends React.Component {
    render(){
        return (
            <LocationContainer>
                <LocationGrid>
                    <LocationItem 
                        img="https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg"
                        alt="서울" description="차로 15분 거리"/>
                    <LocationItem 
                        img="https://a0.muscache.com/im/pictures/8b318783-723f-4584-9b9b-0eb2c8b6078e.jpg"
                        alt="인천" description="차로 1시간 거리"/>
                    <LocationItem 
                        img="https://a0.muscache.com/im/pictures/f98fbb2e-9e10-4514-b4a7-02c467e1da03.jpg"
                        alt="의정부시" description="차로 30분 거리"/>
                    <LocationItem 
                        img="https://a0.muscache.com/im/pictures/8340bd19-ee32-4669-8b10-a8ac7e7735d4.jpg"
                        alt="대전" description="차로 2.5시간 거리"/>
                    <LocationItem 
                        img="https://a0.muscache.com/im/pictures/7c424b7e-0f02-4282-93cf-c5fc5e5e157d.jpg"
                        alt="수원시" description="차로 45분 거리"/>
                    <LocationItem 
                        img="https://a0.muscache.com/im/pictures/560c06e1-a396-4414-9e38-4fbe8e9f04c4.jpg"
                        alt="부천시" description="차로 45분 거리"/>
                    <LocationItem 
                        img="https://a0.muscache.com/im/pictures/f3ebcc73-30b2-469f-b6ba-0578fdaaa649.jpg"
                        alt="안산시" description="차로 1시간 거리"/>
                    <LocationItem 
                        img="https://a0.muscache.com/im/pictures/f7ac6e57-65cb-446b-8631-331072463af4.jpg"
                        alt="성남시" description="차로 30분 거리"/>
                </LocationGrid>
            </LocationContainer>
        )
    }
}

export default Location;

const LocationContainer = styled.div`
    margin: 40px 80px;
`;

const LocationGrid = styled.div`  
    display: grid;
    grid-template-rows: repeat(2, 80px);
    grid-template-columns: repeat(4, 342px);
    grid-gap: 10px;
`;
