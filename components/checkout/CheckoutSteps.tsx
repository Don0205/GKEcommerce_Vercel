//components\checkout\CheckoutSteps.tsx
const CheckoutSteps = ({ current = 0 }) => {
  return (
    <ul className='steps steps-vertical mt-4 w-full lg:steps-horizontal'>
      {['用戶登入', '送貨地址', '付款方式', '下單'].map(
        (step, index) => (
          <li
            key={step}
            className={`step ${index <= current ? 'step-primary' : ''} `}
          >
            {step}
          </li>
        ),
      )}
    </ul>
  );
};
export default CheckoutSteps;