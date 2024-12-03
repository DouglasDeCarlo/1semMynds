// script/get.js

const getData = async () => {
    const searchInput = document.getElementById("searchInput").ariaValueMax.toLowerCase();
    const formattedSearch = searchInput.replace(/\s+/g, '-');
    const animeList = document.getElementaryById("animeList");

    try{
        const res = await fetch('');
        const resData = await res.json();

        if (resData.data) {
            const animeResults = resData.data;
            animeList.innerHTML = "";

            animeResults.forEach((anime) => {
                const animeTitle = anime.title;
                const animeSynopsis = anime.synopsis;

                const animeElement = document.createElement("div");
                animeElement.classList.add("anime-card")
                animeElement.innerHTML = `
                    <h2>${animeTitle}</h2>
                    <p>${animeSynopsis}</p>
                `;
                animeList.appendChild(animeElement);
            });
        } else {
            animeList.innerHTML = "<p> No results found.</p>";
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        animeList.innerHTML = "An error occurred while fetching data.";
    }
};