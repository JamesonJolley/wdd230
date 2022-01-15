    // we need to wait for the DOM to load
    document.addEventListener('DOMContentLoaded', function () {
        // gets the info from the DOM
        const today = new Date();
        const year = today.getFullYear();
        const lastModified = document.lastModified;
        const footer = document.querySelector("footer")
    
        //makes elements
        let copyright = document.createElement("p")
        copyright.append(`© ${year} |Jameson M. Jolley| New Mexico`)
    
        let lastM = document.createElement("p")
        lastM.append(`${lastModified}`)
    
        //appends to the DOM
        footer.append(copyright)
        footer.append(lastM)
        
    
    });
    