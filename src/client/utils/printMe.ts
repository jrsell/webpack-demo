import axios from 'axios';
import { config } from './clientConfig';

export default async function printMe() {
    const result = await axios.get('/api/helloworld');

    alert(`
        Api result: ${result.data.data},
        config.PORT: ${config.PORT}, 
        config.DOMAIN: ${config.DOMAIN},
    `);
}