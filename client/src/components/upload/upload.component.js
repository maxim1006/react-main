import React, { memo, useState } from 'react';

const UploadComponent = () => {
    const [image, setImage] = useState();

    // Image preview case
    const onChange = e => {
        const fileReader = new FileReader();
        fileReader.onload = () => setImage(fileReader.result);
        fileReader.readAsDataURL(e.target.files[0]);
    };
    return (
        <>
            <input type="file" onChange={onChange} />
            <div
                style={{
                    width: 100,
                    height: 100,
                    backgroundImage: `url('${image}'), linear-gradient(0deg, rgba(12, 32, 50, 0.6), rgba(12, 32, 50, 0.6))`,
                    backgroundSize: '100% 100%',
                }}
            />
        </>
    );
};

export default memo(UploadComponent);
