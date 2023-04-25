function initModal() {
    // Get the modal
    const modal = document.getElementById("myModal");
    const modal1 = document.getElementById("modal1");
    const modal3 = document.getElementById("modal3")
  
    // Get the image and insert it inside the modal
    const images = document.getElementsByTagName("img");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const goButton = document.getElementById("go-button");
    const saveButton = document.getElementById("save-button");
    for (let i = 0; i < images.length; i++) {
      images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;
  
        // Set a new image source
        modalImg.src = "./Images/modal1.png";
      };
    }

    // Add an onclick function to modal1 image
    modal1.onclick = function() {
      modal.style.display = "block";
      modalImg.src = "./Images/modal2.png";

      // Remove the code that changes the image source to modal1.png
    };

        // Add an onclick function to modal1 image
      modal3.onclick = function() {
          modal.style.display = "block";
          modalImg.src = "./Images/modal3.png";
    
          // Remove the code that changes the image source to modal1.png
      };
  

    // Add an event listener to open a new tab when the "Go" button is clicked
    goButton.addEventListener("click", function() {
    window.open(
        "https://www.airbnb.com/rooms/780146165855037387?source_impression_id=p3_1682395432_nfg4k2j44ohFNOYm&fbclid=IwAR3AofTYlIMuxkY-xtSeBkqYxFAM2uduqJh1gurojrHsWxltvQApUmVk2wk", 
        "_blank"
        );
    });
  
    // When the user clicks on the Save button, download the image
    saveButton.onclick = function() {
      const link = document.createElement("a");
      link.href = modalImg.src;
      link.download = modalImg.alt;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

  
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    };
  }
  
  window.addEventListener("load", initModal);
  