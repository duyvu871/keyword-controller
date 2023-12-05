export function getRandomIntInclusive(min: number, max: number): number {
    const randomBuffer = new Uint32Array(1);

    window.crypto.getRandomValues(randomBuffer);

    let randomNumber = randomBuffer[0] / (0xffffffff + 1);

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(randomNumber * (max - min + 1)) + min;
}

export function RandomBoolean(): boolean {
    return Number((Math.random()*10000000000 + "")[8])%2 === 0;
}

export function randomList<T>(list: Array<T>): T {
    const length = list.length;
    const randomNumber: number = getRandomIntInclusive(0, length);
    return list[randomNumber];
}