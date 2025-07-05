window.addEventListener ("DOMContentLoaded" , function (e) {
    console.log("je suis entré dans la console");
        const add = document.getElementById("notePlus")
        const suppr = document.getElementById("noteSuppr")
        const contour = document.getElementById("noteContainer")
        const noteSearch = document.getElementById("search")
      
        
       
     add.addEventListener('click' , () => {
        const container = document.createElement("div")
            container.className = "note";
            const closeBtn = document.createElement("span");
            closeBtn.textContent = "Supprimer";
            closeBtn.className = "closeNote";
            closeBtn.addEventListener("click", () => {
                container.remove();
            });
        const boiteTitre = document.createElement("input");
            boiteTitre.type = 'text';
            boiteTitre.placeholder = 'Titre';
            boiteTitre.className = "noteTitre";
            boiteTitre.value = "";
    
        const boitetext = document.createElement("textarea")
            boitetext.placeholder = 'enter your note'
            boitetext.value = ""
            boitetext.className = "text"


            const dateNow = new Date();
             const jour = String(dateNow.getDate()).padStart(2, "0");
             const mois = String(dateNow.getMonth() + 1).padStart(2, "0");
             const annee = dateNow.getFullYear();
             const dateString = jour + "/" + mois + "/" + annee;
             
         const space = document.createElement("div")
             space.className = "espace"
             space.textContent = dateString
            
            container.appendChild(space);
            container.appendChild(closeBtn);
            container.appendChild(boiteTitre);
            container.appendChild(boitetext);
            contour.appendChild(container);
            
        contour.appendChild(container)
    })
    suppr.addEventListener('click', () => {
        contour.innerHTML = ""
    })

    noteSearch.addEventListener('input' , () => {
        const commencer = noteSearch.value.toLowerCase()
        const toutesLesNotes = document.querySelectorAll(".note");        
        
        toutesLesNotes.forEach(note => {
            const titre = note.querySelector(".noteTitre").value.toLowerCase();      
      
        if (titre.startsWith(commencer)) {
            note.style.display =  "flex";
            
        }else{
            note.style.display = "none"
        }
    })

    })


    
    })
