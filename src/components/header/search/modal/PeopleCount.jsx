import React from 'react';
import styled from 'styled-components';

class PeopleCount extends React.Component {
    state = {
        cnt: 0,
    }

    handleMinusClick = () => {
        if (this.state.cnt < 1) {
            return;
        }

        this.setState({
            cnt: this.state.cnt -1,
        })
    }

    handlePlusClick = () => {
        this.setState({
            cnt: this.state.cnt + 1,
        })
    }

    render() {
        return(
            <PeopleCountContainer>
                <div>
                    <Title>{this.props.title}</Title>
                    <Description>{this.props.description}</Description>
                </div>
                <div>
                    <CountButton onClick={ this.handleMinusClick }>-</CountButton>
                    &nbsp;&nbsp;{ this.state.cnt }&nbsp;&nbsp;
                    <CountButton onClick={ this.handlePlusClick }>+</CountButton>
                </div>
            </PeopleCountContainer>   
        )
    }
}

export default PeopleCount;

const PeopleCountContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
    border-bottom: 1px solid rgb(235,235,235);
`;

const Title = styled.div`
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: #222222;
`;

const Description = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: #717171;
`;

const CountButton = styled.button`
    background-color: transparent;
    width: 32px;
    height: 32px;
    border-radius: 32px;
    cursor: pointer;
    outline: 0;
`;