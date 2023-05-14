async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/robertera/Portfolio/master/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}
