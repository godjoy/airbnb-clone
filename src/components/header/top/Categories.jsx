import React from 'react';
import styled from 'styled-components';

class Categories extends React.Component {
    render() {
        const { handleRoomsClick, handleExperienceClick } = this.props

        return (
            <CategoryContainer>
                <Category onClick={handleRoomsClick}>숙소</Category>
                <Category onClick={handleExperienceClick}>체험</Category>
                <Category>온라인 체험</Category>
            </CategoryContainer>
        )
    }
}

export default Categories;

const CategoryContainer = styled.div`
    display: flex;
    margin: 0 auto;
    line-height: 80%
`;

const Category = styled.div`
    padding: 0 10px;
    margin: 0 auto;
    text-align: center;
    &: hover {
        cursor: pointer;
        color: #d4dce1;
    }     
`;

// const Underline = styled.div`
//     width: 0px
//     height: 2px;
//     background-color: white;
//     text-decoration: none;
//     display: inline-block;
//     position: relative;

//     &:hover {
//         width: 5px;
//     }
// `;
