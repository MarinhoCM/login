require('dotenv').config();
import * as env from 'env-var';

export const serverConfig = {
    port: env.get('SERVER_PORT').required().default('3000').asPortNumber()
}
