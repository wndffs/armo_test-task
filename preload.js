const URL = 'https://jsonplaceholder.typicode.com/users';

const createDiv = (name, username, email) => {
  const div = document.createElement('div');
  div.classList.add('info');
  const nameEl = document.createElement('p');
  nameEl.textContent = `Name: ${name}`;
  const usernameEl = document.createElement('p');
  usernameEl.textContent = `Username: ${username}`;
  const emailEl = document.createElement('p');
  emailEl.textContent = `Email: ${email}`;
  div.appendChild(nameEl);
  div.appendChild(usernameEl);
  div.appendChild(emailEl);
  document.querySelector('.wrapper').appendChild(div);
};

fetch(URL).then((res) => res.json())
  .then((res) => {
    res.map((obj) => {
      createDiv(obj.name, obj.username, obj.email);
    });
  })
  .catch((err) => { throw new Error(err); });
