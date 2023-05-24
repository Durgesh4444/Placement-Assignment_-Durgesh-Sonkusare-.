const input = document.getElementById("inbox")

let timer; 

const debounce = (fn, delay)=>{
    if(timer) clearTimeout(timer)
    timer =setTimeout(fn, delay)
} 

const getSuggestion = () =>{
    debounce(()=>{
        console.log("fetching result for ", input.value);
    }, 500)
}