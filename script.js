const jobs = [

{
title:"Auto Mechanic",
company:"Demo Garage",
country:"Ghana",
category:"Mechanic",
salary:"Negotiable"
},

{
title:"Electrician",
company:"Demo Electrical",
country:"United Kingdom",
category:"Technical",
salary:"£25/hour"
},

{
title:"Professional Barber",
company:"Demo Barber Shop",
country:"UAE",
category:"Beauty",
salary:"Negotiable"
},

{
title:"Hair Braider",
company:"Demo Beauty Salon",
country:"Ghana",
category:"Beauty",
salary:"Negotiable"
},

{
title:"Construction Mason",
company:"Demo Construction",
country:"Canada",
category:"Construction",
salary:"CAD $30/hour"
},

{
title:"Carpenter",
company:"Demo Building Company",
country:"Ghana",
category:"Construction",
salary:"Negotiable"
},

{
title:"Solar Technician",
company:"Demo Energy",
country:"Germany",
category:"Technical",
salary:"€3000/month"
},

{
title:"Software Developer",
company:"Demo Technology",
country:"Remote",
category:"IT",
salary:"Negotiable"
},

{
title:"Heavy Duty Driver",
company:"Demo Logistics",
country:"Ghana",
category:"Transport",
salary:"Negotiable"
},

{
title:"Welder",
company:"Demo Engineering",
country:"Australia",
category:"Technical",
salary:"AUD $40/hour"
}

];

function displayJobs(list=jobs){

const grid=document.getElementById("jobGrid");

grid.innerHTML="";

list.forEach(job=>{

grid.innerHTML+=`

<div class="job-card">

<h3>${job.title}</h3>

<p>${job.company}</p>

<p>📍 ${job.country}</p>

<p>💼 ${job.category}</p>

<p>💰 ${job.salary}</p>

<button onclick="applyJob('${job.title}')">
Apply Now
</button>

</div>

`;

});

}

function searchJobs(){

const keyword=document.getElementById("searchInput").value.toLowerCase();

const location=document.getElementById("location").value;

const category=document.getElementById("categoryFilter").value;

const filtered=jobs.filter(job=>

job.title.toLowerCase().includes(keyword)&&

(!location||job.country===location)&&

(!category||job.category===category)

);

displayJobs(filtered);

}

function applyJob(title){

alert("You selected "+title+". Application system coming soon.");

}

function openModal(id){

document.getElementById(id).style.display="flex";

}

function closeModal(id){

document.getElementById(id).style.display="none";

}

function addJob(){

const title=document.getElementById("jobTitle").value;

const company=document.getElementById("company").value;

const country=document.getElementById("jobCountry").value;

const category=document.getElementById("jobCategory").value;

const salary=document.getElementById("salary").value;

if(!title||!company||!country){

alert("Please fill in the required information.");

return;

}

jobs.unshift({

title,
company,
country,
category,
salary:salary||"Negotiable"

});

displayJobs();

closeModal("postjob");

alert("Job added to this page successfully!");

}

displayJobs();
