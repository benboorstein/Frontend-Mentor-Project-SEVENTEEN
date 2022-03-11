const App = {
    data() {
        return {
            timePeriods: [
                'Daily',
                'Weekly',
                'Monthly'
            ],
            cards: [
                { // QQQ: For the parts of the HTML where the text content is currently 'hrs cur' and 'hrs prev', I have to find a way to set the proper text content using the 'cards' object.
                    cardTitle: 'Work',
                    cardID: 'work',
                    hoursCurrent: {
                        daily: '5',
                        weekly: '32',
                        monthly: '103'
                    },
                    hoursPrevious: {
                        daily: '7',
                        weekly: '36',
                        monthly: '128'
                    }
                },
                {
                    cardTitle: 'Play',
                    cardID: 'play',
                    hoursCurrent: {
                        daily: '1',
                        weekly: '10',
                        monthly: '23'
                    },
                    hoursPrevious: {
                        daily: '2',
                        weekly: '8',
                        monthly: '29'
                    }
                },
                {
                    cardTitle: 'Study',
                    cardID: 'study',
                    hoursCurrent: {
                        daily: '0',
                        weekly: '4',
                        monthly: '13'
                    },
                    hoursPrevious: {
                        daily: '1',
                        weekly: '7',
                        monthly: '19'
                    }
                },
                {
                    cardTitle: 'Exercise',
                    cardID: 'exercise',
                    hoursCurrent: {
                        daily: '1',
                        weekly: '4',
                        monthly: '11'
                    },
                    hoursPrevious: {
                        daily: '1',
                        weekly: '5',
                        monthly: '18'
                    }
                },
                {
                    cardTitle: 'Social',
                    cardID: 'social',
                    hoursCurrent: {
                        daily: '1',
                        weekly: '5',
                        monthly: '21'
                    },
                    hoursPrevious: {
                        daily: '3',
                        weekly: '10',
                        monthly: '23'
                    }
                },
                {
                    cardTitle: 'Self Care',
                    cardID: 'self-care',
                    hoursCurrent: {
                        daily: '0',
                        weekly: '2',
                        monthly: '7'
                    },
                    hoursPrevious: {
                        daily: '1',
                        weekly: '2',
                        monthly: '11'
                    }
                }
            ],
            prevPeriod: ''
        }
    },
    methods: {
        setCardText(event) {
            if (event.target.textContent === 'Daily') {
                this.prevPeriod = 'Yesterday'
                document.getElementById('Daily').classList.remove('active')/////////////////////// QQQ: How to Vue-ize?
            } else if (event.target.textContent === 'Weekly') {
                this.prevPeriod = 'Last Week'
                document.getElementById('Daily').classList.remove('active')/////////////////////// QQQ: How to Vue-ize?
            } else {
                this.prevPeriod = 'Last Month'
                document.getElementById('Daily').classList.remove('active')/////////////////////// QQQ: How to Vue-ize?
            }
        }
    },
    mounted() {
        document.getElementById('Daily').classList.add('active')/////////////////////// QQQ: How to Vue-ize?
        this.prevPeriod = 'Yesterday'
    }
}

Vue.createApp(App).mount('#app')





// QQQ: For "nine..." version and this version, the console error: Error: <svg> attribute height: Expected length, "auto".