import styled from "styled-components";

export const Title = styled.h2`
    width: 100%;
    color: ${props => props.color || '#000'};
    font-size:${props => props.fontSize || '18px'};
    text-align: ${props => props.textAlign || 'center'};
    margin: 0;
`