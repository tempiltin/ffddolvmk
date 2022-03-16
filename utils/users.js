const users = []

// Bazaga yangi qo'shilgan userni qo'shadi
function userJoin(id, username, room) {
    const user = { id, username, room }

    users.push(user)

    return user
}

// Bazadan user ma'lumotlarini olib beradi
function getCurrentUser(id) {
    const user = users.find(user => user.id === id)
    return user
}

// Bazadan userni o'chirish
function leaveUser(id) {
    const index = users.findIndex(user => user.id === id)  // agar -1 bo'lsa user bazada yo'q bo'ladi

    if (index !== -1) {
        // userni bazadan o'chirib qaytarib berish kerak
        return users.splice(index, 1)[0]
    }
}

function joinRoom(room) {
    return users.filter(user => user.room === room)
}

module.exports = {
    userJoin,
    getCurrentUser,
    leaveUser,
    joinRoom
}