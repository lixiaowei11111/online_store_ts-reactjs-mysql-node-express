import React from 'react';
import {Button, Form, FormControl, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle} from "react-bootstrap";

const CreateBrand = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size={"lg"}
        >
            <ModalHeader closeButton>
                <ModalTitle>
                    Добавить бренд
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormControl placeholder={"Введите название брэнда..."}/>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button
                    variant={"outline-danger"}
                    onClick={onHide}
                >
                    Закрыть
                </Button>
                <Button
                    variant={"outline-success"}
                    onClick={onHide}
                >
                    Добавить
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateBrand;