const App = {
    data() {
        return {
            timePeriods: [
                'Daily',
                'Weekly',
                'Monthly'
            ],
            cards: [
                {
                    "title": "Work",
                    "timeframes": {
                        "daily": {
                            "current": 5,
                            "previous": 7
                        },
                        "weekly": {
                            "current": 32,
                            "previous": 36
                        },
                        "monthly": {
                            "current": 103,
                            "previous": 128
                        }
                    }
                },
                {
                    "title": "Play",
                    "timeframes": {
                        "daily": {
                            "current": 1,
                            "previous": 2
                        },
                        "weekly": {
                            "current": 10,
                            "previous": 8
                        },
                        "monthly": {
                            "current": 23,
                            "previous": 29
                        }
                    }
                },
                {
                    "title": "Study",
                    "timeframes": {
                        "daily": {
                            "current": 0,
                            "previous": 1
                        },
                        "weekly": {
                            "current": 4,
                            "previous": 7
                        },
                        "monthly": {
                            "current": 13,
                            "previous": 19
                        }
                    }
                },
                {
                    "title": "Exercise",
                    "timeframes": {
                        "daily": {
                            "current": 1,
                            "previous": 1
                        },
                        "weekly": {
                            "current": 4,
                            "previous": 5
                        },
                        "monthly": {
                            "current": 11,
                            "previous": 18
                        }
                    }
                },
                {
                    "title": "Social",
                    "timeframes": {
                        "daily": {
                            "current": 1,
                            "previous": 3
                        },
                        "weekly": {
                            "current": 5,
                            "previous": 10
                        },
                        "monthly": {
                            "current": 21,
                            "previous": 23
                        }
                    }
                },
                {
                    "title": "Self Care",
                    "timeframes": {
                        "daily": {
                            "current": 0,
                            "previous": 1
                        },
                        "weekly": {
                            "current": 2,
                            "previous": 2
                        },
                        "monthly": {
                            "current": 7,
                            "previous": 11
                        }
                    }
                }      
            ],
            prevPeriod: ''
        }
    },
    methods: {
        setCardText(event) {
            if (event.target.textContent === this.timePeriods[0]) {
                this.prevPeriod = 'Yesterday'
                this.$refs.timePeriod[0].classList.remove('active') // this is Vue equivalent of: document.getElementById('Daily').classList.remove('active')
            } else if (event.target.textContent === this.timePeriods[1]) {
                this.prevPeriod = 'Last Week'
                this.$refs.timePeriod[0].classList.remove('active') // this is Vue equivalent of: document.getElementById('Daily').classList.remove('active')
            } else {
                this.prevPeriod = 'Last Month'
                this.$refs.timePeriod[0].classList.remove('active') // this is Vue equivalent of: document.getElementById('Daily').classList.remove('active')
            }
        }
    },
    mounted() {
        this.prevPeriod = 'Yesterday'
        this.$refs.timePeriod[0].classList.add('active') // this is Vue equivalent of: document.getElementById('Daily').classList.add('active')
    }
}

Vue.createApp(App).mount('#app')





// QQQ: For "nine..." version and this version, the console error: Error: <svg> attribute height: Expected length, "auto".