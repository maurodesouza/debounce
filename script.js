const result = document.querySelector('.result');

const filterUsers = async name =>
  fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`)
  .then(res => res.json())

const debounce = (fn, wait = 1000, time) => (...args) =>
  clearTimeout(time, time = setTimeout(() => fn(...args), wait));

const handleKeyUp = async event => {
  const users = await filterUsers(event.target.value)

  console.log(users.map(user => user.name))
}

document.querySelector('input').addEventListener('keyup', debounce(handleKeyUp, 500))
