console.log("Sou gay kkkkk");

function getProfile() {
    //event.preventDefault();
    const userName = document.getElementById("input-nome").value;
    const url = `https://api.github.com/users/${userName}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.message == "Not Found") {
                document.getElementById("div-resultado").innerHTML = "Usuário não encontrado!";
            } else {
                document.getElementById("div-resultado").innerHTML =
                `
                <p> 
                <img src='${data.avatar_url}'> <br><br>
                Nome de usuário: ${data.name} <br>
                Repositórios públicos: ${data.public_repos}<br>
                Seguidores: ${data.followers}<br>
                Seguindo: ${data.following}<br>
                <a href='${data.html_url}?tab=repositories'>Repositórios</a>
                </p>
                `
            }
        });
}

/*
document.getElementById("paragrafo").innerHTML = `<img src='${data.avatar_url}'> <br><br>`;
document.getElementById("paragrafo").innerHTML += "Nome de usuário: "+ data.name + "<br><br>";
document.getElementById("paragrafo").innerHTML += "Repositórios públicos: "+ data.public_repos + "<br><br>";
document.getElementById("paragrafo").innerHTML += "Seguidores: "+ data.followers + "<br><br>";
document.getElementById("paragrafo").innerHTML += "Seguindo: "+ data.following + "<br><br>";
document.getElementById("paragrafo").innerHTML += `<a href='${data.repos_url}'>Repositórios</a>`;
*/