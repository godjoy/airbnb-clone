import React from 'react';
import styled from 'styled-components';

class SearchInput extends React.Component {
    render() {
        const { width, onClick, title, children} = this.props;
        return(
            <SearchItemContainer width={width} onClick={onClick}>
                <Title>{title}</Title>
                <Description>{children}</Description>
            </SearchItemContainer>
        )
    }
}

export default SearchInput;

const SearchItemContainer = styled.div`
    ${(props) => props.width ? `width: ${props.width};` : `flex: 1;` }
    padding: 14px 32px;
    border-radius: 32px;
    text-align: left;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;

    &:hover {
        background-color: #EBEBEB;
    }
`;

const Title = styled.div`
    font-size: 12px;
    font-weight: 800;
    padding-bottom: 2px;
`;

const Description = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: #717171;
`;