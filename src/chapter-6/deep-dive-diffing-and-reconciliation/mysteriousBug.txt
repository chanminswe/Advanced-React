import { useState, useEffect } from 'react';

type InputProps = {
  onChange: () => void;
  placeholder: string;
  label: string;
  id: string;
};

const Input = ({ onChange, label, placeholder, id }: InputProps) => {
  useEffect(() => {
    console.info(`Input mounted`);
  }, []);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="text" onChange={onChange} id={id} placeholder={placeholder} />
    </>
  );
};

const TextPlaceholder = () => <p>Hello human! No tax for you</p>;

export default function Main() {
  const [isCompany1, setIsCompany1] = useState(false);
  const [isCompany2, setIsCompany2] = useState(false);
  return (
    <div className="App">
      <h1>Am I a person or a business?</h1>
      <p>Turn the checkbox on and off to switch between person and business fields</p>
      <div className="container">
        <div className="column">
          <h4>Input will unmount and mount</h4>
          <label>
            <input type="checkbox" onChange={() => setIsCompany1(!isCompany1)} />
            Check if you're a company
          </label>
          {isCompany1 ? (
            <Input label="Company Tax Id" placeholder="Enter 12 digits" onChange={() => {}} id="company-tax-id" />
          ) : (
            <TextPlaceholder />
          )}
        </div>

        <div className="column">
          <h4>Input will re-render</h4>
          <label>
            <input type="checkbox" onChange={() => setIsCompany2(!isCompany2)} />
            Check if you're a company
          </label>
          {isCompany2 ? (
            <Input label="Company Tax Id" placeholder="Enter 12 digits" onChange={() => {}} id="company-tax-id" />
          ) : (
            <Input label="Person Tax Id" placeholder="Enter 8 digits and 3 letters" onChange={() => {}} id="person-tax-id" />
          )}
        </div>
      </div>
    </div>
  );
}
