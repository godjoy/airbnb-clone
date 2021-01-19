import React from 'react';
import styled from 'styled-components';

class LocationItem extends React.Component {
    render() {
        const { img, alt, description } = this.props
        return (
            <LocationItemBlock>
                <LocationItemImage src={img} alt={alt}/>
                <div>
                    <LocationTitle><b>{alt}</b></LocationTitle>
                    <LocationTitle>{description}</LocationTitle>
                </div>
            </LocationItemBlock>
        )
    }
}

export default LocationItem;

const LocationItemBlock = styled.div`
    display: flex;
    line-height: 20px;
    align-items: center;
    cursor: pointer;
`;

const LocationItemImage = styled.img`
    display: inline-block;
    height: 64px;
    border-radius: 8px;
    flex: 0 0 64px;
    margin-right: 16px;
`;

const LocationTitle = styled.div`
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-bottom: 2px;
`;
