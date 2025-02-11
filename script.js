
        // Project details for modal
        const projects = {
            project1:{
                title:'Real Time Chat Application',
                description:'A real-time chat app built with Node.js and Socket.IO that allows users to communicate instantly.'
            },
            project2:{
                title:'AI Mock Interview Website',
                description:'An AI-powered platform for practicing interviews using Next.js that simulates real interview conditions.'
            },
            project3:{
                title:'YouTube Clone',
                description:'A website similar to YouTube for streaming videos with features like search and user authentication.'
            },
        };
   
        function openModal(project) {
            document.getElementById('modal-title').innerText = projects[project].title ;
            document.getElementById('modal-description').innerText = projects[project].description ;
            document.getElementById('myModal').style.display = 'block';  
        }
   
        function closeModal() {  
            document.getElementById('myModal').style.display = 'none';  
        }
   
        document.querySelector('.contact-form').addEventListener('submit', function(event) {  
            event.preventDefault();  
            alert('Thanks for reaching out!');  
     });

     // Close modal when clicking outside of it
     window.onclick = function(event) {  
         if (event.target == document.getElementById('myModal')) {  
             closeModal();  
         }  
     };

     // Project filtering function
     function filterProjects() {
         const filter = document.getElementById('project-filter').value.toLowerCase();
         const projects = document.querySelectorAll('#project-list > div');

         projects.forEach(project => {
             const title = project.querySelector('h3').innerText.toLowerCase();
             if (title.includes(filter)) {
                 project.style.display = '';
             } else {
                 project.style.display = 'none';
             }
         });
     }

     // Back to Top Button functionality
     const backToTopButton = document.getElementById("backToTop");

     window.addEventListener("scroll", () => {
         if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
             backToTopButton.style.display = "block";
         } else {
             backToTopButton.style.display = "none";
            }
     });

     backToTopButton.addEventListener("click", () => {
         document.body.scrollTop = 0; // For Safari
         document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
     });