const repositories= document.querySelector('main.content');

function getApiGitHub()
{
fetch('https://api.github.com/users/camiyuka/repos')
.then(async res => 
{
    if ( !res.ok)
    {
        throw new Error(res.status);
    }

    let data = await res.json();
    data.map( item => 
    {
        let project = document.createElement('div');

project.innerHTML =   ` 

        <div class="project">
        <div>
            <h4 class="title">${ item.name}</h4>
            <span class="date-create">${ Intl.DateTimeFormat('pt-br').format(new Date(item.created_at)) }</span>
        </div>

        <div>
             <a href="${ item.html_url}"> ${ item.html_url}</a>
            <span class="language">
                <span class="circle"></span>
                 ${item.language}
            </span>
        </div>
    </div>
    ` 
        

        repositories.appendChild(project);  
    }      )
})
}

getApiGitHub()