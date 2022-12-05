export const getAbstractException = (msg, e) => {
    const fullError = `${msg} ${e}`;

    console.error(fullError);

    return { error: fullError };
};
