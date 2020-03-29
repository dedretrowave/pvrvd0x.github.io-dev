function countAge() {
    const birth = new Date(2001, 1, 3);

    let diff = Date.now() - birth.getTime();
    let age = new Date(diff);

    return Math.abs(age.getUTCFullYear() - 1970);
}

export default countAge;