document.getElementById('loginSelect').addEventListener('change', function(){
    var selectedOption = this.options[this.selectedIndex].classList;

    if (selectedOption.contains('option-rh')) {
        window.location.href = 'portalRH.html';
    } else if (selectedOption.contains('option-candidato')) {
        window.location.href = 'loginCandidato.html';
    }
});