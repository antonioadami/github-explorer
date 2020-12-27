import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no github</Title>
            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars3.githubusercontent.com/u/62675566?s=460&u=11c4317d67f5313f045b139918c1f37179843137&v=4"
                        alt="Tonhao"
                    />
                    <div>
                        <strong>GoBarber</strong>
                        <p>Descrição</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
