import axios from 'axios';

export default async function printMe() {
    const result = await axios.get('/api/helloworld');

    alert("I called an api and got some data!: " + result.data.data);
}