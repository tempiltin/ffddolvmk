const chatForm = document.querySelector('#chat-form');
const msgInp = document.querySelector('#msg');
const chatMessages = document.querySelector('.chat-messages');
const usersList = document.querySelector('#users');
const roomName = document.querySelector('#room-name');
const socket = io()
const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true  
})
socket.emit('joinRoom', { username, room})

socket.on('roomUsers', (users) => {
    outputRoomName(users[0].room)
    outputUsers(users)
})
socket.on('message', msg => {
    outputMessages(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight
})
chatForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const msg = msgInp.value
    socket.emit('chat-message', msg)
    msgInp.value = ''
})

function outputMessages(msg) {
    const div = document.createElement('div')
    div.classList.add('message')
    div.innerHTML = `
    <p class="meta">${msg.username} <span>${msg.time}</span></p>
    <p class="text">${msg.msg}</p>
    `
    document.querySelector('.chat-messages').appendChild(div);
}
function outputUsers(users) {
    return usersList.innerHTML = `
    ${users.map(user => `<li>${user.username}</li>`).join('')}
    `
}
function outputRoomName(room) {
    roomName.innerText = `${room}`
}