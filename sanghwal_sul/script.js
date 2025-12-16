function show_page(pageId){
    document.querySelectorAll('.stuff_list').forEach(p => p.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
    document.querySelectorAll(".footer_number_button").forEach(li => li.classList.remove("on"));
    const active_menu = document.querySelector(`.footer_number_button[data-page="${pageId}"]`);
    if (active_menu){
        active_menu.classList.add("on");
    }
}
