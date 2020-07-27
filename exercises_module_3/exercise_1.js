//Exercise 1.1
//Transform the following code snippets using asynchronous / wait:

// Delay function triggers .then after 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

function onePerSecond() {
    delay().then(() => {
        console.log('1s');
        delay().then(() => {
            console.log('2s');
            delay().then(() => {
                console.log('3s');
            });
        })
    });
}
onePerSecond();
//Using async/await
const onePerSecond2 = async () => {
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
}
onePerSecond2();

//Exercise 1.2
import axios from 'axios';

function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('User does not exist');
        })
}
getUserFromGithub('tatiana.mara');
getUserFromGithub('tatiana124123');

//Using async/await
function getUserFromGithub2(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.log('User does not exist');
    }
}
getUserFromGithub2('tatiana.mara');
getUserFromGithub2('tatiana124123');

//Exercise 1.3
class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('Repository does not exist');
            })
    }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

//Using async/await
class Github2 {
    static getRepositories(repo) {
        try {
            response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch (err) {
            console.log('Repository does not exist');
        }
    }
}
Github2.getRepositories('rocketseat/rocketseat.com.br');
Github2.getRepositories('rocketseat/dslkvmskv');

//Exercise 1.4
const searchUser = user => {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('User does not exist');
        });
}
searchUser('tatiana.mara');

//Using async/await
const searchUser2 = async user => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.log('User does not exist');
    }
}
searchUser2('tatiana.mara');
