function liker(listOfFriends){
    let wordOfFriends = ''
    for (friend in listOfFriends){
        wordOfFriends+=`${listOfFriends[friend]}, `
    }
    console.log(`${wordOfFriends} liked it`)
}
let friends = [`Ada`, `Obi`, `Juniour`, `Emeka`]
liker(friends)