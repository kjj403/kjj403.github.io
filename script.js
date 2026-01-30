document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('see-projects').addEventListener('click', function(){
  document.getElementById('projects').scrollIntoView({behavior:'smooth'});
});
// Simple placeholder for project links
document.querySelectorAll('.project-link').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    alert('프로젝트 페이지는 나중에 연결하세요.');
  });
});
