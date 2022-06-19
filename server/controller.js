module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ['A faithful friend is a strong defense.', 'A fresh start will put you on your way.', 'A lifetime friend shall soon be made.', 'A beautiful, smart, and loving person will be coming into your life.', 'Advice, when most needed, is least heeded.'];

        let randomIndex = Math.floor(Math.random() * fortune.length)
        let randomFortune = fortune[randomIndex]

        res.status(200).send(randomFortune)
    }, 

    getMotivation: (req, res) => {
        const motivation = ["Keep pushing you're almost there", 'You got this!', "You're awesome", "You're doing great"]
        let randomIndex = Math.floor(Math.random() * motivation.length)
        let randomMotivation = motivation[randomIndex]
        res.status(200).send(randomMotivation)
    },

    getGoals: (req,res) => {
        const goals = ['Make big bucks', 'Dream big', 'Get your dream job']
        let randomIndex = Math.floor(Math.random() * goals.length)
        let randomGoals = goals[randomIndex]
        res.status(200).send(randomGoals)
    },

    getQuotes: (req, res) => {
        const quotes = ['Learn as if you will live forever, live like you will die tomorrow.', "It is better to fail in originality than to succeed in imitation.", "Don't let yesterday take up too much of today."]
        let randomIndex = Math.floor(Math.random() * quotes.length)
        let randomQuotes = quotes[randomIndex]
        res.status(200).send(randomQuotes)
    }
    

}