import { MessageBaseModel, MessageEnum } from '../models/message.model';
import { Message } from 'node-telegram-bot-api';
import { handleStartMessages } from '../messages/start.message';

export const START_MESSAGE_MAP: Record<
    MessageEnum,
    ({ chat, msg }: MessageBaseModel) => Promise<Message | void>
> = {
    // когда пользователь первый раз открыл бота и нажал на кнопку подключиться сработает /start
    [MessageEnum.Start]: ({ chat, msg }) => handleStartMessages({ chat }),
};
