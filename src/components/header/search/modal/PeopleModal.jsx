import React from 'react';
import styled from 'styled-components';
import PeopleCount from './PeopleCount';

class PeopleModal extends React.Component {
    render(){
        return(
            <PeopleModalContainer>
                <PeopleCount title="성인" description="만 13세 이상" />
                <PeopleCount title="어린이" description="2~12세"/>
                <PeopleCount title="유아" description="2세 미만"/>
            </PeopleModalContainer>
        )
    }
}

export default PeopleModal;

const PeopleModalContainer = styled.div`
    position: absolute;
    right: 0;
    top: 80px;
    width: 395px;
    padding: 16px 32px;
    text-align: left;
    background-color: white;
    border-radius: 32px;
`;