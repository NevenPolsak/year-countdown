const newYear= "01 January 2023"
const days= document.getElementById("days") 
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

function newYearCountDown(){
    const newDate = new Date(newYear)
    const todaysDate = new Date()
    //console.log(todaysDate)
    const tseconds = (newDate-todaysDate)/1000
    const tdays = Math.floor(tseconds/3600/24)
    const thours = Math.floor(todaysDate/3600)%24
    const tmin=Math.floor(tseconds/60)%60
    const tsec=Math.floor(tseconds)%60

    days.innerHTML=tdays
    hours.innerHTML=thours
    minutes.innerHTML=tmin
    seconds.innerHTML=tsec
}
newYearCountDown()
setInterval(newYearCountDown,1000)

function celebration(){
const ballon = document.createElement("div")
const ballon1 = document.createElement("div")


ballon.classList.add("ballon")
ballon1.classList.add("ballon1")
ballon.style.left=Math.random()*100 + "vw"
ballon.style.animationDuration=Math.random()*2+3 
ballon.innerText=":🎈"
document.body.appendChild(ballon)

ballon1.style.left=Math.random()*100 + "vw"
ballon1.style.animationDuration=Math.random()*2+3 
ballon1.innerText=":🎈"
document.body.appendChild(ballon1)



setTimeout(()=>{
    ballon.remove()
},5000)
setTimeout(()=>{
    ballon1.remove()
},5000)


}
setInterval(celebration,300)