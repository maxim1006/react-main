import React, { memo, useState } from 'react';
import styles from './image-preload.module.scss';

type ImagePreloadProps = {};

const ImagePreload = memo<ImagePreloadProps>(function ImagePreload() {
    const [previewSrc, setPreviewSrc] = useState(null);

    const showPreview = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files.length > 0) {
            setPreviewSrc(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <div className={styles.formInput}>
            {previewSrc && (
                <div className={styles.preview}>
                    <img className={styles.img} alt='some preview' src={previewSrc} id='file-ip-1-preview' />
                </div>
            )}
            <label className={styles.label} htmlFor='file-ip-1'>
                Upload Image
            </label>
            <input className={styles.input} type='file' id='file-ip-1' accept='image/*' onChange={showPreview} />
        </div>
    );
});

export default ImagePreload;
