const adjRootList = {
    "daily" : "Day",
    "weekly" : "Week",
    "monthly" : "Month",
}

function convertAdjToRoot(adj) {
    return adjRootList[adj]
}

function setupTimeTrack(timeTrack) {
    const categories = timeTrack.querySelectorAll(".time-track__category");
    const switchBtns = timeTrack.querySelectorAll(".time-track__switch");

    let timeTrackData = {}
    
    let timePeriod;
    
    const renderCurrentTime = () => {
        timeTrackData.forEach(time => {
            for (let cat of categories) {
                if (cat.className.includes(time.title.split(" ").join("-").toLowerCase())) {
                    const timeTrackName = cat.querySelector(".time-track__name");
                    timeTrackName.textContent = time.title;

                    if (!timePeriod) {
                        timePeriod = Object.entries(time.timeframes)[0][0];
                    }

                    const currentTimeEl = cat.querySelector('.time-track__time');
                    const lastTimeEl = cat.querySelector(".time-track__last");
                    currentTimeEl.textContent = time.timeframes[timePeriod].current + "hrs";
                    lastTimeEl.textContent = `Last ${convertAdjToRoot(timePeriod)} - ` + time.timeframes[timePeriod].previous + "hrs";
                }
            }
        })
    }

    switchBtns.forEach(switchBtn => {
        switchBtn.addEventListener("click", (e) => {
            for(let sbtn of switchBtns) {
                sbtn.classList.remove("time-track__switch--active")
            }
            
            timePeriod = e.currentTarget.dataset.timePeriod;
            e.currentTarget.classList.add("time-track__switch--active")
            renderCurrentTime()
        })
    })

    fetch(timeTrack.dataset.fetchUrl).then(async (response) => {
        if (!response.ok) return;

        timeTrackData = await response.json();

        renderCurrentTime();
    })
}

document.querySelectorAll(".time-track").forEach(setupTimeTrack);

let test = {
    hello: "hi"
}