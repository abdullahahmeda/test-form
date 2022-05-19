const answers = [
    {"q1":" Opportunities "},
    {"q2":" Feeling sorry "},
    {"q3":" Faisal’s parents "},
    {"q4":" Opportunity "},
    {"q5":" Don’t waste time regretting over missed chances "},
    {"q6":" Decided "},
    {"q7":" Coffee shop "},
    {"q8":" Immature "},
    {"q9":" Bad grades "},
    {"q10":" An opinion "},
    {"q11":" Right "},
    {"q12":" Being negative "},
    {"q13":" I want to go out into the world "},
    {"q14":" Maybe, possibly, perhaps "},
    {"q15":" positive "},
    {"q16":" It’s never too late to do things you want. "},
    {"q17":" Wishes and regrets "},
    {"q18":" Starting making new ones "},
    {"q19":" He could be doing the work himself "},
    {"q20":" You still alive = It’s never too late to do things you wish "},
]

const causes_answers = [
    {"q1":`Because you can find this information directly while reading the conversation .`},
    {"q2":`Because you can recognize while reading text, that " Feeling sorry" means not being happy about something happened. It is the only word in the text that suits the meaning of the verb "regret" It is mentioned directly in conversation`},
    {"q3":`Because you can recognize directly while reading conversation, that Faisal said " My parents". Then, he used the pronoun "they" to refer to "his parents" when talking about them again.`},
    {"q4":`Because you can recognize directly while reading conversation that Faisal said " I missed "good opportunities" and Ibrahim answered him that life full of "chances" . This means they are connected. So, "good chance" has similar meaning to " opportunity" .`},
    {"q5":`Because when you think while reading the whole conversation, you will find that this answer talks about the conversation's idea in general, not about specific parts of it. It covers all the conversation' ideas .`},
    {"q6":`Because when you think while reading the conversation, Ibrahim said " my mind set on a carrier”. the mind used for thinking. So, you can guess that the meaning of this phrase is taking decisions and deciding.`},
    {"q7":`Because at the beginning of conversation Faisal asked Ibrahim if he wants to order something and Ibrahim said he liked their coffee . So, you can guess they are in a coffee shop.`},
    {"q8": `Because Faisal mentioned that in the conversation . He was sorry for losing lots of chances because he was immature ; means not thinking well. He didn't listen to his parents, maybe because he was young. The other choices not related to the conversation.`},
    {"q9": `Because the conversation talks about all the choices. Faisal and Ibrahim talked about college, job, business course , but never mention " bad grades"`},
    {"q10":`Because the phrase starts with " I guess" . It's not truth. It is only what Ibrahim thinks.`},
    {"q11":`Because Ibrahim told Faisal that there's still chance and he still can go to school. Going to school is always good. It can't be something wrong, stupid, crazy. So, " right" is the best choice.`},
    {"q12":`Because while reading the conversation. you can understand that it says if you lost an opportunity, you should be positive, try again, and make new opportunities. It refers to true and wrong behaviours.`},
    {"q13":`Because this is an idiom that has certain meaning. this phrase mean to work and have more money or a better social position. So, it doesn't mean the direct meaning of the verb " go out" .`},
    {"q14":`Because "probably" means something not certain, not sure. so, we put it with the words that have similar meanings. While the other groups don't suit the meaning of " probably"`},
    {"q15":`Because while reading the conversation you can recognize the character of Ibrahim from his words. Ibrahim encourages Faisal and said to him " still there are chances". So, you can understand that he has good attitude about life, which is something good and positive .`},
    {"q16":`Because while reading the conversation, you can understand that the idea that represents the whole conversation is " It's never too late to do things you wish". While the other choices are talking about parts of conversatin only.`},
    {"q17":`Because in many parts of the conversation there is a wish or regret for example: Faisal said "I wish I’d taken a course in business management" and at the beginning of conversation both Faisal and Ibrahim said they regret things. So, this title is suitable for the conversation.`},
    {"q18":`Because when we start making new opportunities, we make ourselves busy and positive. So, this can help us to save our time and reduce feeling sorry about missed chances.`},
    {"q19":`Because taking business management course, means Faisal will learn how to do the work. So, you can predict/ guess that Faisal can do the work himself and doesn't need to employ someone else to do the work.`},
    {"q20":`Because from reading the whole conversation, you can understand and come out with the result that says: " As long as you still alive, It's never too late to do what you wish".`},
]


const ratings_data = [
    {"q1":""},
    {"q2":""},
    {"q3":""},
    {"q4":""},
    {"q5":""},
    {"q6":""},
    {"q7":""},
    {"q8":""},
    {"q9":""},
    {"q10":""},
    {"q11":""},
    {"q12":""},
    {"q13":""},
    {"q14":""},
    {"q15":""},
    {"q16":""},
    {"q17":""},
    {"q18":""},
    {"q19":""},
    {"q20":""},
]



const right_words = [
    "Well done!",
    "Excellent!",
    "Good Job!",
    "Very Good!",
    "Bravo!",
    "Great!",
    "Amazing!",
    "You did it!",
    "That’s good!",
    "Wonderful!",
    "You got it!",
    "I’m Proud of you!",
    "Nice work!",
    "Keep it up!",
    "You did very well!"
]


const TryAgain_words = [

    "Give it another try!",
    "Try again!",
    "Come on! You can do it",
    "Never give up!",
    "Keep tying!",
    "Stay strong!",
    "Try once more!",
    "Never Stop!"
]

const wrong_words = [

   
    `<span class="red">Sorry!</span>   <span class="black">Your answer is wrong.</span>  <br/> The correct answer is`,
    `<span class="red">No!</span>   <span class="black">This is not the right answer.</span>  <br/> The correct answer is`,
    `<span class="red">Oops!</span>   <span class="black">Incorrect answer.</span>  <br/> The correct answer is`,
    `<span class="red">This is not true!</span>  <br/> The correct answer is`,
    `<span class="red">Sorry!</span>   <span class="black">You didn’t get it.</span>  <br/> The correct answer is`,

    
]

const correct_imgs = [
    "imgs/correct/correct1.gif",
    "imgs/correct/correct2.gif",
    "imgs/correct/correct3.gif",
    "imgs/correct/correct4.gif"
]

const again_imgs = [
    "imgs/again/again1.gif",
    "imgs/again/again2.gif",
    "imgs/again/again3.gif"
]

const wrong_imgs = [
    "imgs/wrong/wrong1.gif",
    "imgs/wrong/wrong2.gif",
    "imgs/wrong/wrong3.gif"

]


const correct_sounds = [
    "sounds/correct/correct2.mp3",
    "sounds/correct/correct4.mp3",
    "sounds/correct/correct5.mp3",
    "sounds/correct/correct6.mp3"

]

const again_sounds = [
    "sounds/again/again1.mp3",
    "sounds/again/again2.mp3",


]

const wrong_sounds = [
    "sounds/wrong/wrong1.mp3",
    "sounds/wrong/wrong2.mp3",
    "sounds/wrong/wrong3.mp3",


]

const next_btn = document.getElementById("next_btn");
const back_btn = document.getElementById("back_btn");



let page = 1;

function RenderPage(){
    const count = page * 4
    if(page < 5 || page == 0){
        next_btn.style.display = "block"
    }
    const questions = Array.from(document.querySelector(".questions").children)
    questions.forEach((ele)=>{
        ele.style.display = "none"
    })
    for (let i = count - 4; i < count; i++) {
        const element = questions[i];
   
        element.style.display = "block"
        
    }
}



window.onload = RenderPage


function Validation(){
    const count = page * 4
    const questions = Array.from(document.querySelector(".questions").children)
    let isvalid = true;

    for (let i = count - 4; i < count; i++) {
        const element = questions[i];
        const rate = ratings_data[i];
   
        const q_num = element.children[1].dataset.q
        
        if(document.querySelector(`input[name="${q_num}"]:checked`) == null){

            isvalid = false;
            const err = document.createElement("div")
            err.className = `err err_${q_num}`;
            err.innerHTML = `
            <i class="fa-solid fa-circle-exclamation"></i>
            <div>Please, answer all questions before continuing.</div>
            
            `

            if(!element.children[element.children.length - 1].classList.contains("err")){
                element.appendChild(err);
            }

        } 


        if(rate[q_num].length <= 1){
            isvalid = false
            const err = document.createElement("div")
            err.className = `err rate_err rate_err_${q_num}`;
            err.innerHTML = `
            <i class="fa-solid fa-circle-exclamation"></i>
            <div>Please, evaluate the feedback.</div>
            
            `

            if(!element.children[element.children.length - 1].classList.contains("err")){

                if(!element.children[element.children.length - 1].classList.contains("rate_err")){
                    element.appendChild(err);
                }

            }

        }

    }


    return isvalid;
    
}



next_btn.addEventListener("click",()=>{
    if(Validation()){
        if(page + 1 <= 5){
            page = page + 1;
            document.querySelector(".body").scrollTop = 0
            RenderPage()
            back_btn.style.display = "block"
            if(page == 5){
                next_btn.style.display = "none"
            }
        }

    }

   
})

back_btn.addEventListener("click",()=>{
    
    
        page -= 1 
        console.log(page);
        document.querySelector(".body").scrollTop = 0
        RenderPage()
        if(page == 1){
            back_btn.style.display = "none"
        }
    

    

   
})



function getRandomWord(words){
    return words[Math.floor(Math.random() * words.length)]
}

let try_count ;
let wrong_counter = -1;


const answers_array = Array.from(document.querySelectorAll(".answers"));

answers_array.forEach((ele)=>{
    const q_array = Array.from(document.querySelectorAll("."+ele.dataset.q));
   
    q_array.forEach((element)=>{
      
        element.children[0].addEventListener("change",(e)=>{
            const q_num = ele.dataset.q

            document.querySelector(".err_"+q_num)?.remove();

            const card = document.getElementById(ele.dataset.q+"_card");
           
            const right_ans = answers[parseInt(ele.dataset.q.split("q")[1]) - 1][ele.dataset.q]

            
            
            if(right_ans == e.target.value){

                const cause_answer = causes_answers[parseInt(ele.dataset.q.split("q")[1]) - 1][ele.dataset.q]

                const all_answers = Array.from(document.querySelectorAll(".answer"))
                all_answers.forEach((ele)=>{
                    
                    if(!ele.children[0].classList.contains("none_editable")){
                        ele.children[0].disabled = false
                    }
                    
                    
                   
                
            })

                const audio = new Audio()   
                const correct_img = getRandomWord(correct_imgs)

                if(correct_img === "imgs/correct/correct1.gif"){
                    
                    audio.src = "sounds/correct/correct1.mp3"
                    setTimeout(() => {
                        audio.play()
                    }, 200);
                    
                }else{
                    audio.src = getRandomWord(correct_sounds)
                    audio.play()
                }
                
                card.style.display = "block";
                
                card.innerHTML = `<div class="x_mark"><i class="fa-solid fa-xmark"></i></div>
                <div style="flex:1"><img class="emoji_img" style="object-fit:contain;" src="${correct_img}" alt=""></div>
                <div style="flex:3" class="right"><span class="green">${getRandomWord(right_words)}  Correct answer.</span> <br/> <div style="margin-top:10px">${cause_answer}</div></div>`

                document.getElementById(ele.dataset.q+"_rating").style.display = "flex"
                q_array.forEach((radio)=>{
                    radio.children[0].disabled = true
                    radio.children[0].classList.add("none_editable")
                })
               

                const x_marks = Array.from(document.querySelectorAll(".x_mark"))
                x_marks.forEach((ele)=>{
                    ele.addEventListener("click",()=>{

                            
                    document.getElementById(card.dataset.btn).style = "block"
                    card.style.display = "none"
                    })
                })

            

               

            }else{

             
                if(card.children.length === 0){
                  
                    const audio = new Audio() 
                    audio.src = "sounds/again/again2.mp3"
                    audio.play()
                    card.style.display = "block";
                   
                    card.innerHTML = ` 
                    <div style="flex:1"><img class="emoji_img" style="object-fit:contain;" src="${getRandomWord(again_imgs)}" alt=""></div>
                    <div class="try_again orange" style="flex:2">${getRandomWord(TryAgain_words)}</div>`
                    element.remove();

                    const all_answers = Array.from(document.querySelectorAll(".answer"))
                    all_answers.forEach((ele)=>{
                        if(!ele.classList.contains(q_num)){
                            ele.children[0].disabled = true
                        }
                    })

                }else{

                    
                    
                    if(card.children[1].classList.contains("try_again")){
                        const all_answers = Array.from(document.querySelectorAll(".answer"))
                        all_answers.forEach((ele)=>{
                            
                                                    
                            if(!ele.children[0].classList.contains("none_editable")){
                                ele.children[0].disabled = false
                            }
                            
                        })

                        const cause_answer = causes_answers[parseInt(ele.dataset.q.split("q")[1]) - 1][ele.dataset.q]

                        if(wrong_counter >= (wrong_words.length - 1)){
                            wrong_counter = -1
                        }

                        wrong_counter += 1

                        const wrong_word = wrong_words[wrong_counter]
                        const audio = new Audio() 
                        audio.src = getRandomWord(wrong_sounds)
                        audio.play()
                        
                        card.style.display = "block";
                        
                        card.innerHTML = `<div class="x_mark"><i class="fa-solid fa-xmark"></i></div>
                        <div style="flex:1"><img class="emoji_img" style="object-fit:contain;" src="${getRandomWord(wrong_imgs)}" alt=""></div>
                        <div class="wrong" style="flex:2"> ${wrong_word}  <span class="blue">"${right_ans}"</span> <br style="content: '';"> <div style="margin-top:10px">${cause_answer}</div> </div>`
    
                        document.getElementById(ele.dataset.q+"_rating").style.display = "flex"
                        q_array.forEach((radio)=>{
                            radio.children[0].disabled = true
                            radio.children[0].classList.add("none_editable")
                        })
    
                        const x_marks = Array.from(document.querySelectorAll(".x_mark"))
                        x_marks.forEach((ele)=>{
                            ele.addEventListener("click",()=>{

                                    
                            document.getElementById(card.dataset.btn).style = "block"
                            card.style.display = "none"
                            })
                        })



                       


                    }

                   

                }
            
            }


         

        })
    })
})




const show_btns = Array.from(document.querySelectorAll(".show_btn"))

show_btns.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        
        document.getElementById(e.currentTarget.dataset.card).style.display = "block"
        ele.style.display = "none"
    })
})



const rating = Array.from(document.querySelectorAll(".rating"))

rating.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{


        const current_num = parseInt(e.currentTarget.dataset.q.split("q")[1]) - 1;
        ratings_data[current_num][e.currentTarget.dataset.q] = e.currentTarget.innerText

        document.querySelector(".rate_err_"+e.currentTarget.dataset.q)?.remove();
        
        
        const color_name = e.currentTarget.className.split("_")[1];

        e.currentTarget.classList.add(color_name)

        rating.forEach((ele)=>{
            
            if(ele.dataset.q == e.currentTarget.dataset.q){
                if(ele != e.currentTarget){
                    ele.classList.remove(ele.classList[2])
                }

            }

           
        })

    })
})




