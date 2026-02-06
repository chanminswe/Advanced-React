import {useState, type ReactNode } from "react";

type ModalDialogProps = {
    content : ReactNode;
    footer : ReactNode;
    onClose : () => void;
}

type ButtonProps = {
    text : string ;
    onClick : () => void;
}

const SomeFormHere = () => <div> some form here</div>;
const SubmitButton = () => <button className="button">Submit button</button>;
const CancelButton = () => <button className="button secondary">Cancel button</button>;

function Button({ text , onClick } : ButtonProps) {
  return (
     <button 
     onClick={onClick}
     className="button">{text}</button>
  )
}

const ModalDialog = ({ content , footer , onClose } : ModalDialogProps) => {
    return(
        <div>
            <div>
                {content}
                <Button 
                onClick={onClose}
                text="Close Dialogue"/>
            </div>
            <div>{footer}</div>
        </div>
    )
}

function Main() {
    const [isOpen1 , setIsOpen1] = useState(false);
    const [isOpen2 , setIsOpen2] = useState(false);

  return (
    <>
        <h4>Dialog with content and one button in the footer</h4>
        <Button 
        onClick={() => setIsOpen1(true)} 
        text="Open Dialog One"
        />
        {isOpen1 && 
        <ModalDialog 
        content={<SomeFormHere />}
        footer={<SubmitButton />}
        onClose={() => setIsOpen1(false)}
        />}
        <Button
        onClick={() => setIsOpen2(true)}
        text="Open Dialog Two"
        />
        {isOpen2 && 
        <ModalDialog 
        content={<CancelButton />}
        onClose={() => setIsOpen2(false)}
        footer={<CancelButton />}
        />}
    </>
  )
}

// we can write this better by using {children} instead of content for better view
//for example <ModalDialog><SomeFormHere /></ModalDialog>
export default Main