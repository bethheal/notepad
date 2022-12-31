import React from "react"

export default function EditModal({ editid, notes, setNotes }) {
    const updateHandler = () => {
        const updateNotes = notes.map((elem) => {
            if (editid === elem.id) {
                return ([{
                    ...elem, title: document.getElementById("edittitle").value,
                    desc: document.getElementById("editdesc").value

                }])
            }
        })
        console.log(updateNotes);
        setNotes(updateNotes)
    }
    return (
        <>
           

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Notes</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <dev className="mb-3">
                                    <label for="title" className="form-lable">Title</label>
                                    <input type="text" className="form-control" id="edittitle" placeholder="Enter Your Title" />
                                </dev>
                                <dev className="mb-3">
                                    <label for="title" className="form-lable">Description</label>
                                    <textarea name="desc" id="editdesc" rows="3" className="form-control" placeholder="Enter Your Description"></textarea>
                                </dev>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={updateHandler}>Edit Notes</button>

                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}