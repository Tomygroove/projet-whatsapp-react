import React, { useEffect} from 'react';

import styled from 'styled-components'

const AskName = (props) => {
    const { setState } = props

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => {
            const fiveFirstTodos = data.slice(0, 6)
            setState(state => ({ ...state, askName: fiveFirstTodos }))
        });
    }, []);

    const renderAskName = () => {
        return props.askName.map(name => {
            return <Li key={name.id}>
                {name.title}
            </Li>
        })
    };

    return (
        <div>
            <Name>
            <Ul>
                {renderAskName()}
            </Ul>
            </Name>
        </div>
    )
}

const Name = styled.div`
    color: red;
`

const Ul = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none
`

const Li = styled.li`
    font-size: 1rem;
    margin: 0;
    text-align: left;
`

export default AskName;