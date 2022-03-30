var data = {
    "name": "Davina Melisa Franco",
    "backImage": "img/banner.jpg",
    "image": "img/perfil.jpg",
    "position": "Analista de Sistemas de Computacion",
    "ubication": "Ingeniero Chanourdié - Santa Fe",
    "about": "Hola, soy Davina Melisa Franco. Me apasiona la informatica, las redes sociales y la comunicación. Tengo excelente habilidades para el desarrollo de contenidos digitales y adaptarme a cualquier hambiente laboral en la materia.",
    "experience": [
      {
        "position": "Soporte técnico",
        "company": "CSDNET Servicios Digitales S.R.L.",
        "img": "img/logo-csdnet.jpg",
        "start": "2020",
        "end": "actualidad",
        "timeElapsed": "2 años"
      },
      {
        "position": "Comunicación y redes sociales",
        "company": "Comuna Ingeniero Chanourdié",
        "img": "img/logo-comuna.png",
        "start": "2020",
        "end": "actualidad",
        "timeElapsed": "2 años"

      }
    ],
    "education": [
      {
        "school": "Argentina Programa",
        "title": "SeProgramar (aprobado)"+"YoProgramo (Cursando)",
        "img": "img/logo-arg-prog.jpg",
        "start": "2021",
        "end": "2022"
      },
      {
        "school": "Instituto Nacional de Administración Pública",
        "title": "Comunicación Gubernamental y Redes Sociales",
        "img": "img/logo-inap.jpg",
        "start": "2021",
        "end": "2021"
      },
  
      {
        "school": "Escuela Superior de Comercio N° 43",
        "title": "Analista Programador, Analista de Sistemas de Computación",
        "img": "img/logo-comercio.jpg",
        "start": "2011",
        "end": "2018"
      }
    ],
    "aptitudes": [
      {
        "aptitude": "Herramientas de imagen y diseño",
        "progress":"75"
      },
      {
        "aptitude": "Gestión de redes sociales",
        "progress":"80"
      },
      {
        "aptitude": "Redaccion de contenidos",
        "progress":"80"
      },
      {
        "aptitude": "Sistemas",
        "progress":"90"
      },
      {
        "aptitude": "Solución de problemas",
        "progress":"85"
      },
    ]
     
  };
  updateView();
function updateView() {
    $('#info-name')[0].innerText = data.name;
    $('#info-position')[0].innerText = data.position;
    $('#info-ubication')[0].innerText = data.ubication;
    $('#about')[0].innerText = data.about;
    $('#expList').empty();
    $('#eduList').empty();
    $('#aptList').empty();
    populateExp();
    populateEducation();
    populateApt();
}
function populateExp() {
    document.getElementById('expList').innerHTML = data.experience.map(company => `
      <li>
        <div class="data-container">
          <a href="#">
            <div class="logo-image-container"><img id="exp-img" class="logo-image" src="${company.img}"></div>
            <div class="list-info">
              <div>
                <h3 id="exp-company">${company.company}</h3>
                <p><span id="exp-position">${company.position}</span> 
                <h4><span id="exp-initial">${company.start}</span> – <span id="exp-end">${company.end}</span> - <span id="exp-time">${company.timeElapsed}</span></h4>
                <h4 id="exp-place">Ingeniero Chanourdie-Santa Fe</h4>
              </div>
            </div>
          </a>
        </div>
        <div class="data-control">
          <div class="btn-edit"><a href="#" class="btn-right"><i class="fa fa-pen" onclick="showEditExpModal('${company.company}')"></i></a></div>
          <div class="btn-edit"><a href="#" class="btn-right"><i class="fa fa-trash" onclick="deleteExp('${company.company}')"></i></a></div>
        </div>
      </li>
      `).join('');
  }
  function populateEducation() {
    document.getElementById('eduList').innerHTML = data.education.map(school => `
    <li>
      <div class="data-container">
        <a href="#">
          <div class="logo-image-container"><img id="edu-img" class="logo-image" src="${school.img}"></div>
          <div class="list-info">
            <div>
              <h3 id="edu-school">${school.school}</h3>
              <p><span id="edu-title">${school.title}</span></p>
              <p><time id="edu-start">${school.start}</time> - <time id="edu-end">${school.end}</time></p>
            </div>
          </div>
        </a>
      </div>
      <div class="data-control">
        <div class="btn-edit"><a href="#" class="btn-right"><i class="fa fa-pen" onclick="showEditEduModal('${school.school}')"></i></a></div>
        <div class="btn-edit"><a href="#" class="btn-right"><i class="fa fa-trash" onclick="deleteEdu('${school.school}')"></i></a></div>
      </div>
    </li>
      `).join('');
  }
function populateApt (){
    document.getElementById('aptList').innerHTML = data.aptitudes.map(aptitudes => `
        <li>
            <div class="aptitude-info">
              <a href="#">
                <p><span id="apt-nombre">${aptitudes.aptitude}</span></p>
                <progress id="apt-prog" value="${aptitudes.progress}" max="100" indeterminate></progress>
              </a>
            </div>
            <div class="data-control">
            <div class="btn-edit"><a href="#" class="btn-right"><i class="fa fa-pen" onclick="showEditAptModal('${aptitudes.aptitude}')"></i></a></div>
            <div class="btn-edit"><a href="#" class="btn-right"><i class="fa fa-trash" onclick="deleteApt('${aptitudes.aptitude}')"></i></a></div>
            </div>
           </li>
           `).join('');
}
function showEditProfileModal() {
    $('#inputName')[0].value = data.name;
    $('#inputPosition')[0].value = data.position;
    $('#inputUbication')[0].value = data.ubication;
    $('#editProfile').modal("toggle");
  }
function showEditAboutModal() {
    $('#inputAbout')[0].value = data.about;
    $('#editAbout').modal("toggle");
  }
  function showNewExpModal() {
    $('#newExp').modal("toggle");
  }
function showEditExpModal(companyName) {
    var company = data.experience.filter(obj => obj.company === companyName)[0];
    $('#inputPositionExpEdit')[0].value = company.position;
    $('#inputCompanyExpEdit')[0].value = company.company;
    $('#inputImgExpEdit')[0].value = company.img;
    $('#inputInitialExpEdit')[0].value = company.start;
    $('#inputEndExpEdit')[0].value = company.end;
    $('#inputTimeExpEdit')[0].value = company.timeElapsed;
    $('#editExp').modal("toggle");
  }
function deleteExp(companyName){

  var opcion = confirm("¿Desea Eliminar?");
    if (opcion == true) {
      data.experience = data.experience.filter(obj => obj.company !== companyName);
      updateView();
    }
}
function showNewEduModal() {
  $('#newEdu').modal("toggle");
}
function showEditEduModal(schoolName) {
  var school = data.education.filter(obj => obj.school === schoolName)[0];
  $('#inputSchoolEdit')[0].value = school.school;
  $('#inputTitleEdit')[0].value = school.title;
  $('#inputSchoolImageEdit')[0].value = school.img;
  $('#inputSchoolInitialEdit')[0].value = school.start;
  $('#inputSchoolEndEdit')[0].value = school.end;
  $('#editEdu').modal("toggle");
}
function deleteEdu(schoolName){
  var opcion = confirm("¿Desea Eliminar?");
    if (opcion == true) {
      data.education = data.education.filter(obj => obj.school !== schoolName);
      updateView();
    }
}
function showNewAptModal() {
  $('#newApt').modal("toggle");
}
function saveEditProfileModal() {
  data.name = $('#inputName')[0].value;
  data.position = $('#inputPosition')[0].value;;
  data.ubication = $('#inputUbication')[0].value;
  updateView();
  $('#editProfile').modal("toggle");
}
function saveEditAboutModal() {
  data.about = $('#inputAbout')[0].value;
  updateView();
  $('#editAbout').modal("toggle");
}
function saveNewExpModal() {
  data.experience.push({
    "position": $('#inputPositionExp')[0].value,
    "company": $('#inputCompanyExp')[0].value,
    "img": $('#inputImgExp')[0].value,
    "start": $('#inputInitialExp')[0].value,
    "end": $('#inputEndExp')[0].value,
    "timeElapsed": $('#inputTimeExp')[0].value
  });
  updateView();
  $('#newExp').modal("toggle");
}
function saveEditExpModal(companyName) {
  data.experience.forEach(company => {
    if (companyName === company.company) {
      company.position = $('#inputPositionExpEdit')[0].value;
      company.img = $('#inputImgExpEdit')[0].value;
      company.start = $('#inputInitialExpEdit')[0].value;
      company.end = $('#inputEndExpEdit')[0].value;
      company.timeElapsed = $('#inputTimeExpEdit')[0].value;
    }
  })
  updateView();
  $('#editExp').modal("toggle");
}
function saveNewEduModal() {
  data.education.push({
    "school": $('#inputSchool')[0].value,
    "title": $('#inputTitle')[0].value,
    "img": $('#inputSchoolImage')[0].value,
    "start": $('#inputSchoolInitial')[0].value,
    "end": $('#inputSchoolEnd')[0].value
  });
  updateView();
  $('#newEdu').modal("toggle");

}
function saveEditEduModal(schoolName) {
  data.education.forEach(school => {
    if (schoolName === school.school) {
      console.log(school)
      school.title = $('#inputTitleEdit')[0].value;
      school.img = $('#inputSchoolImageEdit')[0].value;
      school.start = $('#inputSchoolInitialEdit')[0].value;
      school.end = $('#inputSchoolEndEdit')[0].value;
    }
  })
  updateView();
  $('#editEdu').modal("toggle");
}
function saveNewAptModal() {
  data.aptitudes.push({
    "aptitude":$('#inputApt')[0].value,
    "progress":$('#inputProg')[0].value,
  });
  updateView();
  $('#newApt').modal("toggle");
}
function showEditAptModal(aptitudeName) {
  var aptitudes = data.aptitudes.filter(obj => obj.aptitude === aptitudeName)[0];
  $('#inputAptEdit')[0].value = aptitudes.aptitude;
  $('#inputProgEdit')[0].value = aptitudes.progress;
  $('#editApt').modal("toggle");
}
function deleteApt(aptitudeName){
  var opcion = confirm("¿Desea Eliminar?");
    if (opcion == true) {
      data.aptitudes = data.aptitudes.filter(obj => obj.aptitude !== aptitudeName);
      updateView();
    }
}
function saveEditAptModal(aptitudeName) {
  data.aptitudes.forEach(aptitude => {
    if (aptitudeName === aptitude.aptitude) {
      console.log(aptitude)
      aptitude.aptitude = $('#inputAptEdit')[0].value;
      aptitude.progress = $('#inputProgEdit')[0].value;
    
    }
  })
  updateView();
  $('#editApt').modal("toggle");
}
function ShowLogin() {
 $('#login').modal ("toggle")
}