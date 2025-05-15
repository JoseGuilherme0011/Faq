// faq.js

document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq-question');
  
    questions.forEach((question) => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.classList.contains('open');
  
        // Fecha todas as respostas
        document.querySelectorAll('.faq-answer').forEach((el) => {
          el.classList.remove('open');
        });
  
        // Abre a resposta clicada, se não estava aberta
        if (!isOpen) {
          answer.classList.add('open');
        }
      });
    });
  });
  