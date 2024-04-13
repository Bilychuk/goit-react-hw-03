import { FaUser } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import css from './Contact.module.css';

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <p className={css.name}>
          <FaUser className="icon" /> {name}
        </p>
        <p className={css.number}>
          <FaPhone className="icon" /> {number}
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
