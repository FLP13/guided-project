import styled from 'styled-components';

const Wrapper = styled.div`
    background: black;
    max-width: ${props => props.theme.maxWidth};
    height: 500px;
    color: white;
`

const Home = () => {
    return (
        <div>
            <Wrapper>
                Cart
            </Wrapper>
        </div>
    )
}

export default Home;