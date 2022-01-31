import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoDBConfig = async (
  configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
    ...getMongoOptions(),
  };
};

const getMongoString = (configService: ConfigService): string => {
  const str = `mongodb://${configService.get(
    'MONGO_LOGIN',
  )}:${configService.get('MONGO_PASSWORD')}@${configService.get(
    'MONGO_HOST',
  )}:${configService.get('MONGO_PORT')}/${configService.get(
    'MONGO_AUTHDATABASE',
  )}`;

  return str;
};

const getMongoOptions = () => ({
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
