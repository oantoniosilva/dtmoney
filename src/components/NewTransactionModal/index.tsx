import { useState } from 'react';
import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button type="button" onClick={onRequestClose} className='react-modal-close'>
        <img src={closeImg} alt="Fechar modal" />
      </button>


      <Container>
        <h2>Register Transaction</h2>

        <input
          placeholder="Title"
        />

        <input
          type="number"
          placeholder="Value"
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('deposit'); }}
            isActive={type === 'deposit'}
          >
            <img src={incomeImg} alt="Input" />
            <span>Input</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('withdraw'); }}
            isActive={type === 'withdraw'}
          >
            <img src={outcomeImg} alt="Output" />
            <span>Output</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Category"
        />

        <button type="submit">
          Register
        </button>
      </Container>
    </Modal>
  )
}