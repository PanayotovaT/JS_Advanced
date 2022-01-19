class Story {

    #comments;
    #likes;

    constructor(title, creator) {

        this.title = title;
        this.creator = creator;
        this.#comments = [];
        this.#likes = [];
    }

    get likes() {
        if(this.#likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if(this.#likes.length === 1) {
            return `${this.#likes[0]} likes this story!`;
        } else {
            return `${this.#likes[0]} and ${this.#likes.length - 1} others like this story!`;
        }
    }

    like(username) {
        let currentUser = this.#likes.find(x => x === username);
        if(currentUser) {
            return `You can't like the same story twice!`
        } else if(username === this.creator) {
            return `You can't like your own story!`
        } else {
            this.#likes.push(username);
            return `${username} liked ${this.title}!`
        }
    }

    dislike(username) {
        let currentUser = this.#likes.find(x => x === username);
        if(!currentUser) {
            return  `You can't dislike this story!`;
        } else {
            let i = this.#likes.indexOf(username);
            this.#likes.splice(i, 1);
            return `${username} disliked ${this.title}`
        }

    }

    comment(username, content, id) {
        //this.#comments = [{Id, Username, Content, Replies: [{Id, Username, Content}]}, ]
        let commented = this.#comments.find(x => x.Id == id);
        if(!commented) {

            let newId = this.#comments.length + 1;
            let currentComment = {Id: newId , Username: username, Content: content, Replies: []};
            this.#comments.push(currentComment);

            return `${username} commented on ${this.title}`
        } else {
            let newReplyId = `${id}.${commented.Replies.length + 1}`;
            let reply = {Id: newReplyId, Username: username, Content: content};
            commented.Replies.push(reply);

            return `You replied successfully`;
        }

    }

    toString(sortyingType) {

        if(sortyingType === 'asc') {
            
            this.#comments.sort((a, b) => a.Id - b.Id);
            this.#comments.forEach(x => {
                if(x.Replies.length > 1) {
                    x.Replies.sort((a, b) => a.Id -b.Id);
                }
            });

        } else if(sortyingType === 'desc') {
            this.#comments.sort((a, b) => b.Id - a.Id);
            this.#comments.forEach(x => {
                if(x.Replies.length > 1) {
                    x.Replies.sort((a,b) => b.Id - a.Id)
                }
            });

        } else if(sortyingType === 'username') {
            this.#comments.sort((a,b) => a.Username.localeCompare(b.Username));
            this.#comments.forEach(x => {
                if(x.Replies.length > 1) {
                    x.Replies.sort((a,b) => a.Username.localeCompare(b.Username));
                }
            })
        }

        let output = [];
        output.push(`Title: ${this.title}`);
        output.push(`Creator: ${this.creator}`);
        output.push(`Likes: ${this.#likes.length}`);
        if(this.#comments.length > 0) {
            output.push(`Comments:`);
            //-- {id}. {username}: {content}
            this.#comments.forEach(x => {
                output.push(`-- ${x.Id}. ${x.Username}: ${x.Content}`);
                if(x.Replies.length > 0) {
                    x.Replies.forEach(r => {
                        //--- {replyId}. {username}: {content}
                        output.push(`--- ${r.Id}. ${r.Username}: ${r.Content}`);
                    })
                }
            })


        }
        return output.join('\n');
    }

}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
console.log(art.dislike("John"));
console.log(art.likes);
console.log(art.comment("Sammy", "Some Content"));
console.log(art.comment("Ammy", "New Content"));
console.log(art.comment("Zane", "Reply", 1));
console.log(art.comment("Jessy", "Nice :)"));
console.log(art.comment("Sammy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
