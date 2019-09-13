import React from 'react';
import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Header from '../../components/Header';

const MyPaper = styled(Paper)({
    margin: '50px',
    padding: '10px 10px',
});

export default (props) => {
    return (
        <div>
            <MyPaper elevation={5}>
                <Header nome="Sobre" small="> Nós" />

                <h2>Nossa História</h2>
                <p>Lorem ipsum dolor sit amet...</p>
                <h2>Missão e Visão</h2>
                <p>Lorem ipsum dolor sit amet...</p>
                <h2>Imprensa</h2>
                <p>Lorem ipsum dolor sit amet...</p>
            </MyPaper>
        </div>
    )
}