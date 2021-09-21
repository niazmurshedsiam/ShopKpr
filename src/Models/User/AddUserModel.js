import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const AddUserModel = ({ show, handleClose, handleSubmit, onSubmit, register, errors }) => {

    return (
        <>
            <Modal size="md" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD USER IN YOUR DATABASE</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body>

                        <div className="col-md-12">
                            <input className="form-control" placeholder="Name" defaultValue="Niaz Murshed" {...register("name", { required: true })} />
                            {errors.name && <span>Name field is required</span>}
                        </div>
                        <br />
                        <div className="col-md-12">
                            <input className="form-control" placeholder="userName" defaultValue="siam12345" {...register("userName", { required: true })} />
                            {errors.userName && <span>User Name field is required</span>}
                        </div>
                        <br />
                        <div className="col-md-12">
                            <input className="form-control" placeholder="Email" defaultValue="niazmurshed16@gmail.com" {...register("email", { required: true })} />
                            {errors.email && <span>Email field is required</span>}
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleClose}>
                            Save
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
};

export default AddUserModel;