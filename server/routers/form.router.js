import * as express from 'express';
import multer from 'multer';

export const formRouter = express.Router();

formRouter.post('/from-form', (req, res) => {
    const { body } = req;
    console.log({ bodyFromForm: body }); //  {name: 'Max', data: 'Hello mom from UI form!'} прилетит из /Users/max/projects/react-main1/server/url-encoded-form/index.html
    res.status(200).json(body.data);
});

formRouter.post('/from-fetch-form', (req, res) => {
    const { body } = req;

    console.log({ bodyFromFetchForm: body }); //  { name: 'asd', value: '123' }

    res.status(200).json(body);
});

// config multer
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    },
});
const upload = multer({ storage }).array('fileData', 5);

formRouter.post('/from-fetch-form-data', (req, res) => {
    upload(req, res, err => {
        const filedata = req.file;
        const path = filedata.path;
        const mimetype = filedata.mimetype;

        if (req.files.length) {
            req.files.forEach(file => {
                if (
                    !(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg')
                ) {
                    res.status(422).json(
                        `{"message": "Upload error. File should be 'image/png' || 'image/jpg' || 'image/jpeg'"}`
                    );
                }
            });

            res.status(200).json(`{"message": "Файлы загружены"}`);
        } else {
            if (
                !filedata ||
                !path ||
                !mimetype ||
                !(mimetype === 'image/png' || mimetype === 'image/jpg' || mimetype === 'image/jpeg')
            ) {
                res.status(422).json(`{"message": "No file data"}`);
            } else {
                res.status(200).json(`{"message": "Файл загружен ${path}"}`);
            }
        }
    });
    console.log({ fromFetchFormData: req.files });
    console.log({ fromFetchFormData: req.body });
});

formRouter.post('/from-fetch', (req, res) => {
    const { body } = req;

    console.log({ bodyFromFetch: body }); // { name: 'Max', data: 'data from fetch', key1: 'value1' } обычный фетч отлично работает не забываем заголовок 'Content-Type': 'application/json;charset=utf-8',
    res.status(200).json(body);
});
