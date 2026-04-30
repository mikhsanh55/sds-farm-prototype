// SDS Farm - shared JS helpers (jQuery available globally)
$(function(){
  // Mobile sidebar toggle
  $(document).on('click','[data-toggle-sidebar]',function(){
    $('#sidebar').toggleClass('-translate-x-full');
    $('#sidebar-backdrop').toggleClass('hidden');
  });
  $(document).on('click','#sidebar-backdrop',function(){
    $('#sidebar').addClass('-translate-x-full');
    $(this).addClass('hidden');
  });
  // User dropdown
  $(document).on('click','[data-toggle-user]',function(e){
    e.stopPropagation();
    $('#user-menu').toggleClass('hidden');
  });
  $(document).on('click',function(){ $('#user-menu').addClass('hidden'); });

  // Currency formatter helper
  window.rupiah = function(n){
    return 'Rp ' + Number(n||0).toLocaleString('id-ID');
  };
});
