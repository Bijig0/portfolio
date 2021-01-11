import React, {useEffect, useState} from "react";
import {DragDropContext , Draggable, Droppable} from "react-beautiful-dnd";

const Project = () => {
    const words = ['y','a','r','d']
    const [x,setX] = useState(Math.round(Math.random()*10))
    const clickhandle = () => {
        setX(Math.round(Math.random()*10))
    }
    const dragHandler = (result) => {
        console.log(result)
    }
    return (
        <DragDropContext onDragEnd={dragHandler}>
        <h1>Hello World + {x}</h1>
            <button onClick={clickhandle}>Click Me</button>
            <div>
                <div className="row text-center my-5 justify-content-center">
                    {words.map((letter)=> {
                        return (
                            <Droppable droppableId={letter}>
                                {(provided) => {
                                    return (
                                        <h1 ref={provided.innerRef} {...provided.droppableProps} className="display-1 col-md-1">_</h1>
                                    )
                                }}
                            </Droppable>
                        )
                    })}
                </div>
                <Droppable droppableId='a' direction='horizontal'>
                    {(provided) => {
                        return (
                        <div ref={provided.innerRef} {...provided.droppableProps} className="d-flex justify-content-center align-items-center my-5" style={{height:'15vw'}}>
                            {provided.placeholder}

                            {words.map((letter,index) => {
                    return (
                           <FillBlank letter={letter} index={index}/>
                    )
                })}
                </div>
                        )}}

                </Droppable>
            </div>
        </DragDropContext>
    )
}

const FillBlank = (props) => {
    const {letter,index} = props
    return (
        <Draggable draggableId={letter} index={index}>
            {(provided) => {

                return <> <span ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="badge bg-dark mx-4">{letter}</span>
                {provided.placeholder}
                </>
            }}
        </Draggable>
)
}

export default Project
