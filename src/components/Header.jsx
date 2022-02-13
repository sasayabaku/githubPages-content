import React from 'react';
import { css, cx } from '@emotion/react';



const Header = () => {
    
    return (
        <header css={headerMain}>
            <nav css={navigation}>
                <div css={title}>sasayabaku</div>
                <div css={linkTabs}>
                    <a href="/">Showcase</a>
                    <a href="/">Resource</a>
                </div>
            </nav>
        </header>   
    )
};


const title = css`
    color: white;
    font-size: 1.2rem;
`

const headerMain = css`
    width: 100%;
    height: 70px;
    background-color: #ff3d6a;
    display: flex;
    align-items: center;

`

const linkTabs = css`
    align-items: center;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto;
    margin: 0;
    padding: 0;

    & a {
        text-decoration: none;
        color: white;
        padding: 0 2vmin;
    }
`

const navigation = css`
    width: 100%;
    position: relative;
    grid-gap: 4vmin;
    margin-left: 2rem;
    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: auto auto 1fr;
`;

export default Header;


