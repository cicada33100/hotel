function openModal(index) {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    
    // Update modal content dynamically based on the selected image
    var info = "This is the information about image " + index;
    // You can fetch the specific information about the image from a database or local variables, as per your requirements
    
    var infoElement = document.createElement("p");
    var infoText = document.createTextNode(info);
    infoElement.appendChild(infoText);
    var modalContent = document.querySelector(".modal-content");
    modalContent.insertBefore(infoElement, modalContent.childNodes[2]);
    
    // You can also dynamically populate the slider images, based on the selected image
    // Here, we'll just display some placeholder images
    var sliderImages = ["images/twin soba.jpg", "images/twin soba.jpg", "images/twin soba.jpg"];
    var sliderElement = document.querySelector(".slider");
    sliderImages.forEach(function(imageSrc) {
      var imgElement = document.createElement("img");
      imgElement.setAttribute("src", imageSrc);
      sliderElement.appendChild(imgElement);
    });
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    
    // Remove dynamically added content when modal is closed
    var modalContent = document.querySelector(".modal-content");
    while (modalContent.childNodes.length > 3) {
      modalContent.removeChild(modalContent.lastChild);
    }
  }
  