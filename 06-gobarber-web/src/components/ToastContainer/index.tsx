import React from 'react';
import { useTransition } from 'react-spring';


import Toast from './Toast';

import { IToastMessage } from '../../hooks/toast';
import { Container } from './styles';

interface IToastContainerProps {
  messages: IToastMessage[];
}

const ToastContainer: React.FC<IToastContainerProps> = ({ messages }) => {
  const messagesWithTransictions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%' },
    }
  );

  return (
    <Container>
      {messagesWithTransictions.map(({ item, key, props }) => (
        <Toast style={props} key={key} message={item} />
      ))};
    </Container>
  )
};

export default ToastContainer;
