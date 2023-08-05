import React, { useState } from 'react'
import { Imodal } from '../../common/Imodal'
import { Icard } from '../../common/Icard'

export const ModalAdmin = ({ bool, booleanState, setCard }: Imodal) => {
    const [fileLoad, setFileLoad] = useState(false)


    function openModalHandler() {
        booleanState(prev => !prev)
    }

    const [dragOn, setDragOn] = useState(false)

    function dragOver(event: React.DragEvent<HTMLLabelElement>) {
        event.preventDefault()
        setDragOn(true)
    }

    function dragOut(event: React.DragEvent<HTMLLabelElement>) {
        event.preventDefault()
        setDragOn(false)
    }

    function dropFile(event: React.DragEvent<HTMLLabelElement>) {
        event.preventDefault()
        let file = event.dataTransfer.files[0]
        console.log(file)
        showFile(file)
        setDragOn(false)
    }

    function dropFileClick(event: React.ChangeEvent<HTMLInputElement>) {
        let files = event.currentTarget.files
        let file = files?.item(0)
        file ? showFile(file) : alert('Вы должны загрузить хотя бы один файл')
    }

    function showFile(file: File) {
        let fileType = file.type;
        let validExtensions = ["image/jpeg", "image/jpg", "image/png"];

        if (validExtensions.includes(fileType)) {
            let fileReader = new FileReader()
            fileReader.onload = () => {
                let fileURL = fileReader.result;
                setFileLoad(true)
                if (setCard) {
                    setCard(prev => ({ ...prev, img: prev.img = `${fileURL}` }))
                }
            }
            fileReader.readAsDataURL(file);

        } else {
            alert('Это не картинка')
        }


    }
    function newCardInfoHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const component = event.target.id;
        if (setCard) {
            setCard(prev => ({ ...prev, [component]: event.target.value }));
        }
    }

    function createNewCard() {
        if (setCard) {
            setCard(prev => ({ ...prev, canCreate: true }))
        }
        setFileLoad(false)
        document.querySelectorAll('.input__field').forEach(input => {
            const inputElement = input as HTMLInputElement;
            inputElement.value = '';
        });
        openModalHandler()
    }


    return (
        <div onClick={openModalHandler} className={`popup__bg ${bool ? "" : "hidden"}`}>
            <div onClick={e => e.stopPropagation()} className="popup">
                <div className="input">
                    <input
                        className="input__download"
                        onChange={(event) => dropFileClick(event)}
                        type="file"
                        id="input__file"
                    />
                    <label htmlFor='input__file'

                        className={`input__button ${fileLoad ? 'hidden' : ''}  ${dragOn ? 'active' : ''}`}
                        onDrop={dropFile}
                        onDragLeave={dragOut}
                        onDragOver={dragOver}
                    >
                        <p className="input__button-text">Загрузите картинку</p>
                    </label>
                </div>
                <div
                    className={`${fileLoad ? '' : 'hidden'} input input__info `}
                >
                    <div className="input__content">
                        <div className="input__flexbox">
                            <input
                                className="input__box input__field" id="name" type="text"
                                onChange={(event) => newCardInfoHandler(event)}
                                placeholder="Введите название пиццы" required
                            />
                            <input
                                className="input__box input__field" id="size" type="number"
                                onChange={(event) => newCardInfoHandler(event)}
                                placeholder="Введите размер пиццы" required
                            />
                        </div>
                        <div className="input__flexbox">
                            <input
                                className="input__box input__field" id="weight" type="number" placeholder="Введите вес пиццы" required
                                onChange={(event) => newCardInfoHandler(event)}
                            />
                            <input
                                className="input__box input__submit" id="submit" type="submit"
                                onClick={createNewCard}
                                value="Создать карточку пиццы"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
