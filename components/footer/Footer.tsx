//components\footer\Footer.tsx
const Footer = () => {
  return (
    <footer className='footer footer-center bg-base-300 p-4 text-base-content'>
      <p>
        版權所有 &copy; {new Date().getFullYear()} - GK天堂 保留所有權利
      </p>
    </footer>
  );
};

export default Footer;