import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div{
        background: var(--gray4);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--white);

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        strong{
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }
    }
`;