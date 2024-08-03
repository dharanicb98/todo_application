import React, { useEffect, useState } from 'react';
import { createTodo, updateTodo } from '../services/todo';
import { useNavigate } from 'react-router-dom';

const initialPayload = { title: '', status: '' };

function CreateUpdateTodo({ actionType, editPayload, setPageLoad, handleClose }) {
  const [payload, setPayload] = useState(initialPayload);

  const navigate = useNavigate()

  useEffect(() => {
    if (actionType === 'UPDATE') {
      // console.log('callled', editPayload)
      const { title, status } = editPayload;
      setPayload({ title, status });
    } else {
      setPayload(initialPayload);
    }
  }, [editPayload, actionType]); // Add actionType to the dependency array

  const handleOnChange = (e, key) => {
    let value = e.target.value;
    setPayload((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (actionType === 'CREATE') {
        await createTodo(payload);
      } else {
        await updateTodo(editPayload?._id, payload);
      }
      setPageLoad((prev) => !prev);
      setPayload(initialPayload);
      handleClose();
    } catch (e) {
      if (e?.response.status == 401) {
        navigate('/signin')
        return
      }
      
      alert(e?.response?.data?.message)

    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <label className='text-lg text-slate-600'>Title</label>
          <input
       
            value={payload.title}
            type='text'
            onChange={(e) => handleOnChange(e, 'title')}
            className='border rounded-md p-2 focus:border-black focus:outline-none'
          />
        </div>

        <div className='flex flex-col mt-3'>
          <label className='text-lg text-slate-600'>Status</label>
          <select
            onChange={(e) => handleOnChange(e, 'status')}
            value={payload.status}
            className='border rounded-md p-2 focus:border-black focus:outline-none'
          >
            <option value=''>Choose status</option>
            <option value={"pending"}>Pending</option>
            <option value={"completed"}>Completed</option>
          </select>
        </div>

        <div className='mt-6 flex items-center justify-between'>
          <button className='border border-black hover:bg-black hover:text-white py-2 px-3 rounded-md' type='button' onClick={handleClose}>
            Close
          </button>
          <button className='py-2 px-3 rounded-md bg-black text-white hover:text-black hover:bg-white border border-black' type='submit'>
            {actionType === 'CREATE' ? 'Create' : 'Update'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateUpdateTodo;
