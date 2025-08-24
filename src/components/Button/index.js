import './index.css';

export default function Button({ href, children }) {
  return (
    <a className='btn' href={href}>
      {children}
    </a>
  );
}