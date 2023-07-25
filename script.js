// Update the current year for the footer
document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `<p>&copy; ${new Date().getFullYear()} Игралница-Занималница. Всички права запазени.</p>`;
    const footer = document.getElementsByTagName('footer')[0];
    footer.innerHTML = footerHTML;
  });
  