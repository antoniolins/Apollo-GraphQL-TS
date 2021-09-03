import { users } from '../../database/db';

export const resolvers = {
        Query: {
          users: () => users,
        }
    };
