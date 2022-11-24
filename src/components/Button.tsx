const Button = ({ label, fCallBack, styles }: any) => {
  return (
    <button onClick={fCallBack} type="button" className={styles}>
      {label}
    </button>
  );
};

export default Button;
