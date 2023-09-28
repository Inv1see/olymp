function countRemovedChannels(levels) {
    let removedChannels = 0;

    for (let i = 1; i <= levels; i++) {
        removedChannels += i * 2;
    }

    return removedChannels;
}

const levels = 57 - 1;
const removedChannels = countRemovedChannels(levels) + 87;
console.log(removedChannels); // 3279