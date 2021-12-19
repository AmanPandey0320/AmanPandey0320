import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const CircularLoader = styled.div`
    border: 3px solid #757575;
    border-top: 3px solid #f50057;
    animation: ${spin} 1s linear infinite;
`;

export default CircularLoader;
