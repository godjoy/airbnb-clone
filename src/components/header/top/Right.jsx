import React from 'react';
import styled from 'styled-components';

class Right extends React.Component {
    render() {
        return (
            <RightContainer>
                호스트되기
            </RightContainer>
        )
    }
}

export default Right;

const RightContainer = styled.div`
    margin-right: 80px;
`;

