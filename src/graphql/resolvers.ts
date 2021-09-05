// import { users } from '../../database/db';
import {getUsers} from '../utils'

export const resolvers = {
        Query: {
//          users: () => users,
            users: () => getUsers(),
        }
    };
