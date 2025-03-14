import { ChangeEvent, memo, useState } from 'react';
import styles from './upload-preview.module.scss';

type UploadPreviewProps = {};

const UploadPreview = memo<UploadPreviewProps>(function UploadPreview() {
    const [previewSrc, setPreviewSrc] = useState('');

    const showPreview = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setPreviewSrc(URL.createObjectURL(e.target.files[0] as any));
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

export default UploadPreview;
