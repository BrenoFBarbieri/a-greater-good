import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 10vh;

    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: #fdfffc;
    border-bottom: 0.5px solid #011627;
`;

export const Content = styled.div`
    width: 80vw;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ContainerLogo = styled.div`
    height: 60%;

    display: flex;
    justify-content: center;
    align-items: center;
    
    font-size: 1.4rem;
    font-weight: 500;
    color: #011627;

    cursor: pointer;

    :hover {
        color: #ff9f1c;
    }
`;

export const ContainerOptions = styled.div`
    span {
        font-size: 1.2rem;
        font-weight: 400;
        color: #011627;
        margin-left: 20px;
        text-decoration: none;
        font-style: normal;
        cursor: pointer;
    }
    span:hover {
        color: #ff9f1c;
    }
`;