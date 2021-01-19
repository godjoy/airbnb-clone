import React from 'react';
import styled from 'styled-components';

class GlobalImgComp extends React.Component {
    render() {
        const { img, alt, width, height, children } = this.props;
        return (
            <Container>
                <Image src={img} alt={alt} width={width} height={height}/>
                <br />
                <Title>{alt}</Title>
                <br /> {children}
            </Container>
        )
    }
}

export default GlobalImgComp;

const Container = styled.div`
    display: inline-block;
    text-align: left;
    border-style: solid;
    border-color: transparent;
    cursor: pointer;
`;

const Image = styled.img`
    border-radius: 15px;
    margin-right: 12px;
`;

const Title = styled.text`
    font-size: 18px;
    font-weight: 600;
`;