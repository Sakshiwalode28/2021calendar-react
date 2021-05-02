import React, { useState ,useContext} from 'react'

import DateTimePicker from 'react-datetime-picker';

import { Button, Card, Label } from 'reactstrap'
import {UserContext} from "../Context/UserContext";
import {ADD_EVENT} from "../Context/action.types";



const EventList = () => {

    
const [title, setTitle] = useState('')
const [start, setStart] = useState('')
const [end, setEnd] = useState('')
const {setUser} = useContext(UserContext)


const handelSubmit = (e) => {              
     e?.preventDefault();
    if ((title || start || end )=== '') {
       return alert('Please enter an event')
    }
    const task = {
       title,
       start,
       end
    }

setUser({
    type: ADD_EVENT,
    payload: task
})

    setTitle('');
   
} 

 return (
    
           <Card className="bg-white" >

<form  className='text-left '>
    <div>
    
    <input placeholder="Write your event here..." className='mb-5  ' value={title} onChange={(e)=> setTitle(e.target.value)} />
</div>
<div>
    <label className='mr-2'>Start Date: </label>
    
    <DateTimePicker value={start} className='mt-2 mr-2 ' onChange={date => setStart(date)} />
</div>

<div>
    <label className='mr-2'>  End Date: </label>
    <DateTimePicker value={end} className='mt-1 mr-2'  onChange={date => setEnd(date)} />
</div>

<Button className='mt-2 mb-3 bg-success size-lg mt-5'  onClick={() => handelSubmit()}
>Add</Button>
</form>
</Card>


        
    )
}


export default EventList;

