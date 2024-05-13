import Input from "./Input.jsx";
import {useRef} from 'react';
import Modal from "./Modal.jsx";

export default function NewProject({onAdd, onCancel}) {
  const title = useRef();
  const desc = useRef();
  const dueDate = useRef();

  const modal = useRef();

  function handleSaveBtn(){
    const enteredTitle = title.current.value;
    const enteredDesc = desc.current.value;
    const enteredDueDate = dueDate.current.value;

    if(enteredTitle.trim() === '' || enteredDesc.trim() ==='' || enteredDueDate.trim() === ''){
      //its taking method open from Modal.jsx  and return is called cause its need to be parsed after onAdd
      modal.current.open();
      return;
    }

    onAdd({
      title:enteredTitle,
      desc:enteredDesc,
      dueDate:enteredDueDate
    })
  }

  return (
    <>
    <Modal ref={modal} buttonCaption="Okay"> 
    <h2 className="text-xl font-bold text-stone-700 my-4">
      Ivalid input
    </h2>
    <p className="text-stone-600 mb-4">Oops.... You need to provide some value</p>
    <p className="text-stone-600 mb-4">Please make sure you provide a correct value for every input field</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950" onClick={onCancel} >Cancel</button>
        </li>
        <li>
          <button  onClick={handleSaveBtn} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" >Save</button>
        </li>
      </menu>

      <div>
        <Input label="Title" ref={title}/>
        <Input label="Description" textArea={true} ref={desc}/>
        <Input type="date" label="DueDate" ref={dueDate} />
      </div>
    </div></>
  );
}
