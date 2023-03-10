import React from "react"

export default function form({title,settitle,desc,setDesc,notes,setNotes}){
    const inputHandler = (e)=>{
        if(e.target.id === "title"){
            settitle(e.target.value)
        }else{
            setDesc(e.target.value)
        }
        
    }
    const addNotesHandler =(e)=>{
        e.preventDefault()
        if(title !==""&& desc!==""){
            setNotes((note)=> {
                return(
                    [...note,{
                        title:title,
                        desc:desc,
                        id:new Date().getTime()
                    }]
                )
            })
            settitle("")
            setDesc("")
        }
       

    
    }
        return (
        
        <>
            <div className="container my-3">
                <div className="row-justify-content-center">
                    <div className="coll-mod-10">
                        <form style= {{border:"2px solid #ced4da",borderRadius:"10px",padding:"40px"}}>
                            <div className="mb-3">

                                <label for="title" className="form-label">Tittle </label>
                                <input type="text" className ="form-control" placeholder="Enter your Title" id="title" value={title} onChange= {inputHandler}/>
                            </div>
                            <div className="mb-3">
                                <label for="description" className="form-label">Description</label>
                                <textarea name="desc" id="desc" cols="140" rows="2" className="Form-control" placeholder="Input your notes" value={desc}  onChange= {inputHandler}></textarea>
                            </div>
                            <button type="Add Note " className="btn btn-primary" onClick={addNotesHandler}>Add Note</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
    
}

