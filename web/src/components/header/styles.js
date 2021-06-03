import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 10vh;

    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: #fff;
    border-bottom: 0.5px solid #000;
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
    
    font-size: 1.2rem;
    font-weight: bold;
    color: #ff3b3f;

    cursor: pointer;

    :hover {
        color: #a9a9a9;
    }
`;

export const ContainerOptions = styled.div`
    span {
        font-size: 1.2rem;
        font-weight: bold;
        color: #a9a9a9;
        margin-left: 30px;
        text-decoration: none;
        cursor: pointer;
    }
    span:hover {
        color: #ff3b3f;
    }
`;