let jobList = new Map();

jobList.set(`Chef`, 69382.00)
jobList.set(`Chemist Civil Eng.`, 58808.00)


document.addEventListener(`DOMContentLoaded`, () =>{

    let elementById = function(id) {return document.getElementById(id)}

    let addListener = function(id,event,code) {elementById(id).addEventListener(event, (eventData) => {code(eventData)})}

    //THIS can be rovmoved it was to try add save time typing it all by hand
    let tester = elementById(`placeholder`)

})

