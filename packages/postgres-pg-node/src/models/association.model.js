import { UserModel } from './user.model.js';
import { PostModel } from './post.model.js';

export const associateModels = () => {
    UserModel.hasMany(PostModel);
    // targetKey: 'id' указывать не нужно так как по умолчанию мапится на primary key
    PostModel.belongsTo(UserModel, { foreignKey: 'userId' });
};
