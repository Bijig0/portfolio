import React, {useEffect, useState} from "react";
import {DragDropContext,Draggable,Droppable} from "react-beautiful-dnd";
import { resetServerContext } from "react-beautiful-dnd"



const Test = () => {
    const [indexes,setIndexes] = useState(['1','2','3'])
    // get the result source id, then change it to destination id
    //then can we make destination id = source id or if not we do the array splice
    //then we usestate it to become the new array
    const dragHandler = async (result) => {
        const {destination,source,draggableId} = result
        const newIndexes = Array.from(indexes)
        newIndexes.splice(source.index,1)
        newIndexes.splice(destination.index,0,draggableId)
        console.log(newIndexes)
        await setIndexes([...newIndexes])
        await console.log(indexes)
    }
    return (
        <DragDropContext onDragEnd={dragHandler}>
            <ObjDrop indexes={indexes}/>
        </DragDropContext>
    )

}

const ObjDrop = ({indexes}) => {
    return (
        <Droppable droppableId={'123'} direction='horizontal'>
            {(provided) => {
                return (
                    <div className="d-flex justify-content-center align-items-center my-5" ref={provided.innerRef} {...provided.draggableProps}>
                        {indexes.map((index,i) => {
                            return <ObjDrag index={i} draggableId={index}/>
                        })}
                        {provided.placeholder}
                    </div>
                )}}
        </Droppable>
    )
}

const ObjDrag = ({index,draggableId}) => {
    return (
    <Draggable draggableId={draggableId} index={index}>
        {(provided) => {
            return (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <h1>Number{index}</h1>
            </div>
            )}}
    </Draggable>
    )}

export default Test
