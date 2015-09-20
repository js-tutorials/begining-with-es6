var jack = {
    name:'jack',
    friends:['james','steve'],
    printFriends: function(){
        this.friends.forEach((f) => {
            console.log(this.name, 'knows' , f);
        })
    }
};