import IMask from 'imask';

export const PHONE_NUMBER_REGEXP = /^05[0-9]{8}$/g;
export const EMAIL_REGEXP =
    /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9][a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/i;

export const ENGLISH_ARABIC_LETTERS_REGEXP =
    /^[a-z|\u0600-\u065F|\u066E-\u06ff|\u0750-\u077f|\ufb50-\ufc3f|\ufe70-\ufefc]+$/gim;
export const ASCII_PRINTABLE_CHARACTERS_REGEXP = /^[\x20-\x7F]+$/gim;

export const PHONE_NUMBER_MASK = IMask.createMask({
    mask: '05XXXXXXXX',
    definitions: {
        X: /[0-9]/,
        '5': /[0-9]/,
    },
});

export const CREDIT_CARD_NUMBER = IMask.createMask({
    mask: 'XXXX XXXX XXXX XXXX',
    definitions: { X: /[0-9]/ },
});

export const CVV = IMask.createMask({
    mask: 'CVV',
    definitions: { C: /[0-9]/, V: /[0-9]/ },
});

export const DATE = IMask.createMask({
    mask: 'MM/YY',
    definitions: { M: /[0-9]/, Y: /[0-9]/ },
});

export const NOT_NUMBER_REGEXP = /\D/g;

export const NUMBER_REGEXP = /^[0-9]*$/;

export const ALPHANUMERIC_REGEXP = /^[0-9a-zA-Z]*$/;

export const NUMBER_MASK = IMask.createMask({
    mask: NUMBER_REGEXP,
});

export const ALPHANUMERIC_MASK = IMask.createMask({
    mask: ALPHANUMERIC_REGEXP,
});

export const COLOR_HEX_REGEXP = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
