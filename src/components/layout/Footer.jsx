const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className='footer  p-10 bg-white font-bold text-primary-content footer-center'>
      <p>Copyright &copy; {footerYear}</p>
    </footer>
  );
};

export default Footer;
