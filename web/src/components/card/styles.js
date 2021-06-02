import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 20rem;

    margin-bottom: 10px;

    position: relative;
    overflow: hidden;
`;

export const ContainerImg = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
    z-index: -1;

    background-image: url(${props => props.img});
    object-fit: cover;
    background-repeat: no-repeat;
    mask-image: linear-gradient(to left, transparent 35%, black 100%); 
    -webkit-mask-image: linear-gradient(to left, transparent 30%, black 100%);
`;

export const ContainerName = styled.div`
    position: absolute;
    z-index: 100;
    left: 2rem;
    bottom: 2rem;

    padding: 8px 15px;

    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    font-style: italic;
    letter-spacing: .2rem;
    text-transform: capitalize;
    color: #000;

    background-color: #fff;
`;

export const Content = styled.div`
    width: 30rem;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    position: absolute;
    right: 0;

    padding: 15px 0;
`;

export const ContainerInfo = styled.div`
    text-align: right;
    text-transform: uppercase;
    font-style: italic;
    letter-spacing: .02rem;
    line-height: 1.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: #565656;
`;

export const ContainerRef = styled.div`
    text-align: right;
    text-transform: uppercase;
    font-style: italic;
    letter-spacing: .02rem;
    line-height: 1.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: #a9a9a9;
    padding-right: 5px;
    margin-top: 5px;
`;

export const Button = styled.button`
    margin-top: 20px;
    padding: 20px 30px;
    border: none;
    border-radius: 8px;

    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;

    background-color: #a9a9a9;

    cursor: pointer;

    :hover {
        color: #ff3b3f;
    }
`;