const videoList = Array.from(document.querySelectorAll('[data-time]'));

// WAY IN COURSE VIDEO:
// const totalSeconds = videoList
//         .map((video) =>  video.dataset.time)
//         .map(timeStr => {
//             const [mins, secs] = timeStr.split(':').map(parseFloat);
//             return (mins * 60) + secs;
//         }).reduce((acc, cur) => acc + cur);

const totalSeconds = videoList.reduce((acc, cur) => {
    const [mins, secs] = cur.dataset.time.split(':').map(parseFloat);
    return acc + (mins * 60) + secs;
}, 0)

console.log(`Total seconds is ${totalSeconds}`);

const hours = Math.floor(totalSeconds / 3600) + ' hours ' + Math.floor(totalSeconds / 60) % 60 + ' minutes ' + totalSeconds % 60 + ' seconds';

console.log(`This is ${hours}`);



