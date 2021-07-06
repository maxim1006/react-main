import customAxios from '../api/axios';

export function renameFile(originalFile, newName) {
    return new File([originalFile], newName, {
        type: originalFile.type,
        lastModified: originalFile.lastModified,
    });
}

export function uploadFile(type, file, onUploadProgress) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
        },
    };
    if (onUploadProgress) {
        config.onUploadProgress = onUploadProgress;
    }
    return customAxios.post('url', formData, config);
}
