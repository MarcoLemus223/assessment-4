const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const motivationBtn = document.getElementById('motivationButton')
const goalsBtn = document.getElementById('randomGoalsButton')
const quotesBtn = document.getElementById('quotesButton')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get('http://localhost:4000/api/fortune')
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const getMotivation = () => {
    axios.get('http://localhost:4000/api/motivation')
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const getGoals = () => {
    axios.get('http://localhost:4000/api/goals').then(res => {
        const data = res.data
        alert(data)
    })
}

const getQuotes = () => {
    axios.get('http://localhost:4000/api/quotes').then(res => {
        const data = res.data
        alert(data)
    })
}








complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
motivationBtn.addEventListener('click', getMotivation)
goalsBtn.addEventListener('click', getGoals)
quotesBtn.addEventListener('click', getQuotes)
