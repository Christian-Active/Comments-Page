// vote count section
let comments = document.querySelectorAll(".comments")
let increase = document.getElementsByClassName("plus")
let decrease = document.getElementsByClassName("minus")

for(let i = 0; i < increase.length; i++){
    increase[i].addEventListener("click", () => {
        plusVotes(increase[i])
    })   
    decrease[i].addEventListener("click", () => {
        plusVotes(decrease[i])
    })    
}
// add votes
function plusVotes(input){
    let votes = input.parentElement
    let vote = votes.querySelector("p")
    let newVote = Number(vote.innerHTML)
    if(input.className == "plus"){
        vote.innerHTML = newVote + 1
    }else if(input.className == "minus"){
        if(newVote == 0){
            vote.innerHTML = newVote
        }else{
            vote.innerHTML = newVote - 1
        }
    }
}

// add comment section
let textArea = document.getElementById("text-area")
let julie = document.getElementById("julie")
let store = []
let send = document.getElementById("send")
let resend = document.getElementById("resend")
let check = document.getElementById("checkbox")
let replies = document.querySelectorAll(".replies")
let commentSection = document.getElementById("comments-section")
let body = document.querySelector("body")
let confirmation = document.querySelector(".confirmation")
let no = document.getElementById("no")
let yes = document.getElementById("yes")


send.addEventListener("click", () => {
    if(check.checked){
        if(result == "amy"){
            reply(`reply-amy`)
        }else if(result == "max"){
            reply(`reply-max`)
        }
    }else{
        addComment()
    }
})


let addComment = function(){
    if(textArea.value == ""){
        return
    }else{
        let newComment = document.createElement("section")
        newComment.innerHTML = julie.innerHTML
        commentSection.appendChild(newComment)
        let innerText = newComment.querySelector(".innertext")
        let at = newComment.querySelector(".at")
        let vote = newComment.querySelector(".vote")
        let plus = newComment.querySelector(".plus")
        let minus = newComment.querySelector(".minus")
        let time = newComment.querySelector(".time")
        newComment.classList.add("comments")
        innerText.innerText = textArea.value
        at.style.display = "none"
        vote.innerHTML = 0
        plus.addEventListener("click", () => {
            plusVotes(plus)
        })   
        minus.addEventListener("click", () => {
            plusVotes(minus)
        })    
        time.innerHTML = "Just Now"
        del(newComment)
        edit(newComment)
        
    }
    textArea.value = ""
}

// reply section
for(let i = 0; i < replies.length; i++){
    replies[i].addEventListener("click", (e) => {
        textArea.focus()
        check.click()
        send.classList.add("reply-checked")
        let id = e.target.id
        store.push(id)
        let result = store[store.length - 1]
        send.addEventListener("click", () => {
            if(check.checked){
                if(result == "amy"){
                    reply(`reply-amy`, id)
                }else if(result == "max"){
                    reply(`reply-max`, id)
                }else{
                    reply(`reply-max`, id)
                }
            }
    })
})
}

function reply(input, trial){
    if(textArea.value == ""){
        return
    }else{
        let parent = document.getElementById(input)
        let sibling = parent.querySelector(".reply-section")
        let name = parent.querySelector(".name")
        let newReply = document.createElement("div")
        sibling.appendChild(newReply)
        newReply.innerHTML = julie.innerHTML
        let innerText = newReply.querySelector(".innertext")
        innerText.innerText = textArea.value
        newReply.classList.add("reply", "comments")
        let time = newReply.querySelector(".time")
        time.innerHTML = "Just Now"
        let vote = newReply.querySelector(".vote")
        vote.innerHTML = 0
        let plus = newReply.querySelector(".plus")
        let minus = newReply.querySelector(".minus")
        plus.addEventListener("click", () => {
            plusVotes(plus)
        })   
        minus.addEventListener("click", () => {
            plusVotes(minus)
        })    
        let at = newReply.querySelector(".at")
        at.innerText = "@" + name.innerText + " "
        if(trial == "ram"){
            at.innerText = "@" + "ramsesmiron "
        }
        del(newReply)
        edit(newReply)
    }
        textArea.value = ""
        check.checked = ""
}

// delete section
function del(node){
    let remove = node.querySelector("#delete")
    remove.addEventListener("click", () => {
        dimColor()
        
        no.onclick = () => {
            brightenColor()
        }
        yes.onclick = () => {
            node.style.display = "none"
            brightenColor()
        }
    })
}
del(julie)

function dimColor(){
    body.style.backgroundColor = "rgb(0, 0, 0, 0.3)"
        for(let i = 0; i < comments.length; i++){
            comments[i].style.opacity = "0.5"
        }
        confirmation.style.display = "block"
        textArea.disabled = true
        send.disabled = true
        resend.disabled = true
}
function brightenColor(){
    body.style.backgroundColor = "hsl(228, 33%, 97%)"
        for(let i = 0; i < comments.length; i++){
            comments[i].style.opacity = "1"
        }
    confirmation.style.display = "none"
    textArea.disabled = false
}


// edit section
function edit(node){
    let edit = node.querySelector("#edit")
    let innerText = node.querySelector(".innertext")
    edit.addEventListener("click", () => {
        send.style.display = "none"
        resend.style.display = "block"
        textArea.value = innerText.innerText
        resend.addEventListener("click", () => {
            innerText.innerText = textArea.value
            send.style.display = "block"
            resend.style.display = "none"
        })
    })
}
edit(julie)

// light and dark mode section
let light = document.getElementById("light")
let dark = document.getElementById("dark")
let colorMode = document.querySelectorAll(".color-mode")
let mode = document.querySelector(".mode")
let modes = document.querySelector(".modes")
let statement = modes.querySelector("p")
let addcomment = document.querySelector(".add-comment")
let votes = document.querySelectorAll(".votes")
let names = document.querySelectorAll(".name")
colorMode.forEach(mode => {
    mode.addEventListener("click", (e) => {
        console.log(true)
        let id = e.target.id
        if(id == "dark"){
            dark.style.display = "none"
            light.style.display = "block"
            body.classList.add("dark-body")
            comments.forEach(comment => {
                comment.classList.add("dark-comments")
            })
            addcomment.classList.add("dark-comments")
            textArea.classList.add("dark-textarea")
            votes.forEach(vote => {
                vote.classList.add("dark-votes")
            })
            names.forEach(namer => {
                namer.classList.add("dark-name")
            })
            statement.style.color = "white"
            statement.innerText = "Switch to light mode"
        }
        if(id == "light"){
            dark.style.display = "block"
            light.style.display = "none"
            body.classList.remove("dark-body")
            comments.forEach(comment => {
                comment.classList.remove("dark-comments")
            })
            addcomment.classList.remove("dark-comments")
            textArea.classList.remove("dark-textarea")
            votes.forEach(vote => {
                vote.classList.remove("dark-votes")
            })
            names.forEach(namer => {
                namer.classList.remove("dark-name")
            })
            statement.style.color = "hsl(212, 24%, 26%)"
            statement.innerText = "Switch to dark mode"
        }
    })
})
