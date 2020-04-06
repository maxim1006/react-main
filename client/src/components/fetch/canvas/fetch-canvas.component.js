import React, {Component} from "react";

export default class FetchCanvas extends Component {
    state = {
        canvasImageName: "canvas"
    };

    canDraw = false;

    constructor(props) {
        super(props);

        this.ref = React.createRef();
    }

    componentDidMount() {
        const canvasElement = this.ref.current;
        const GBCR = canvasElement.getBoundingClientRect();
        const GBCRTop = GBCR.top + window.pageYOffset;
        const GBCRLeft = GBCR.left;

        canvasElement.addEventListener("mousedown", (e) => {
            const mCtx = canvasElement.getContext("2d");
            // сбрасываю линию чтобы не рисовалась при нажатии
            mCtx.beginPath();
            this.canDraw = true
        });

        canvasElement.addEventListener("mousemove", (e) => {
            if (this.canDraw) {
                const mCtx = canvasElement.getContext("2d");
                mCtx.lineTo(e.pageX - GBCRLeft, e.pageY - GBCRTop);
                mCtx.stroke();
            }
        });

        canvasElement.addEventListener("mouseup", (e) => this.canDraw = false);
    }

    sendCanvas = async () => {
        const canvasElement = this.ref.current;
        // создаю блоб что бы передать на сервер
        let blob = await new Promise(resolve => canvasElement.toBlob(resolve, 'image/png'));
        const {canvasImageName} = this.state;

        // в боди обязательно передаю только blob,
        // заголовок Content-Type, не нужен потому что объект Blob имеет встроенный тип (image/png, заданный в toBlob)
        let response = await fetch(`http://localhost:3001/api/fetch/canvas?name=${canvasImageName}`, {
            method: 'POST',
            body: blob
        });

        // сервер ответит подтверждением и размером изображения
        let result = await response.json();
        console.log("canvas is saved ", result);
    };

    loadCanvas = () => {
        this.ref.current.toBlob(function(blob) {
            // после того, как Blob создан, загружаем его
            let link = document.createElement('a');
            link.download = 'example.png';

            link.href = URL.createObjectURL(blob);
            link.click();

            // удаляем внутреннюю ссылку на Blob, что позволит браузеру очистить память
            URL.revokeObjectURL(link.href);
        }, 'image/png');
    };

    clearCanvas = () => {
        const canvas = this.ref.current;
        const mCtx = canvas.getContext("2d");

        mCtx.clearRect(0, 0, canvas.width, canvas.height);
    };

    onCanvasImageNameChange = (e) => {
        this.setState({
            canvasImageName: e.target.value
        });
    };

    render() {
        return (
            <div className="fetch">
                <canvas className="fetch__canvas" ref={this.ref} width={300} height={200}
                        style={{border: "1px solid"}}></canvas>
                <input
                    type="button"
                    value="Отправить"
                    onClick={() => this.sendCanvas()}/>

                <input
                    type="button"
                    value="Очистить"
                    onClick={() => this.clearCanvas()}/>

                <input
                    type="text"
                    placeholder="Название изображения"
                    onChange={this.onCanvasImageNameChange}
                />
                <button type="button" onClick={() => this.loadCanvas()}>Upload canvas</button>
            </div>
        );
    }
}
