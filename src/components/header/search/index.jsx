import React from 'react';
import styled from 'styled-components';
import PeopleModal from './modal/PeopleModal';
import SearchInput from './SearchInput';

class Search extends React.Component{
    state = {
        isVisiblePeopleModal: false,
    }
    
    handlePeopleClick = () => {
        this.setState({
            isVisiblePeopleModal: !this.state.isVisiblePeopleModal,
        })
    }

    render() {
        return <div>
            { this.props.category === "rooms" && (
                <SearchItemContainer>
                    <SearchInput title="위치" onClick={() => {}} width="270px">
                        <StyledInput placeholder="어디로 여행가세요?" />
                    </SearchInput>
                    <Divider />
                    <SearchInput title="체크인"> 날짜 추가 </SearchInput>
                    <Divider />
                    <SearchInput title="체크아웃"> 날짜 추가 </SearchInput>    
                    <Divider />
                    <SearchInput title="인원" onClick={ this.handlePeopleClick }>
                        게스트 추가                
                    </SearchInput>    
                    {this.state.isVisiblePeopleModal && <PeopleModal />}
                </SearchItemContainer>
            ) }
            { this.props.category === "experience" && (
                <SearchItemContainer>
                    <SearchInput title="위치" onClick={() => {}}>
                        <StyledInput placeholder="어디로 여행가세요?" />
                    </SearchInput>
                    <Divider />
                    <SearchInput title="날짜"> 원하는 날짜를 입력하세요 </SearchInput>
                </SearchItemContainer>
            ) }
        </div>
    }
}

export default Search;

const SearchItemContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 850px;
    height: 66px;
    margin: 0px auto;
    background-color: white;
    border-radius: 32px;
`;

const StyledInput = styled.input`
    border: none;
    background-color: transparent;
`;

const Divider = styled.div`
    width: 1px;   
    height: 32px;
    background-color: #DDDDDD;
`;