
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    while (true) {
        const food = process.env.FAVORITE_FOOD;
        console.log(`My favorite food is ${food}`);
        console.log("Microservices rock!");
        await sleep(5000);
    }
}

main();
