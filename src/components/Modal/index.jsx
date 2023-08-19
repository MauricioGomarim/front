import ReactModal from 'react-modal';
import { Container } from './style';

const Modal = ({ isOpen, onRequestClose, contentLabel, children }) => {
  return (
    <Container>
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      style={{
        overlay: {
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          maxWidth: '1200px',
          maxHeight: '400px',
          margin: '0 auto', 
          inset: '200px'
        },
      }}
    >
      {children}
    </ReactModal>
    </Container>
  );
};

export default Modal;