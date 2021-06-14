import React, { useEffect, useState } from "react";
import {axiosWithAuth} from '../helpers/axiosWithAuth';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

useEffect(() => {
  fetchColorService()
.then((res) => {setColors(res.data)})
.catch((err) => console.log(err));
},[]);

console.log(colors)

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
axiosWithAuth().post('/colors',editColor)
.then(res => {setColors({...colors}, res.data)}
)
.catch(err => {console.log('error:saveEdit: ', err)})
  };

  const deleteColor = (colorToDelete) => {
    axiosWithAuth().delete('/colors', colorToDelete)
    .then( res => {setColors({...colors}, res.data)})
    .catch( err => {console.log('error:deleteColor: ', err)})
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete saveEdit, deleteColor functions
