import { COMMANDS } from '../constants/common.constants';
import { BOT } from '../constants/bot.constants';

export const setBotCommands = async () => {
    await BOT.setMyCommands(
        Object.entries(COMMANDS).map(([command, description]) => ({
            command,
            description,
        }))
    );
};
