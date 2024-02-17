import { useState } from 'react';
import './FormInput.css'

const FormInput = ({ onChange }) => {
    const [titleTask, setTitleTask] = useState('')

    return (  
        <form>
            <input 
                type="text" 
                placeholder='Add a new task'
                onChange={e => setTitleTask(e.target.value)}
            />
            <button onClick={e => onChange(titleTask, e)}><span className="material-symbols-outlined">add</span></button>
        </form>
    );
}
 
export default FormInput